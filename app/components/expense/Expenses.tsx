import type { Expense } from "~/shared/models/expense.model";
import Empty from "../no-result/Empty";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import SearchInput from "../data/SearchInput";
import ExpenseTable from "./ExpenseTable";
import { useRouteLoaderData, useSearchParams } from "@remix-run/react";
import type { HttpResponsePaged } from "~/shared/models/http.model";
import { getParamsAsObject } from "~/shared/utils/url.utils";
import { ITEMS_PER_PAGE } from "~/shared/utils/constants";
import Divider from "@mui/material/Divider";
import useScreenSize from "~/shared/hooks/useIsMobile";

function Expenses() {
  const { isMobile } = useScreenSize();
  const [searchParams, setSearchParams] = useSearchParams();
  const { data, totalCount, totalPages, pageSize, currentResultSetCount, filterParam } = useRouteLoaderData("routes/expenses") as HttpResponsePaged<Expense[]>;
  const searchParamPage: string | null = searchParams.get('page');
  const currentPage = searchParamPage ? (parseInt(searchParamPage) ? (parseInt(searchParamPage) < 0 ? 0 : parseInt(searchParamPage)) : 0) : 0;

  const handlePageUpdate = (event: React.ChangeEvent<unknown>, value: number) => {
    // Get current params in the URL and keep them
    setSearchParams((params: URLSearchParams) => {
      const currentParams = getParamsAsObject(params);
      return { ...currentParams, page: `${value - 1}` };
    });
  };

  if (totalCount < 1) {
    return (
      <Empty type='expense' />
    );
  }

  return (
    <>
      <Stack direction="row" justifyContent="space-between" alignItems="center" mb={ 2 } width="100%">
        <SearchInput queryValue={ filterParam || '' } />
        <Stack direction="row" justifyContent="flex-end" alignItems="center" spacing={ 1 }>
          <Box>
            <Typography variant="body1">
              { `Items/page: ${ITEMS_PER_PAGE}` }
            </Typography>
          </Box>
          <Divider flexItem orientation="vertical" />
          <Box>
            <Typography variant="body1">
              { `${(currentPage * pageSize) + 1}-${(currentPage * pageSize) + data.length} of ${currentResultSetCount}` }
            </Typography>
          </Box>
          <Divider flexItem orientation="vertical" />
          <Pagination count={ totalPages } showFirstButton showLastButton size="small" page={ currentPage + 1 } onChange={ handlePageUpdate } color="standard" shape="rounded" />
        </Stack>
      </Stack>

      <ExpenseTable expenses={ data } isTableFixed={ isMobile ? false : true } />
    </>
  );
}

export default Expenses;