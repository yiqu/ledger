import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from '@mui/material/Unstable_Grid2';
import TitleBarLayout from '~/components/title/TitleBarLayout';
import { TitleNameDisplay } from '~/shared/components/Title';
import CategoryIcon from '@mui/icons-material/Category';
import type { LoaderFunctionArgs, MetaFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import invariant from 'tiny-invariant';
import { getAccountsByCategoryId, getAllAccountsByCategoryId, getCategoryById } from '~/api/categories.server';
import { getIdNameFromIdAndNamePathCombo, getParamsAsObject } from '~/shared/utils/url.utils';
import { convertDateDisplay } from '~/api/utils/date.server';
import { useFetcher, useLoaderData, useSearchParams } from '@remix-run/react';
import SearchInput from "~/components/data/SearchInput";
import TablePagination from "~/shared/components/TablePagination";
import AccountsTable from "~/components/account/AccountsTable";
import { ACCOUNTS_TABLE_COLUMNS } from "~/shared/utils/table";
import useScreenSize from "~/shared/hooks/useIsMobile";
import type { Account } from "~/shared/models/account.model";
import type { DeleteFetcher } from "~/shared/models/http.model";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { getExpensesSumByAccountIdsInDateRange, getTotalExpensesSumByAccountIds } from "~/api/expenses.server";
import startOfMonth from "date-fns/startOfMonth";
import endOfMonth from "date-fns/endOfMonth";
import CategorySideBar from "~/components/category/CategorySideBar";

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
  const { isMobile } = useScreenSize();
  const [searchParams, setSearchParams] = useSearchParams();
  const removeAccountFromCategoryFetcher = useFetcher<DeleteFetcher>();
  const { category, accounts: { currentResultSetCount, data, pageSize, totalCount, totalPages },
    filterParam, expensesAllTimeSum, currentMonthExpensesSum } = useLoaderData<typeof loader>();
  const searchParamPage: string | null = searchParams.get('page');
  const currentPage = searchParamPage ? (parseInt(searchParamPage) ? (parseInt(searchParamPage) < 0 ? 0 : parseInt(searchParamPage)) : 0) : 0;

  useEffect(() => {
    if (removeAccountFromCategoryFetcher.state === 'idle' && removeAccountFromCategoryFetcher.data?.showToast) {
      toast.success(removeAccountFromCategoryFetcher.data.message);
    }
    return (() => {
      toast.remove();
    });
  }, [removeAccountFromCategoryFetcher.data?.message, removeAccountFromCategoryFetcher.data?.showToast, removeAccountFromCategoryFetcher.state]);

  const handlePageUpdate = (event: React.ChangeEvent<unknown>, value: number) => {
    setSearchParams((params: URLSearchParams) => {
      const currentParams = getParamsAsObject(params);
      return { ...currentParams, page: `${value - 1}` };
    });
  };

  const handleOnAction = (actionId: 'delete' | 'edit', payload: Account) => {
    if (category.id && category.name) {
      const proceed = confirm(`Are you sure you want to remove ${payload.name} from ${category.name}?`);
      if (!proceed) return;

      removeAccountFromCategoryFetcher.submit(
        { categoryId: category.id, accountId: payload.id, categoryName: category.name },
        { method: 'DELETE', action: `/categories/removeAccount`, preventScrollReset: true }
      );
    }
  };

  if (!category) {
    return (
      <Stack direction="column" justifyContent="center" alignItems="center" spacing={ 3 }>
        <Typography variant="h6" fontWeight={ 400 } >
          No Category Found
        </Typography>
      </Stack>
    );
  }

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
            <CategorySideBar
              category={ category }
              totalAccounts={ totalCount }
              expensesAllTimeSum={ expensesAllTimeSum }
              currentMonthExpensesSum={ currentMonthExpensesSum }
            />
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

            <AccountsTable
              accounts={ data }
              isTableFixed={ isMobile ? false : true }
              columnIds={
                ACCOUNTS_TABLE_COLUMNS.filter((c) => (c !== 'category' && c !== 'dateAdded' && c !== 'updatedAt'))
              }
              onAction={ handleOnAction }
            />
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
  const allAccountsByCategory = await getAllAccountsByCategoryId(id);
  const totalExpensesAllTimeSum = await getTotalExpensesSumByAccountIds(allAccountsByCategory.map((a) => a.id));
  const expensesAllTimeSum: number | null = totalExpensesAllTimeSum._sum.amount;

  const [monthStart, monthEnd] = [startOfMonth(new Date()), endOfMonth(new Date())];
  const currentMonthExpensesSum = await getExpensesSumByAccountIdsInDateRange(allAccountsByCategory.map((a) => a.id), monthStart.getTime(), monthEnd.getTime());

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
    filterParam,
    expensesAllTimeSum,
    currentMonthExpensesSum: currentMonthExpensesSum._sum.amount
  };
  return json(result);
}