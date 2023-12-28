import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import type { DashboardChartType } from "@prisma/client";
import Stack from "@mui/material/Stack";
import type { DashboardChartData, DashboardShownAccountAndColor } from "~/shared/models/account.model";

export interface DashboardChartProps {
  chartData: DashboardChartData[];
  shownAccountNames: DashboardShownAccountAndColor[];
  chartType: DashboardChartType;
}

function DashboardChart({ chartData, shownAccountNames }: DashboardChartProps) {

  return (
    <Stack direction="column" justifyContent="start" alignItems="start" width="100%">
      <ResponsiveContainer width="100%" height={ 300 } >
        <BarChart data={ chartData }>
          <CartesianGrid strokeDasharray="2 2" horizontal={ true } vertical={ false } />
          <XAxis dataKey="expenseDate" padding={ { right: 40 } } />
          <YAxis tickFormatter={ formatTickBalance } />
          <Tooltip cursor={ { fill: 'transparent' } } animationDuration={ 100 } />
          <Legend verticalAlign="bottom" height={ 40 } wrapperStyle={ { paddingTop: '20px' } } />
          {
            shownAccountNames.map((accountName: DashboardShownAccountAndColor) => {
              return (
                <Bar
                  key={ accountName.name }
                  dataKey={ accountName.name }
                  fill={ accountName.color }
                  stackId={ 'stacked' }
                  barSize={ 24 }
                  animationBegin={ 0 }
                />
              );
            })
          }
        </BarChart>
      </ResponsiveContainer>
    </Stack>

  );
}

export default DashboardChart;

const formatTickBalance = (value: any) => {
  return '$' + (+value).toLocaleString();
};