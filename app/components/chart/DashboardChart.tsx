import { Bar, BarChart, CartesianGrid, Label, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import format from "date-fns/format";
import type { DashboardChartType } from "@prisma/client";
import Stack from "@mui/material/Stack";
import type { DashboardChartData, DashboardShownAccountAndColor } from "~/shared/models/account.model";

export interface DashboardChartProps {
  chartData: DashboardChartData[];
  shownAccountNames: DashboardShownAccountAndColor[];
  chartType: DashboardChartType;
}

function DashboardChart({ chartData, shownAccountNames, chartType }: DashboardChartProps) {
  const formatTickDate = (value: any) => {
    return format(new Date(value), 'MM/yyyy');
  };

  const formatTickBalance = (value: any) => {
    return '$'+(+value).toLocaleString();
  };

  return (
    <Stack direction="column" justifyContent="start" alignItems="start" width="100%">
      <ResponsiveContainer width="100%" height={ 400 } >
        {
          chartType === 'bar' ? (
            <BarChart
              data={ chartData }
            >
              <CartesianGrid strokeDasharray="2 2" horizontal={ true } vertical={ false } />
              <XAxis dataKey="expenseDate" padding={ { right: 40 } } tickFormatter={ formatTickDate } />
              <YAxis tickFormatter={ formatTickBalance } />
              <Tooltip />
              <Legend verticalAlign="bottom" height={ 40 } wrapperStyle={ { paddingTop: '20px' } } />
              {
                shownAccountNames.map((accountName: DashboardShownAccountAndColor) => {
                  return <Bar key={ accountName.name } dataKey={ accountName.name } fill={ accountName.color } stackId={ 'stacked' } />;
                })
              }
            </BarChart>

          ) : (
            <LineChart
              data={ chartData }
            >
              <CartesianGrid strokeDasharray="2 2" horizontal={ true } vertical={ false } />
              <XAxis dataKey="expenseDate" padding={ { right: 40 } } tickFormatter={ formatTickDate }>
                {/* <Label value="Entry Date" offset={ -10 } position="insideBottom" style={ {fontWeight: 500} } /> */}
              </XAxis>
              <YAxis tickFormatter={ formatTickBalance }>
                {/* <Label value="Balance" angle={ -90 } position="insideLeft" style={ { fontWeight: 500 } } /> */}
              </YAxis>
              <Tooltip />
              <Legend verticalAlign="bottom" height={ 40 } wrapperStyle={ { paddingTop: '20px' } } />
              {
                  shownAccountNames.map((accountName: DashboardShownAccountAndColor) => {
                    return <Line key={ accountName.name } connectNulls type="monotone" dataKey={ accountName.name } stroke={ accountName.color } fill={ accountName.color } />;
                })
              }
            </LineChart>
          )

        }
        
      </ResponsiveContainer>
    </Stack>
    
  );
}

export default DashboardChart;