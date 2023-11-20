import { json, type LoaderFunctionArgs } from "@remix-run/node";
import AppToolbar from "~/shared/toolbar/Toolbar";
import useScreenSize from "~/shared/hooks/useIsMobile";
import LayoutWithGutter from "~/shared/layouts/LayoutWithGutter";
import type { ShouldRevalidateFunction } from "@remix-run/react";
import { Outlet, useFetcher, useLocation, useNavigate, useParams } from "@remix-run/react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
//@ts-ignore
import urlcat from 'urlcat';
import invariant from "tiny-invariant";
import { convertDateDisplay } from "~/api/utils/date.server";
import type { HttpResponsePaged } from "~/shared/models/http.model";
import AccountNavBar from "~/components/navbar/AccountNavBar";
import type { Expense } from "~/shared/models/expense.model";
import { getExpensesPaged } from "~/api/expenses.server";

function Expenses() {
  const { isMobile } = useScreenSize();
  const navigate = useNavigate();
  const { expenseId } = useParams();
  const deleteFetcher = useFetcher();
  const { pathname } = useLocation();

  const handleAddNewAccount = () => {
    const url = urlcat('/add', '', { type: 'account', redirectUrl: '/expenses' });
    navigate(url);
  };

  const handleAddNewExpense = () => {
    const url = urlcat('/add', '', { type: 'expense', redirectUrl: `/expenses`, accountId: `` });
    navigate(url);
  };

  const handleEditExpense = (expenseId?: string) => {
    invariant(expenseId, "Expected expense id to be defined");
    const url = urlcat('', '/data/:expenseId/edit', { expenseId: expenseId, redirectUrl: pathname });
    navigate(url);
  };

  const handleDeleteExpense = (expenseId?: string) => {
    invariant(expenseId, "Expected expense id to be defined");
    const proceed = confirm(`Are you sure you want to delete this expense?`);
    if (!proceed) return;

    const url = urlcat('', '/data/:expenseId', { expenseId: expenseId, redirectUrl: '/data' });
    deleteFetcher.submit({ id: expenseId }, { method: 'DELETE', action: url });
  };

  const handleActionClick = (actionId: string) => {
    switch (actionId) {
      case 'addAccount': {
        handleAddNewAccount();
        break;
      }
      case 'newExpense': {
        handleAddNewExpense();
        break;
      }
      case 'editExpense': {
        handleEditExpense(expenseId);
        break;
      }
      case 'deleteExpense': {
        handleDeleteExpense(expenseId);
        break;
      }
      case 'settings': {
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

        <AccountNavBar onClickAction={ handleActionClick } />

      </AppToolbar>

      <Box mt={ 2 } mx={ isMobile ? 2 : 0 }>
        <LayoutWithGutter size={ 'wide' }>

          <Outlet />

        </LayoutWithGutter>
      </Box>
    </Stack>
  );
}

export default Expenses;

export async function loader({ request, params, context }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const pageParam = url.searchParams.get('page') as string | null;
  const filterParam: string | null = url.searchParams.get('q');
  const page: number = pageParam ? (parseInt(pageParam) ? (parseInt(pageParam) < 0 ? 0 : parseInt(pageParam)) : 0) : 0;

  const response: HttpResponsePaged<Expense[]> = await getExpensesPaged(page, filterParam);
  const expenses = response.data.map((rec: Expense) => {
    return {
      ...rec,
      dateFromNow: convertDateDisplay(rec.date, 'longAndNow'),
      dateAddedFromNow: convertDateDisplay(rec.dateAdded, 'fromNow'),
      updatedAtFromNow: convertDateDisplay(rec.updatedAt, 'fromNow'),
    };
  });
  return json({
    ...response,
    expenses: expenses,
  });
}

export const shouldRevalidate: ShouldRevalidateFunction = (payload) => {
  return payload.defaultShouldRevalidate;
};