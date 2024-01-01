import Stack from "@mui/material/Stack";
import type { HeadersFunction, TypedResponse } from "@remix-run/node";
import { json, type LoaderFunctionArgs, type MetaFunction } from "@remix-run/node";
import useScreenSize from "~/shared/hooks/useIsMobile";
import LayoutWithGutter from "~/shared/layouts/LayoutWithGutter";
import { isRouteErrorResponse, useLoaderData, useNavigate, useRouteError } from "@remix-run/react";
import ActionLoaderErrorDisplay from "~/components/error/ActionLoaderError";
import OtherErrorDisplay from "~/components/error/OtherError";
import Dashboard from "~/components/dashboard/Dashboard";
import styles from "~/styles/dashboard.css";
import type { ShouldRevalidateFunction } from "@remix-run/react";
import DashboardIcon from '@mui/icons-material/Dashboard';
import TitleBarLayout from "~/components/title/TitleBarLayout";
import DashboardChart from "~/components/chart/DashboardChart";
import { getDataSettingsByUserId } from "~/api/settings.server";
import { USER_ID } from "~/shared/utils/constants";
import type { SettingsAllData } from "~/shared/models/settings";
import type { DashboardChartType } from "@prisma/client";
// @ts-ignore
import urlcat from 'urlcat';
import type { AccountWithExpenses, AccountWithPreCalculateExpenses, DashboardChartData, DashboardExpensesData, DashboardShownAccountAndColor, DashboardYearOption } from "~/shared/models/account.model";
import AccountNavBar from "~/components/navbar/AccountNavBar";
import { TitleNameDisplay } from "~/shared/components/Title";
import { getDashboardChartData, getShownAccountAndExpenses } from "~/api/accounts.server";
import { calculateGainRateForAccount } from "~/api/utils/calculations.server";
import { getLineColorByAccountName } from "~/api/utils/utils.server";
import Box from "@mui/material/Box";
import StickyToolbar from "~/shared/toolbar/StickyToolbar";
import Paper from "@mui/material/Paper";
import { getFirstAndLastExpenseDatesByShownAccounts } from "~/api/expenses.server";
import getYear from "date-fns/getYear";
import DashboardChartYearSelect from "~/components/chart/DashboardChartYearSelect";

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export const meta: MetaFunction = (data) => {
  return [
    { title: "Dashboard - Ledger" },
    { name: "description", content: "Summary of all expenses." },
  ];
};

export const headers: HeadersFunction = ({
  loaderHeaders,
}) => ({
  "Cache-Control": 'public, no-cache, max-age=0',
});


export default function Index() {
  const { isMobile } = useScreenSize();
  const navigate = useNavigate();
  const { accountsData, chartData, isChartShown, shownAccountAndColorData, chartType, total }: DashboardExpensesData =
    useLoaderData<typeof loader>();

  const handleAddNewExpense = () => {
    const url = urlcat('/add', '', { type: 'expense', redirectUrl: '/', actionUrl: '/data' });
    navigate(url);
  };

  const handleActionClick = (actionId: string) => {
    switch (actionId) {
      case 'newExpense': {
        handleAddNewExpense();
        break;
      }
    }
  };

  return (
    <Stack direction="column" width="100%">
      <StickyToolbar>
        <AccountNavBar onClickAction={ handleActionClick } />
      </StickyToolbar>

      <Box mt={ 2 } mx={ isMobile ? 2 : 0 }>
        <LayoutWithGutter size={ 'wide' }>

          <Stack direction="column" justifyContent="center" alignItems="center" width="100%" spacing={ 3 }>
            <TitleBarLayout>
              <Stack direction="row" justifyContent="space-between" alignItems="center" width="100%">
                <Stack direction="row" justifyContent="start" alignItems="center" spacing={ 2 }>
                  <DashboardIcon />
                  <TitleNameDisplay name={ 'Dashboard' } />
                </Stack>
                <Stack direction="row" justifyContent="start" alignItems="center" className="positive">
                  <TitleNameDisplay name={ `$${total.toLocaleString()}` } />
                </Stack>
              </Stack>
            </TitleBarLayout>

            { isChartShown &&
              (
                <Paper sx={ { width: '100%', py: 2, px: 1, borderRadius: '20px', bgcolor: "#FDFAF6" } } elevation={ 0 }>
                  {/* <DashboardChartYearSelect /> */ }
                  <DashboardChart chartData={ chartData } shownAccountNames={ shownAccountAndColorData } chartType={ chartType } />
                </Paper>
              )
            }

            <Dashboard accounts={ accountsData } />

          </Stack>

        </LayoutWithGutter>
      </Box>
    </Stack>
  );
}

export async function loader({ request, params, context }: LoaderFunctionArgs): Promise<TypedResponse<DashboardExpensesData>> {
  const url = new URL(request.url);
  const selectedViewYear: string = url.searchParams.get('chartViewYear') ?? new Date().getFullYear().toString();
  console.log('selectedViewYear', selectedViewYear);
  console.log('new date', new Date().getFullYear().toString())
  console.log(new Date())

  const accountsData = await getShownAccountAndExpenses() as AccountWithPreCalculateExpenses[];
  const chartData: DashboardChartData[] = await getDashboardChartData(selectedViewYear);
  const userSettings: SettingsAllData | null = await getDataSettingsByUserId(USER_ID);
  const firstAndLastExpenseDates = await getFirstAndLastExpenseDatesByShownAccounts();

  let yearOptions: DashboardYearOption[] = [];
  if (firstAndLastExpenseDates.firstDate && firstAndLastExpenseDates.lastDate) {
    const firstYear: number = new Date(firstAndLastExpenseDates.firstDate).getFullYear();
    const endYear: number = new Date(firstAndLastExpenseDates.lastDate).getFullYear();
    const range: number = endYear - firstYear;
    for (let i = 0; i <= range; i++) {
      yearOptions.push({
        id: `${firstYear + i}`,
      });
    }
  }

  const result: AccountWithExpenses[] = [];
  const shouldShowChart: boolean = !!userSettings?.showDashboardChart;
  const chartType: DashboardChartType = userSettings?.dashboardChartType ?? 'bar';
  let total: number = 0;

  // calculate gains for each expense
  accountsData.forEach((account: AccountWithPreCalculateExpenses, index: number) => {
    result.push(calculateGainRateForAccount(account));
  });

  const shownAccountAndColorData: DashboardShownAccountAndColor[] = result.map((account: AccountWithExpenses, index) => {
    return {
      name: account.name,
      color: getLineColorByAccountName(account.name, index)
    };
  });
  total = result.reduce((acc, account) => {
    return acc + account.totalAmount;
  }, 0);

  return json({
    accountsData: result,
    isChartShown: shouldShowChart,
    chartData: chartData,
    shownAccountAndColorData: shownAccountAndColorData,
    chartType: chartType,
    total: total,
    yearOptions: yearOptions
  });
}

export const shouldRevalidate: ShouldRevalidateFunction = (payload) => {
  return payload.defaultShouldRevalidate;
};

export function ErrorBoundary() {
  const error = useRouteError();
  if (isRouteErrorResponse(error)) {
    return (
      <ActionLoaderErrorDisplay error={ error } />
    );
  }

  return (
    <OtherErrorDisplay error={ error } />
  );
}
