import { json, type ActionFunctionArgs, type MetaFunction } from "@remix-run/node";
import AppToolbar from "~/shared/toolbar/Toolbar";
import useScreenSize from "~/shared/hooks/useIsMobile";
import LayoutWithGutter from "~/shared/layouts/LayoutWithGutter";
import type { ShouldRevalidateFunction } from "@remix-run/react";
import { Outlet, useLocation, useNavigate, useParams, useSubmit } from "@remix-run/react";
//@ts-ignore
import urlcat from 'urlcat';
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import type { HeadersFunction } from "@remix-run/node";
import { convertDateDisplay } from "~/api/utils/date.server";
import AccountNavBar from "~/components/navbar/AccountNavBar";
import { getAccounts } from "~/api/accounts.server";
import type { Account } from "~/shared/models/account.model";


export const headers: HeadersFunction = ({
  loaderHeaders,
}) => ({
  "Cache-Control": 'public, no-cache, max-age=0',
});

function Accounts() {
  const { isMobile, isAboveXl } = useScreenSize();
  const navigate = useNavigate();
  const { accountId } = useParams();
  const submit = useSubmit();
  const { pathname } = useLocation();

  const handleAddNewAccount = () => {
    const url = urlcat('/add', '', { type: 'account', redirectUrl: '/accounts' });
    navigate(url);
  };

  const handleAddNewExpense = () => {
    const url = urlcat('/add', '', { type: 'expense', redirectUrl: `/accounts/${accountId ?? ''}`, accountId: `${accountId ?? ''}` });
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
      <AppToolbar toolbarProps={ {
        position: "sticky",
        sx: { top: isMobile ? '56px' : '64px' }
      } }>

        <AccountNavBar accountId={ accountId } onClickAction={ handleActionClick } />

      </AppToolbar>

      <Box mt={ 2 } mx={ isMobile ? 2 : 0 }>
        <LayoutWithGutter size={ 'wide' }>

          <Outlet />

        </LayoutWithGutter>
      </Box>
    </Stack>
  );
}

export default Accounts;

export async function loader() {
  const result = await getAccounts();
  let result2 = result.map((account: Account) => {
    return {
      ...account,
      dateAddedFromNow: convertDateDisplay(account.dateAdded, 'fromNow'),
      updatedAtFromNow: convertDateDisplay(account.updatedAt, 'fromNow'),
    };
  });
  return json(result2);
}

export const shouldRevalidate: ShouldRevalidateFunction = (payload) => {
  return payload.defaultShouldRevalidate;
};