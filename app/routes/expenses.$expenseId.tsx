import type { LoaderFunctionArgs } from "@remix-run/node";
import { json, type ActionFunctionArgs, type MetaFunction, redirect } from "@remix-run/node";
import { Link, Outlet, useFetchers, useLoaderData } from "@remix-run/react";
import Stack from "@mui/material/Stack";
import invariant from "tiny-invariant";
import { handleError } from "~/api/utils/utils.server";
import TitleBarLayout from "~/components/title/TitleBarLayout";
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import NoResult from "~/components/no-result/NoResult";
import { deleteExpense, getExpenseById } from "~/api/expenses.server";
import type { Expense } from "~/shared/models/expense.model";
import { TitleNameDisplay } from "~/shared/components/Title";
import ExpenseCommentForm from "~/components/expense/ExpenseCommentForm";
import { getCommentsByExpenseId } from "~/api/comments.server";
import type { ExpenseComment } from "~/shared/models/comment.model";
import { defer } from "@remix-run/node"; // or cloudflare/deno
import { Await } from "@remix-run/react";
import { Suspense } from "react";
import ExpenseCommentsSkeleton from "~/components/expense/ExpenseCommentsSkeleton";
import { ClientOnly } from "remix-utils/client-only";
import ExpenseComments from "~/components/expense/ExpenseComments";
import ContentPaperWrap from "~/shared/layouts/ContentPaperWrap";
import { expenseCommentFormFetcherId } from "~/shared/constants/fetcher-ids";
import CircularProgress from "@mui/material/CircularProgress";
import { getAccounts } from "~/api/accounts.server";
import Box from "@mui/material/Box";
import Grid from '@mui/material/Unstable_Grid2';
import List from "@mui/material/List";
import ReverseListItem from "~/shared/components/ReverseListItem";
import AccountBalanceIconOutlined from '@mui/icons-material/AccountBalanceOutlined';

export const meta: MetaFunction = (data) => {
  return [
    { title: "Expense Detail | Ledger" },
    { name: "description", content: "Expense detail" },
  ];
};

function ExpenseDetail() {
  const { expense, comments } = useLoaderData<typeof loader>();
  const fetchers = useFetchers();
  const commentFetcher = fetchers.find((fetcher) => fetcher.key === expenseCommentFormFetcherId);

  if (!expense) {
    return (
      <Stack direction="column" justifyContent="center" alignItems="center" height="100%">
        <NoResult type="expense" />
      </Stack>
    );
  }

  return (
    <Stack direction="column" justifyContent="start" alignItems="center" width="100%" spacing={ 3 }>

      <TitleBarLayout>
        <Stack direction="row" justifyContent="start" alignItems="center" spacing={ 2 }>
          <FormatListBulletedIcon />
          <TitleNameDisplay name={ 'Expense Info' } />
        </Stack>
        <Stack direction="row" justifyContent="end" alignItems="center">
          { (commentFetcher && commentFetcher.state !== 'idle') &&
            (
              <CircularProgress variant="indeterminate" color={ commentFetcher.state === 'submitting' ? 'info' : 'success' }
                size={ 20 }
              />
            )
          }
        </Stack >
      </TitleBarLayout>

      <Box sx={ { flexGrow: 1, width: '100%' } }>
        <Grid container columnSpacing={ 2 }>
          <Grid xs={ 12 } md={ 4 }>
            <ContentPaperWrap>
              <Stack direction="column" justifyContent="start" alignItems="start">
                <List sx={ { width: '100%' } }>
                  <ReverseListItem primaryText={ "Amount" } secondaryText={ expense.amount.toLocaleString() } />
                  <ReverseListItem primaryText={ "Date of expense" } secondaryText={ expense.dateFromNow?.display } />
                  <ReverseListItem primaryText={ "Date added" } secondaryText={ expense.dateAddedFromNow?.display } />
                  <ReverseListItem primaryText={ "Date updated" } secondaryText={ expense.updatedAtEpoch ? expense.updatedAtFromNow?.display : 'N/A' } />
                  <ReverseListItem primaryText={ "Account" }
                    secondaryText={
                      <Link to={ `/accounts/${expense.account.id}__${expense.account.name}` }>
                        <Stack direction="row" component="span" justifyContent="start" alignItems="center">
                          <AccountBalanceIconOutlined color='primary' fontSize="small" sx={ { mr: 0.5 } } />
                          { expense.account.name }
                        </Stack>
                      </Link>
                    }
                  />
                </List>
              </Stack>
            </ContentPaperWrap>
          </Grid>

          <Grid xs={ 12 } md={ 8 }>

            <Stack direction="row" justifyContent="space-between" alignItems="center" mb={ 2 } width="100%">
              <ContentPaperWrap>
                <Stack direction="column" justifyContent="start" alignItems="start" width="100%" spacing={ 2 }>

                  <ExpenseCommentForm expenseId={ expense.id } />

                  <Suspense fallback={ <ExpenseCommentsSkeleton /> }>
                    <Await resolve={ comments }>
                      { (comments) => {
                        return (
                          <ClientOnly fallback={ <>Loading</> }>
                            { () => <ExpenseComments comments={ comments } /> }
                          </ClientOnly>
                        );
                      } }
                    </Await>
                  </Suspense>
                </Stack>
              </ContentPaperWrap>
            </Stack>

          </Grid>
        </Grid>
      </Box>

      {/* <ContentPaperWrap>
        <Stack width="100%" direction="row" justifyContent="start" alignItems="center" spacing={ 2 }>

          <Typography variant="h5" fontWeight="700">
            ${ expense.amount.toLocaleString() }
          </Typography>
          <Divider orientation="vertical" flexItem variant="fullWidth" />
          <table style={ { borderSpacing: '1rem' } }>
            <tbody>
              <tr>
                <td>Expense Date:</td>
                <td>{ expense.dateFromNow?.display }</td>
              </tr>
              <tr>
                <td>Added on:</td>
                <td>{ expense.dateAddedFromNow?.display }</td>
              </tr>
              <tr>
                <td>Updated on:</td>
                <td>{ expense.updatedAtEpoch ? expense.updatedAtFromNow?.display : 'N/A' }</td>
              </tr>
              <tr>
                <td> Account:</td>
                <td><Link to={ `/accounts/${expense.account.id}` }>
                  { expense.account.name }
                </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </Stack>
      </ContentPaperWrap>

      <ContentPaperWrap>
        <Stack direction="column" justifyContent="start" alignItems="start" width="100%" spacing={ 2 }>

          <ExpenseCommentForm expenseId={ expense.id } />

          <Suspense fallback={ <ExpenseCommentsSkeleton /> }>
            <Await resolve={ comments }>
              { (comments) => {
                return (
                  <ClientOnly fallback={ <>Loading</> }>
                    { () => <ExpenseComments comments={ comments } /> }
                  </ClientOnly>
                );
              } }
            </Await>
          </Suspense>
        </Stack>
      </ContentPaperWrap> */}

      <Outlet />
    </Stack>
  );
}

export default ExpenseDetail;

export async function loader({ request, params, context }: LoaderFunctionArgs) {
  invariant(params.expenseId, "Expected params.expenseId to be defined");
  const accounts = await getAccounts();
  const expense: Expense | null = await getExpenseById(params.expenseId);
  const comments$: Promise<ExpenseComment[]> = getCommentsByExpenseId(params.expenseId);

  return defer({
    expense,
    accounts,
    comments: comments$
  });
}

export async function action({ request, context, params }: ActionFunctionArgs) {
  const body = await request.formData();
  const expenseId = body.get('id') as string | null;
  const url = new URL(request.url);
  const redirectUrl = url.searchParams.get('redirectUrl') as string;
  invariant(expenseId, "Expected expense id in body to be defined");

  if (request.method === 'DELETE') {
    try {
      await deleteExpense(expenseId);
      return redirect(`${redirectUrl}`);
    } catch (err: any) {
      return handleError({ message: err.message, error: true, showToast: true });
    }
  }

  return json({ success: true, timestamp: `${Date.now()}` });
}