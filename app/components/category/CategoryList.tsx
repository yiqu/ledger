import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Pagination from "@mui/material/Pagination";
import type { Category } from "~/shared/models/category.model";
import { ITEMS_PER_PAGE } from "~/shared/utils/constants";
import SearchInput from "../data/SearchInput";
import { useRouteLoaderData, useSearchParams } from "@remix-run/react";
import type { HttpResponsePaged } from "~/shared/models/http.model";
import { getParamsAsObject } from "~/shared/utils/url.utils";
import Empty from "../no-result/Empty";
import CategoryDisplay from "./CategoryDisplay";
import Grid from '@mui/material/Unstable_Grid2';


function CategoryList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { data, totalCount, totalPages, pageSize, currentResultSetCount, filterParam } = useRouteLoaderData("routes/categories") as HttpResponsePaged<Category[]>;
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
      <Empty type='categorie' />
    );
  }

  return (
    <>
      <Stack direction="row" justifyContent="space-between" alignItems="center" mb={ 2 } width="100%">
        <SearchInput queryValue={ filterParam || '' } />
        <Stack direction="row" justifyContent="flex-end" alignItems="center" spacing={ 1 }>
          <Box>
            <Typography variant="body2">
              { `Items/Page: ${ITEMS_PER_PAGE}` }
            </Typography>
          </Box>
          <Divider flexItem orientation="vertical" />
          <Box>
            <Typography variant="body2">
              { `${(currentPage * pageSize) + 1}-${(currentPage * pageSize) + data.length} of ${currentResultSetCount}` }
            </Typography>
          </Box>
          <Divider flexItem orientation="vertical" />
          <Pagination count={ totalPages } showFirstButton showLastButton size="small" page={ currentPage + 1 } onChange={ handlePageUpdate } color="standard" shape="rounded" />
        </Stack>
      </Stack>

      <Box sx={ { flexGrow: 1 } } width="100%">
        <Grid container spacing={ 1 }>
          {
            data.map((category: Category) => {
              return (
                <Grid key={ category.id } xs={ 12 } md={ 12 } lg={ 6 } xl={ 6 }>
                  <CategoryDisplay category={ category } />
                </Grid>
              );
            })
          }
        </Grid>
      </Box>
    </>
  );
}

export default CategoryList;