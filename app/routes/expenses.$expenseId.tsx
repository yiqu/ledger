import type { HeadersFunction, LoaderFunctionArgs } from "@remix-run/node";
import { json, type ActionFunctionArgs, type MetaFunction, redirect } from "@remix-run/node";
import { Link, Outlet, useLoaderData } from "@remix-run/react";
import Stack from "@mui/material/Stack";
import invariant from "tiny-invariant";
import Typography from "@mui/material/Typography";
import { handleError } from "~/api/utils/utils.server";
//import { ClientOnly } from "remix-utils";
import TitleBarLayout from "~/components/title/TitleBarLayout";
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import NoResult from "~/components/no-result/NoResult";
import { deleteExpense, getExpenseAndExpenseCommentsById } from "~/api/expenses.server";
import type { ExpenseWithComments } from "~/shared/models/expense.model";
import { getAccounts } from "~/api/accounts.server";
import { TitleNameDisplay } from "~/shared/components/Title";
import format from "date-fns/format";
import ExpenseCommentForm from "~/components/expense/ExpenseCommentForm";
import ExpenseComments from "~/components/expense/ExpenseComments";


export const meta: MetaFunction = (data) => {
  return [
    { title: "Expense Detail - Ledger" },
    { name: "description", content: "Expense detail" },
  ];
};

export const headers: HeadersFunction = ({
  loaderHeaders,
}) => ({
  "Cache-Control": 'public, no-cache, max-age=0',
});

function ExpenseDetail() {
  const { expense } = useLoaderData<typeof loader>();

  if (!expense) {
    return (
      <NoResult />
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
        </Stack >
      </TitleBarLayout>

      <Stack border={ `1px solid #ccc` } width="100%" p={ 3 } borderRadius="25px" direction="column" justifyContent="start" alignItems="start" spacing={ 2 }>
        <Typography variant="h5" className="montserrat" fontWeight="700">
          ${ expense.amount.toLocaleString() }
        </Typography>
      </Stack>

      <Stack border={ `1px solid #ccc` } width="100%" p={ 3 } borderRadius="25px" direction="column" justifyContent="start" alignItems="start" spacing={ 2 }>
        <Typography variant="h6">
          ID:
          <Typography variant="body2" title={ expense.id }>
            { expense.id }
          </Typography>

        </Typography>
        <Typography variant="h6">
          Date:
          <Typography variant="body2" title={ `${expense.date}` }>
            {
              format(expense.date, 'MM/dd/yyyy pp')
            }
          </Typography>
          <Typography variant="body2" title={ `${expense.date}` }>
            {
              format(expense.date, 'MM/dd/yyyy HH:mm')
            }
          </Typography>
          <Typography variant="body2" title={ `${expense.date}` }>
            {
              `${new Date(expense.date)}`
            }
          </Typography>

        </Typography>

      </Stack>

      <Stack border={ `1px solid #ccc` } width="100%" p={ 3 } borderRadius="25px" direction="column" justifyContent="start" alignItems="start" spacing={ 2 }>
        <Typography variant="h6">
          Added:
          <Typography variant="body2" title={ `${expense.addedAtEpoch}` }>
            {
              format(expense.addedAtEpoch, 'MM/dd/yyyy HH:mm (pp)')
            }
          </Typography>
        </Typography>

        <Typography variant="h6">
          Last Updated:
          <Typography variant="body2" title={ `${expense.updatedAtEpoch}` }>
            {
              expense.updatedAtEpoch ? format(expense.updatedAtEpoch, 'MM/dd/yyyy HH:mm (pp)') : 'N/A'
            }
          </Typography>
        </Typography>

      </Stack>

      <Stack border={ `1px solid #ccc` } width="100%" p={ 3 } borderRadius="25px" direction="column" justifyContent="start" alignItems="start" spacing={ 2 }>
        <Typography variant="h6">
          Account:
          <div>
            <Link to={ `/accounts/${expense.account.id}` }>
              { expense.account.name }
            </Link>
          </div>
        </Typography>
      </Stack>

      <Stack direction="column" justifyContent="start" alignItems="start" border={ `1px solid #ccc` } width="100%" p={ 3 } borderRadius="25px">
        <ExpenseCommentForm expenseId={ expense.id } />
        <ExpenseComments comments={ expense.comments } />
      </Stack>


      <Outlet />
    </Stack>
  );
}

export default ExpenseDetail;

export async function loader({ request, params, context }: LoaderFunctionArgs) {
  invariant(params.expenseId, "Expected params.expenseId to be defined");
  const accounts = await getAccounts();
  const expense: ExpenseWithComments | null = await getExpenseAndExpenseCommentsById(params.expenseId);
  const payload = {
    expense,
    accounts
  };
  return json(payload, {
    headers: {
      'Cache-Control': 'public, max-age=60',
    },
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

  return json({ success: true });
}