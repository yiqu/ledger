import { useNavigate, useRouteLoaderData, useSearchParams } from "@remix-run/react";
import type { Account } from "~/shared/models/account.model";
import Empty from "../no-result/Empty";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import SearchInput from "../data/SearchInput";
import { getParamsAsObject } from "~/shared/utils/url.utils";
import type { HttpResponsePaged } from "~/shared/models/http.model";
import AccountsTable from "./AccountsTable";


function Accounts() {
  const nav = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const { data, totalCount, totalPages, pageSize, currentResultSetCount } = useRouteLoaderData("routes/accounts") as HttpResponsePaged<Account[]>;
  const searchParamPage: string | null = searchParams.get('page');
  const currentPage = searchParamPage ? (parseInt(searchParamPage) ? (parseInt(searchParamPage) < 0 ? 0 : parseInt(searchParamPage)) : 0) : 0;

  const handlePageUpdate = (event: React.ChangeEvent<unknown>, value: number) => {
    // Get current params in the URL and keep them
    setSearchParams((params: URLSearchParams) => {
      const currentParams = getParamsAsObject(params);
      return { ...currentParams, page: `${value - 1}` };
    });
  };

  const handleOnSearchClear = () => {
    nav('/accounts');
  };

  if (totalCount < 1) {
    return (
      <Empty type='expense' />
    );
  }

  return (
    <>
      <Stack direction="row" justifyContent="space-between" alignItems="center" mb={ 2 } width="100%">
        <SearchInput onClearInput={ handleOnSearchClear } />
        <Stack direction="row" justifyContent="flex-end" alignItems="center" width="100%">
          <Box mr={ 2 }>
            <Typography variant="body2">
              { `${(currentPage * pageSize) + 1}-${(currentPage * pageSize) + data.length} of ${currentResultSetCount}` }
            </Typography>
          </Box>
          <Pagination count={ totalPages } showFirstButton showLastButton size="small" page={ currentPage + 1 } onChange={ handlePageUpdate } color="standard" shape="rounded" />
        </Stack>
      </Stack>

      <AccountsTable accounts={ data } />
    </>
  );
}

export default Accounts;