import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { ResponsiveContainer, Treemap } from "recharts";
import noresultquerylogo from '../../../public/images/no-results.png';

interface ExpensesCountTreeChartProps {
  data: Payload[];
}

function ExpensesCountTreeChart({ data }: ExpensesCountTreeChartProps) {
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

  return (
    <ResponsiveContainer width="100%" height="100%">
      <Treemap
        data={ data }
        dataKey="expensesCount"
        stroke="#fff"
        animationDuration={ 0 }
        content={ <CustomizedContent colors={ ALL_COLORS } /> }
      />
    </ResponsiveContainer>
  );
}

export default ExpensesCountTreeChart;

interface Payload {
  accountId: string;
  _count: {
    amount: number
  };
}

const SHADES_OF_GREEN = ["#336831", "#3b7939", "#448b41", "#4c9c49", "#55ad52", "#66b663", "#77be74"];
const SHADES_OF_BLUE = ['#0073e6', '#0080ff', '#1a8cff'];
const COLORS = ["#6b3c9e", "#3b106f", "#3e9e3c", "#006f0b", "#9e3c6f", "#6c0344"];
const ALL_COLORS = [...SHADES_OF_GREEN, ...SHADES_OF_BLUE, ...COLORS];

function CustomizedContent({ root, depth, x, y, width, height, index, colors, account, accountId, expensesCount }: any) {
  if (!root.children) {
    return null;
  }
  return (
    <g>
      <rect
        x={ x }
        y={ y }
        width={ width }
        height={ height }
        style={ {
          fill: depth < 2 ? colors[Math.floor((index / root.children.length) * 6)] : '#ffffff00',
          stroke: '#fff',
          strokeWidth: 1.5,
          strokeOpacity: 1
        } }
      />
      { depth === 1 ? (
        <text x={ x + width / 2 } y={ y + height / 2 + 7 } textAnchor="middle" fill="#fff" fontSize={ 12 } strokeWidth={ 0.5 }>
          { account.name }
        </text>
      ) : null }
      { depth === 1 ? (
        <text x={ x + width / 2 - 30 } y={ y + height / 2 + 24 } fill="#fff" fontSize={ 12 } fillOpacity={ 0.9 } strokeWidth={ 0.4 }>
          ({ expensesCount } { expensesCount === 1 ? 'expense' : 'expenses' })
        </text>
      ) : null }
    </g>
  );
}