import { Stack, Typography, Box, List } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import SearchInput from '~/components/data/SearchInput';
import TitleBarLayout from '~/components/title/TitleBarLayout';
import ReverseListItem from '~/shared/components/ReverseListItem';
import { TitleNameDisplay } from '~/shared/components/Title';
import ContentPaperWrap from '~/shared/layouts/ContentPaperWrap';
import CategoryIcon from '@mui/icons-material/Category';
import { LoaderFunctionArgs, MetaFunction, json } from '@remix-run/node';
import invariant from 'tiny-invariant';
import { getCategoryById } from '~/api/categories.server';
import { getIdNameFromIdAndNamePathCombo } from '~/shared/utils/url.utils';
import { convertDateDisplay } from '~/api/utils/date.server';
import { useLoaderData } from '@remix-run/react';

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
  const category = useLoaderData<typeof loader>();

  return (
    <Stack direction="column" justifyContent="start" alignItems="start" width="100%" spacing={ 3 }>

      <TitleBarLayout>
        <Stack direction="row" justifyContent="start" alignItems="center" spacing={ 2 }>
          <CategoryIcon />
          <TitleNameDisplay name={ category.category.name ?? 'N/A' } />
        </Stack>
        <Stack direction="row" justifyContent="end" alignItems="center">
          <Typography variant="h6" fontWeight={ 400 } >
            Accounts: { category.category.accounts?.length }
          </Typography>
        </Stack >
      </TitleBarLayout>

      <Box sx={ { flexGrow: 1, width: '100%' } }>
        <Grid container columnSpacing={ 2 }>
          <Grid xs={ 12 } md={ 4 }>
            <ContentPaperWrap>
              <Stack direction="column" justifyContent="start" alignItems="start">
                <List sx={ { width: '100%' } }>
                  <ReverseListItem primaryText={ "Category Name" } secondaryText={ `${category.category.name}` } />
                  <ReverseListItem primaryText={ "Created" } secondaryText={ `${category.category.dateAddedFromNow.display}` } />
                  <ReverseListItem primaryText={ "Last Edited" } secondaryText={ `${category.category.updatedAtFromNow.display}` } />
                  <ReverseListItem primaryText={ "Shown On Dashboard" } secondaryText={ category.category.shown ? 'Yes' : 'No' } />
                  <ReverseListItem primaryText={ "ID" } secondaryText={ `${category.category.id}` } />
                </List>
              </Stack>
            </ContentPaperWrap>
          </Grid>

          <Grid xs={ 12 } md={ 8 }>

            <Stack direction="row" justifyContent="space-between" alignItems="center" mb={ 2 } width="100%">
            </Stack>

          </Grid>
        </Grid>
      </Box>


    </Stack>
  );
}

export default CategoryDetails;

export async function loader({ request, params, context }: LoaderFunctionArgs) {
  invariant(params.categoryId, "Expected params.categoryId to be defined");
  const { id, name } = getIdNameFromIdAndNamePathCombo(params.categoryId);
  invariant(id, "Expected categoryId-id to be defined");
  const url = new URL(request.url);
  const pageParam = url.searchParams.get('page') as string | null;
  const filterParam: string | null = url.searchParams.get('q');
  const page: number = pageParam ? (parseInt(pageParam) ? (parseInt(pageParam) < 0 ? 0 : parseInt(pageParam)) : 0) : 0;
  const category = await getCategoryById(id);

  const result = {
    category: {
      ...category,
      dateAddedFromNow: convertDateDisplay(category?.dateAdded, 'longAndNow'),
      updatedAtFromNow: convertDateDisplay(category?.updatedAt, 'longAndNow')
    },
    filterParam
  };
  return json(result);
}