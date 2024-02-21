import Stack from "@mui/material/Stack";
import { green } from "@mui/material/colors";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import type { Account } from '~/shared/models/account.model';
import type { PrismaAmountResult } from '~/shared/models/general.model';
import Typography from "@mui/material/Typography";
import noresultquerylogo from '../../../public/images/no-results.png';

interface ChartData {
  _sum: PrismaAmountResult;
  _count: PrismaAmountResult;
  expensesCount: number | null;
  expensesSum: number | null;
  accountId: string;
  account?: Account;
  accountName: string;
}

interface CategoryAccountByExpenseMonthlySumChartProps {
  data: ChartData[];
}

function CategoryAccountByExpenseMonthlySumChart({ data }: CategoryAccountByExpenseMonthlySumChartProps) {
  if (!data) return null;
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

  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={ data }>
        <PolarGrid
          stroke={ '#e6e6e6' }
        />
        <PolarAngleAxis
          dataKey="accountName"
          tick={ CustomAngleAxisTick }
        />
        <PolarRadiusAxis
          angle={ 70 }
          tick={ CustomRadiusAxisTick }
        />
        <Radar
          name="Expenses Sum"
          dataKey="expensesSum"
          stroke={ green[700] }
          fill={ green['A400'] }
          strokeWidth={ 2 }
        />
      </RadarChart>
    </ResponsiveContainer>
  );
}
export default CategoryAccountByExpenseMonthlySumChart;

function CustomAngleAxisTick({ payload, x, y, textAnchor, stroke, radius }: any) {
  const ellipsisName = payload.value.length > 17 ? `${payload.value.substring(0, 17)}...` : payload.value;
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
        text-anchor={ textAnchor }
      >
        <tspan x={ x } y={ y + 2.5 } fill="#092250" fillOpacity={ 0.75 }>
          { ellipsisName }
        </tspan>
      </text>
    </g>
  );
}

function CustomRadiusAxisTick({ payload, x, y, textAnchor, stroke, radius }: any) {
  if (payload.value === 0) {
    return <text></text>;
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
        text-anchor={ textAnchor }
      >
        <tspan x={ x + 4 } y={ y } fill={ '#ccc' } >
          ${ payload.value }
        </tspan>
      </text>
    </g>
  );
}