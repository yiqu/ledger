import type { HeadersFunction } from "@remix-run/node";
import { type MetaFunction } from "@remix-run/node";
import { useRouteLoaderData } from "@remix-run/react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import TitleBarLayout from "~/components/title/TitleBarLayout";
import type { HttpResponsePaged } from "~/shared/models/http.model";
import Box from "@mui/material/Box";
import Pagination from "@mui/material/Pagination";
import { useSearchParams } from "react-router-dom";
import SearchInput from "~/components/data/SearchInput";
import { getParamsAsObject } from "~/shared/utils/url.utils";
import NoResult from "~/components/no-result/NoResult";
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import type { Expense } from "~/shared/models/expense.model";
import ExpenseTable from "~/components/expense/ExpenseTable";
import { TitleNameDisplay } from "~/shared/components/Title";


export const meta: MetaFunction = (data) => {
  return [
    { title: "Expenses - Ledger" },
    { name: "description", content: "Summary of all expenses." },
  ];
};

export const headers: HeadersFunction = ({
  loaderHeaders,
}) => ({
  "Cache-Control": 'public, no-cache, max-age=0',
});

function ExpensesLanding() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { data: expenses, totalCount, totalPages, pageSize, currentResultSetCount } = useRouteLoaderData("routes/expenses") as HttpResponsePaged<Expense[]>;
  const searchParamPage: string | null = searchParams.get('page');
  const currentPage = searchParamPage ? (parseInt(searchParamPage) ? (parseInt(searchParamPage) < 0 ? 0 : parseInt(searchParamPage)) : 0) : 0;

  const handlePageUpdate = (event: React.ChangeEvent<unknown>, value: number) => {
    // Get current params in the URL and keep them
    setSearchParams((params: URLSearchParams) => {
      const currentParams = getParamsAsObject(params);
      return { ...currentParams, page: `${value - 1}` };
    });
  };

  return (
    <Stack direction="column" justifyContent="center" alignItems="center" width="100%" spacing={ 3 }>
      <TitleBarLayout>
        <Stack direction="row" justifyContent="start" alignItems="center" spacing={ 2 }>
          <FormatListBulletedIcon />
          <TitleNameDisplay name={ 'Expenses' } />
        </Stack>

        <Typography variant="h5" fontFamily="Poppins">
          Total: { totalCount }
        </Typography>
      </TitleBarLayout>

      <Stack direction="row" justifyContent="space-between" alignItems="center" mb={ 2 } width="100%">
        <SearchInput />
        <Stack direction="row" justifyContent="flex-end" alignItems="center" width="100%">
          <Box mr={ 2 }>
            <Typography variant="body2">
              { `${(currentPage * pageSize) + 1}-${(currentPage * pageSize) + expenses.length} of ${currentResultSetCount}` }
            </Typography>
          </Box>
          <Pagination count={ totalPages } showFirstButton showLastButton size="small" page={ currentPage + 1 } onChange={ handlePageUpdate } color="standard" shape="rounded" />
        </Stack>

      </Stack>

      {
        expenses.length === 0 ? (<NoResult />) : (
          <ExpenseTable expenses={ expenses } />
        )
      }
    </Stack>
  );
}

export default ExpensesLanding;