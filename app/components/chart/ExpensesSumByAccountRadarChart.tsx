import Stack from "@mui/material/Stack";
import { green } from "@mui/material/colors";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import type { Account } from '~/shared/models/account.model';
import type { PrismaAmountResult } from '~/shared/models/general.model';
import Typography from "@mui/material/Typography";
import noresultquerylogo from '../../../public/images/no-results.png';
import { CHART_POLAR_GRID_STROKE_COLOR, CHART_POLAR_GRID_TOP_HIGHLIGHT_COUNT, HIGHLIGHT_TOP_X_POLAR_CHART } from "~/shared/utils/constants";

interface ChartData {
  _sum: PrismaAmountResult;
  _count: PrismaAmountResult;
  expensesCount: number | null;
  expensesSum: number | null;
  accountId: string;
  account?: Account;
  accountName: string;
}

interface ExpensesSumByAccountRadarChartProps {
  data: ChartData[];
}

function ExpensesSumByAccountRadarChart({ data }: ExpensesSumByAccountRadarChartProps) {
  if (!data) {
    return null;
  }

  if (data.length < 1) {
    return (
      <Stack direction="row" justifyContent="center" alignItems="center" width="100%" height="100%" spacing={ 2 }>
        <Typography component="img" src={ noresultquerylogo } sx={ { height: '2rem' } } alt="logo"></Typography>
        <Typography>
          No data to display for selected date range.
        </Typography>
      </Stack>
    );
  }

  const chartData: ChartData[] = [...data];

  if (data.length < 3) {
    for (let i = 0; i < 3 - data.length; i++) {
      chartData.push({
        accountName: '',
        expensesSum: 0,
        _count: { amount: null },
        _sum: { amount: null },
        expensesCount: 0,
        accountId: `${i}`,
        account: undefined
      });
    }
  }

  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart cx="50%" cy="55%" outerRadius="75%" data={ chartData }>
        <PolarGrid
          stroke={ CHART_POLAR_GRID_STROKE_COLOR }
        />
        <PolarAngleAxis
          dataKey="accountId"
          tick={
            <CustomAngleAxisTick
              chartData={ chartData }
              highlightTopCount={ CHART_POLAR_GRID_TOP_HIGHLIGHT_COUNT }
              highlightTopX={ HIGHLIGHT_TOP_X_POLAR_CHART }
            />
          }
        />
        <Radar
          name="Expenses Sum"
          dataKey="expensesSum"
          stroke={ green[700] }
          fill={ green['A200'] }
          strokeWidth={ 2 }
          animationDuration={ 100 }
        />
      </RadarChart>
    </ResponsiveContainer>
  );
}
export default ExpensesSumByAccountRadarChart;

function CustomAngleAxisTick({ payload, x, y, textAnchor, stroke, radius, chartData, highlightTopX, highlightTopCount }: any) {
  if (!isNaN(+(payload.value))) {
    return <text></text>;
  }

  const accountName: string | undefined = chartData.find((d: ChartData) => d.accountId === payload.value)?.accountName;
  let ellipsisName = accountName ? accountName : payload.value;
  const amountForId: number | null = chartData.find((d: ChartData) => d.accountId === payload.value)?.expensesSum;
  const isAccountHighestSum: boolean = chartData.find((d: ChartData) => d.accountId === payload.value)?.expensesSum === Math.max(...chartData.map((d: ChartData) => d.expensesSum));
  const top3HighestSumAccountIds: string[] = (chartData as ChartData[]).toSorted((a: ChartData, b: ChartData) => (b?.expensesSum ?? 0) - (a?.expensesSum ?? 0)).slice(0, highlightTopCount).map((d: ChartData) => d.accountId);
  if (isAccountHighestSum) {
    const highestSumAccount: ChartData = chartData.find((d: ChartData) => d.accountId === payload.value);
    ellipsisName = `${ellipsisName}`;
    ellipsisName = ellipsisName.length > 16 ? `${ellipsisName.substring(0, 16)}...` : ellipsisName;
    return (
      <g
        className="recharts-layer recharts-polar-angle-axis-tick"
      >
        <text
          radius={ radius }
          stroke={ stroke }
          x={ x }
          y={ y }
          className="recharts-text recharts-polar-angle-axis-tick-value"
          textAnchor={ textAnchor }
        >
          <tspan x={ x } y={ y + 2.5 } fill="#111" fillOpacity={ 1 } fontSize="12px" fontWeight={ 500 }>
            { ellipsisName } (${ highestSumAccount.expensesSum })
          </tspan>
        </text>
      </g>
    );
  }
  if (highlightTopX && top3HighestSumAccountIds.includes(payload.value)) {
    const accountForId: ChartData = chartData.find((d: ChartData) => d.accountId === payload.value);
    return (
      <g
        className="recharts-layer recharts-polar-angle-axis-tick"
      >
        <text
          radius={ radius }
          stroke={ stroke }
          x={ x }
          y={ y }
          className="recharts-text recharts-polar-angle-axis-tick-value"
          textAnchor={ textAnchor }
        >
          <tspan x={ x } y={ y + 2.5 } fill="#092250" fillOpacity={ 0.75 } fontSize="12px" fontWeight={ 500 }>
            { ellipsisName } (${ accountForId.expensesSum })
          </tspan>
        </text>
      </g>
    );
  }

  return (
    <g
      className="recharts-layer recharts-polar-angle-axis-tick"
    >
      <text
        radius={ radius }
        stroke={ stroke }
        x={ x }
        y={ y }
        className="recharts-text recharts-polar-angle-axis-tick-value"
        textAnchor={ textAnchor }
      >
        <tspan x={ x } y={ y + 2.5 } fill="#092250" fillOpacity={ 0.75 } fontSize="12px">
          { ellipsisName } (${ amountForId })
        </tspan>
      </text>
    </g>
  );
}