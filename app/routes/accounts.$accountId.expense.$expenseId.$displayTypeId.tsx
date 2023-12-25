import DialogContent from "@mui/material/DialogContent";
import DialogLayout from "~/shared/dialog/DialogLayout";
import { useLoaderData, useMatch, useNavigate, useParams } from "@remix-run/react";
import type { LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import invariant from "tiny-invariant";
import { getExpenseById } from "~/api/expenses.server";
import type { Expense } from "~/shared/models/expense.model";
import { ExpenseRowActionEnum } from "~/shared/constants/actions";
import startCase from "lodash/startCase";
import ExpenseDetail from "~/components/expense/ExpenseDetail";


function AccountDetailExpenseDisplay() {
  const { accountId, displayTypeId } = useParams();
  const match = useMatch('/accounts/:accountId/expense/:expenseId/:displayTypeId');
  const data = useLoaderData();
  const nav = useNavigate();

  const handleCloseDetail = () => {
    if (accountId) {
      nav(`/accounts/${accountId}`);
    } else {
      nav(`/accounts`);
    }
  };

  if (displayTypeId === ExpenseRowActionEnum.DetailsExpense) {
    invariant((data as any)?.expense as Expense, "Expected data.expense to be defined");
    return (
      <DialogLayout open={ Boolean(match) } onClose={ handleCloseDetail } title={ `${startCase(displayTypeId)}` } maxWidth="xs"
        id="account-detail-expense-display-dialog">
        <DialogContent>
          <ExpenseDetail expense={ (data as any).expense } />
        </DialogContent>
      </DialogLayout>
    );
  }


  return (
    <DialogLayout open={ Boolean(match) } onClose={ handleCloseDetail } title={ `${startCase(displayTypeId)}` } maxWidth="xs"
      id="account-detail-expense-display-dialog">
      <DialogContent>
      </DialogContent>
    </DialogLayout>
  );
}

export default AccountDetailExpenseDisplay;

export async function loader({ request, params, context }: LoaderFunctionArgs) {
  invariant(params.accountId, "Expected params.accountId to be defined");
  invariant(params.expenseId, "Expected params.expenseId to be defined");

  const expenseId = params.expenseId as string;
  const displayTypeId = params.displayTypeId as string;

  const expenseData: Expense | null = await getExpenseById(expenseId);

  if (displayTypeId === ExpenseRowActionEnum.DetailsExpense) {
    return json({
      expense: expenseData
    });
  }

  return json({
    tbd: 'tbd'
  });
}