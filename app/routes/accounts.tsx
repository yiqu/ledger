import { json } from "@remix-run/node";
import useScreenSize from "~/shared/hooks/useIsMobile";
import LayoutWithGutter from "~/shared/layouts/LayoutWithGutter";
import type { ShouldRevalidateFunction } from "@remix-run/react";
import { Outlet, useLocation, useNavigate, useParams, useSearchParams, useSubmit } from "@remix-run/react";
//@ts-ignore
import urlcat from 'urlcat';
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import type { HeadersFunction, LoaderFunctionArgs } from "@remix-run/node";
import AccountNavBar from "~/components/navbar/AccountNavBar";
import { getAccountsPaged } from "~/api/accounts.server";
import StickyToolbar from "~/shared/toolbar/StickyToolbar";
import type { Account } from "~/shared/models/account.model";
import type { HttpResponsePaged } from "~/shared/models/http.model";


export const headers: HeadersFunction = ({
  loaderHeaders,
}) => ({
  "Cache-Control": 'public, no-cache, max-age=0',
});

function Accounts() {
  const navigate = useNavigate();
  const submit = useSubmit();
  const [searchParams] = useSearchParams();
  const { isMobile } = useScreenSize();
  const { accountId } = useParams();
  const { pathname } = useLocation();
  const extraSearchParams = searchParams.size > 0 ? `?${searchParams.toString()}` : '';

  const handleAddNewAccount = () => {
    const url = urlcat('/add', '', { type: 'account', redirectUrl: `/accounts${extraSearchParams}` });
    navigate(url);
  };

  const handleAddNewExpense = () => {
    const url = urlcat('/add', '', { type: 'expense', redirectUrl: `/accounts/${accountId ?? ''}${extraSearchParams}`, accountId: accountId });
    navigate(url);
  };

  const handleDeleteAccount = () => {
    const proceed = confirm(`Are you sure you want to delete this item?`);
    if (!proceed) return;

    submit({ id: accountId } as any, {
      action: `/accounts/${accountId}`,
      method: 'DELETE',
      replace: true,
    });
  };

  const handleActionClick = (actionId: string) => {
    switch (actionId) {
      case 'addAccount': {
        handleAddNewAccount();
        break;
      }
      case 'editAccount': {
        const url = urlcat('', '/accounts/:accountId/edit', { accountId: accountId, redirectUrl: pathname });
        navigate(url);
        break;
      }
      case 'newExpense': {
        handleAddNewExpense();
        break;
      }
      case 'deleteAccount': {
        handleDeleteAccount();
        break;
      }
    }
  };

  return (
    <Stack direction="column" width="100%">
      <StickyToolbar>
        <AccountNavBar accountId={ accountId } onClickAction={ handleActionClick } />
      </StickyToolbar>

      <Box mt={ 2 } mx={ isMobile ? 2 : 0 }>
        <LayoutWithGutter size={ 'wide' }>

          <Outlet />

        </LayoutWithGutter>
      </Box>
    </Stack>
  );
}

export default Accounts;

export async function loader({ request, params, context }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const pageParam = url.searchParams.get('page') as string | null;
  const filterParam: string | null = url.searchParams.get('q');
  const page: number = pageParam ? (parseInt(pageParam) ? (parseInt(pageParam) < 0 ? 0 : parseInt(pageParam)) : 0) : 0;

  const result: HttpResponsePaged<Account[]> = await getAccountsPaged(page, filterParam);
  return json(result);
}

export const shouldRevalidate: ShouldRevalidateFunction = (payload) => {
  return payload.defaultShouldRevalidate;
};