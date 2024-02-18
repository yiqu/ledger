import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Grid from '@mui/material/Unstable_Grid2';
import TitleBarLayout from '~/components/title/TitleBarLayout';
import ReverseListItem from '~/shared/components/ReverseListItem';
import { TitleNameDisplay } from '~/shared/components/Title';
import ContentPaperWrap from '~/shared/layouts/ContentPaperWrap';
import CategoryIcon from '@mui/icons-material/Category';
import type { LoaderFunctionArgs, MetaFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import invariant from 'tiny-invariant';
import { getAccountsByCategoryId, getCategoryById } from '~/api/categories.server';
import { getIdNameFromIdAndNamePathCombo, getParamsAsObject } from '~/shared/utils/url.utils';
import { convertDateDisplay } from '~/api/utils/date.server';
import { useLoaderData, useSearchParams } from '@remix-run/react';
import SearchInput from "~/components/data/SearchInput";
import TablePagination from "~/shared/components/TablePagination";
import AccountsTable from "~/components/account/AccountsTable";
import { ACCOUNTS_TABLE_COLUMNS } from "~/shared/utils/table";

export const meta: MetaFunction = (data) => {
  const params = data.params;
  const categoryIdName = params.categoryId;
  let titleName = 'Category Detail';
  if (categoryIdName) {
    titleName = getIdNameFromIdAndNamePathCombo(categoryIdName ?? '').name;
  }
  return [
    { title: `${titleName} - Category | Ledger` },
    { name: "description", content: "Category detail" },
  ];
};

function CategoryDetails() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { category, accounts: { currentResultSetCount, data, pageSize, totalCount, totalPages }, filterParam } = useLoaderData<typeof loader>();
  invariant(category, "Expected category to be defined");

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
          <CategoryIcon />
          <TitleNameDisplay name={ category.name ?? 'N/A' } />
        </Stack>
        <Stack direction="row" justifyContent="end" alignItems="center">
          <Typography variant="h6" fontWeight={ 400 } >
            Accounts: { totalCount }
          </Typography>
        </Stack >
      </TitleBarLayout>

      <Box sx={ { flexGrow: 1, width: '100%' } }>
        <Grid container columnSpacing={ 2 }>
          <Grid xs={ 12 } md={ 4 }>
            <ContentPaperWrap>
              <Stack direction="column" justifyContent="start" alignItems="start">
                <List sx={ { width: '100%' } }>
                  <ReverseListItem primaryText={ "Category Name" } secondaryText={ `${category.name}` } />
                  <ReverseListItem primaryText={ "Accounts" } secondaryText={ `${totalCount}` } />
                  <ReverseListItem primaryText={ "Created" } secondaryText={ `${category.dateAddedFromNow.display}` } />
                  <ReverseListItem primaryText={ "Last Edited" } secondaryText={ `${category.updatedAtFromNow.display}` } />
                  <ReverseListItem primaryText={ "Shown On Dashboard" } secondaryText={ category.shown ? 'Yes' : 'No' } />
                  <ReverseListItem primaryText={ "ID" } secondaryText={ `${category.id}` } />
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

            <AccountsTable accounts={ data } isTableFixed={ true } columnIds={ ACCOUNTS_TABLE_COLUMNS.filter((c) => c !== 'category') } />
          </Grid>
        </Grid>
      </Box>
    </Stack>
  );
}

export default CategoryDetails;

export async function loader({ request, params, context }: LoaderFunctionArgs) {
  invariant(params.categoryId, "Expected params.categoryId to be defined");
  const { id } = getIdNameFromIdAndNamePathCombo(params.categoryId);
  invariant(id, "Expected categoryId to be defined");

  const url = new URL(request.url);
  const pageParam = url.searchParams.get('page') as string | null;
  const filterParam: string | null = url.searchParams.get('q');
  const page: number = pageParam ? (parseInt(pageParam) ? (parseInt(pageParam) < 0 ? 0 : parseInt(pageParam)) : 0) : 0;
  const category = await getCategoryById(id);
  const accounts = await getAccountsByCategoryId(id, page, filterParam);

  const accountsWithDataDisplay = accounts.data.map((account) => {
    return {
      ...account,
      dateAddedFromNow: convertDateDisplay(account.dateAdded, 'fromNow'),
      updatedAtFromNow: convertDateDisplay(account.updatedAt, 'fromNow')
    };
  });

  const result = {
    category: {
      ...category,
      dateAddedFromNow: convertDateDisplay(category?.dateAdded, 'longAndNow'),
      updatedAtFromNow: convertDateDisplay(category?.updatedAt, 'longAndNow')
    },
    accounts: {
      ...accounts,
      data: accountsWithDataDisplay
    },
    filterParam
  };
  return json(result);
}