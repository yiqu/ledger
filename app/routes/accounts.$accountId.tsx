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
import TitleBarLayout from "~/components/title/TitleBarLayout";
import Box from "@mui/material/Box";
import { getParamsAsObject } from "~/shared/utils/url.utils";
import type { HttpResponsePaged } from "~/shared/models/http.model";
import { deleteAccount, getAccount } from "~/api/accounts.server";
import type { Expense } from "~/shared/models/expense.model";
import { getExpensesByAccountId } from "~/api/expenses.server";
import { TitleNameDisplay } from "~/shared/components/Title";
import Grid from '@mui/material/Unstable_Grid2';
import ContentPaperWrap from "~/shared/layouts/ContentPaperWrap";
import List from "@mui/material/List";
import { convertDateDisplay } from "~/api/utils/date.server";
import ReverseListItem from "~/shared/components/ReverseListItem";
import ExpenseTable from "~/components/expense/ExpenseTable";
import { EXPENSES_TABLE_COLUMNS } from "~/shared/utils/table";
import SearchInput from "~/components/data/SearchInput";
import TablePagination from "~/shared/components/TablePagination";

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
  const { account, expenses: { currentResultSetCount, data, pageSize, totalCount, totalPages }, filterParam } = useLoaderData<typeof loader>();
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
          <TitleNameDisplay name={ account?.name ?? 'N/A' } />
        </Stack>
        <Stack direction="row" justifyContent="end" alignItems="center">
          <Typography variant="h5" >
            Total: { totalCount }
          </Typography>
        </Stack >
      </TitleBarLayout>

      <Box sx={ { flexGrow: 1, width: '100%' } }>
        <Grid container columnSpacing={ 2 }>
          <Grid xs={ 12 } md={ 4 }>
            <ContentPaperWrap>
              <Stack direction="column" justifyContent="start" alignItems="start">
                <List sx={ { width: '100%' } }>
                  <ReverseListItem primaryText={ "Account Name" } secondaryText={ account.name } />
                  <ReverseListItem primaryText={ "Created" } secondaryText={ `${account.dateAddedFromNow.display}` } />
                  <ReverseListItem primaryText={ "Last Edited" } secondaryText={ account.updatedAtFromNow.display } />
                  <ReverseListItem primaryText={ "Shown On Dashboard" } secondaryText={ account.shown ? 'Yes' : 'No' } />
                  <ReverseListItem primaryText={ "ID" } secondaryText={ `${account.id}` } />
                </List>
              </Stack>
            </ContentPaperWrap>
          </Grid>

          <Grid xs={ 12 } md={ 8 }>

            <Stack direction="row" justifyContent="space-between" alignItems="center" mb={ 2 } width="100%">
              <SearchInput queryValue={ filterParam || '' } />
              <TablePagination
                currentPage={ currentPage }
                currentResultSetCount={ currentResultSetCount }
                data={ data }
                handlePageUpdate={ handlePageUpdate }
                pageSize={ pageSize }
                totalPages={ totalPages }
              />
            </Stack>

            <ExpenseTable expenses={ data } isTableFixed={ true } columnIds={ EXPENSES_TABLE_COLUMNS.filter((c) => c !== 'account') } />
          </Grid>
        </Grid>
      </Box>

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
    account: {
      ...account,
      dateAddedFromNow: convertDateDisplay(account?.dateAdded, 'longAndNow'),
      updatedAtFromNow: convertDateDisplay(account?.updatedAt, 'longAndNow')
    },
    expenses,
    filterParam
  };
  return json(result);
}

export async function action({ request, context, params }: ActionFunctionArgs) {
  const body = await request.formData();
  const accountId = body.get('id') as string | null;
  const url = new URL(request.url);
  const redirectUrl = url.searchParams.get('redirectUrl') as string;
  invariant(accountId, "Expected account id in body to be defined");

  if (request.method === 'DELETE') {
    try {
      await deleteAccount(accountId);
      return redirect(`${redirectUrl}`);
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