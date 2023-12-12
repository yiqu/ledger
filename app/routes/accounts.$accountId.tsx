import type { HeadersFunction, LoaderFunctionArgs } from "@remix-run/node";
import { json, type ActionFunctionArgs, type MetaFunction, redirect } from "@remix-run/node";
import { Outlet, isRouteErrorResponse, useLoaderData, useRouteError, useSearchParams } from "@remix-run/react";
import Stack from "@mui/material/Stack";
import invariant from "tiny-invariant";
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import Typography from "@mui/material/Typography";
import styles from "~/styles/mui-alert.css";
import OtherErrorDisplay from "~/components/error/OtherError";
import ActionLoaderErrorDisplay from "~/components/error/ActionLoaderError";
import { handleError } from "~/api/utils/utils.server";
import NoResult from "~/components/no-result/NoResult";
import TitleBarLayout from "~/components/title/TitleBarLayout";
import Box from "@mui/material/Box";
import Pagination from "@mui/material/Pagination";
import { getParamsAsObject } from "~/shared/utils/url.utils";
import type { HttpResponsePaged } from "~/shared/models/http.model";
import { deleteAccount, getAccount } from "~/api/accounts.server";
import type { Expense } from "~/shared/models/expense.model";
import { getExpensesByAccountId } from "~/api/expenses.server";
import { TitleNameDisplay } from "~/shared/components/Title";
import ExpenseList from "~/components/expense/ExpenseList";

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export const meta: MetaFunction = (data) => {
  return [
    { title: "Account Detail - Ledger" },
    { name: "description", content: "Account detail" },
  ];
};

export const headers: HeadersFunction = ({
  loaderHeaders,
}) => ({
  "Cache-Control": loaderHeaders.get("Cache-Control") ?? 'public, no-cache, max-age=0',
});

function AccountDetail() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { account, expenses: { currentResultSetCount, data, pageSize, totalCount, totalPages } } = useLoaderData<typeof loader>();
  invariant(account, "Expected account to be defined");

  const searchParamPage: string | null = searchParams.get('page');
  const currentPage = searchParamPage ? (parseInt(searchParamPage) ? (parseInt(searchParamPage) < 0 ? 0 : parseInt(searchParamPage)) : 0) : 0;

  const handlePageUpdate = (event: React.ChangeEvent<unknown>, value: number) => {
    setSearchParams((params: URLSearchParams) => {
      const currentParams = getParamsAsObject(params);
      return { ...currentParams, page: `${value - 1}` };
    });
  };

  return (
    <Stack direction="column" justifyContent="start" alignItems="start" width="100%" spacing={ 3 }>

      <TitleBarLayout>
        <Stack direction="row" justifyContent="start" alignItems="center" spacing={ 2 }>
          <AccountBalanceIcon />
          <TitleNameDisplay name={ account.name } />
        </Stack>
        <Stack direction="row" justifyContent="end" alignItems="center">
          <Typography variant="h5" fontFamily="Poppins">
            Total: { totalCount }
          </Typography>
        </Stack >
      </TitleBarLayout>

      {
        data.length === 0 ? (<NoResult />) : (
          <>
            <Stack direction="row" justifyContent="space-between" alignItems="center" mb={ 2 } width="100%">

              <Stack direction="row" justifyContent="flex-end" alignItems="center" width="100%">
                <Box mr={ 2 }>
                  <Typography variant="body2">
                    { `${(currentPage * pageSize) + 1}-${(currentPage * pageSize) + data.length} of ${currentResultSetCount}` }
                  </Typography>
                </Box>
                <Pagination count={ totalPages } showFirstButton showLastButton size="small" page={ currentPage + 1 } onChange={ handlePageUpdate } shape="rounded" />
              </Stack>
            </Stack>
            <ExpenseList expenses={ data } />
          </>

        )
      }

      <Outlet />

    </Stack>
  );
}

export default AccountDetail;

export async function loader({ request, params, context }: LoaderFunctionArgs) {
  invariant(params.accountId, "Expected params.accountId to be defined");

  const url = new URL(request.url);
  const pageParam = url.searchParams.get('page') as string | null;
  const filterParam: string | null = url.searchParams.get('q');
  const page: number = pageParam ? (parseInt(pageParam) ? (parseInt(pageParam) < 0 ? 0 : parseInt(pageParam)) : 0) : 0;

  const account = await getAccount(params.accountId);
  const expenses: HttpResponsePaged<Expense[]> = await getExpensesByAccountId(params.accountId, page, filterParam);

  const result = {
    account,
    expenses
  };
  return json(result);
}

export async function action({ request, context, params }: ActionFunctionArgs) {
  const body = await request.formData();
  const accountId = body.get('id') as string | null;
  invariant(accountId, "Expected account id in body to be defined");

  if (request.method === 'DELETE') {
    try {
      await deleteAccount(accountId);
      return redirect('/accounts');
    } catch (err: any) {
      return handleError({ message: err.message, error: true, showToast: true });
    }
  }

  return json({ success: true });
}

export function ErrorBoundary() {
  const error: any = useRouteError();
  if (isRouteErrorResponse(error)) {
    return (
      <ActionLoaderErrorDisplay error={ error } />
    );
  }

  return (
    <OtherErrorDisplay error={ error } />
  );
}