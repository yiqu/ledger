import FormControl from "@mui/material/FormControl";
import type { SelectChangeEvent } from "@mui/material/Select";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import type { DashboardExpensesData, DashboardYearOption } from "~/shared/models/account.model";
import Stack from "@mui/material/Stack";
import { useLoaderData, useNavigate, useSearchParams } from "@remix-run/react";
// @ts-ignore
import urlcat from 'urlcat';
import Typography from "@mui/material/Typography";
import getYear from "date-fns/getYear";
import { memo, useEffect, useState } from "react";
import type { loader } from "~/routes/_public._index";

// const currentYear: number = new Date().getFullYear();
const currentYear: number = 2023;
const defaultYearOption: DashboardYearOption = { id: `${currentYear}` };

function DashboardChartYearSelect() {
  const [searchParams,] = useSearchParams();
  const navigate = useNavigate();
  const chartViewYearSearchParam = searchParams.get('chartViewYear');
  const { yearOptions }: DashboardExpensesData = useLoaderData<typeof loader>();
  const [viewYear, setViewYear] = useState<DashboardYearOption>(defaultYearOption);

  const handleSelectionChange = (e: SelectChangeEvent<string>) => {
    navigate(urlcat('/', '', { chartViewYear: e.target.value }));
  };

  useEffect(() => {
    setViewYear({ id: chartViewYearSearchParam ?? `${currentYear}` });
  }, [chartViewYearSearchParam]);

  return (
    <Stack direction="row" justifyContent="center" alignItems="center" mb={ 2 } width="100%" spacing={ 1 }>
      <Typography>Viewing year:</Typography>
      <FormControl sx={ { minWidth: '6rem' } }>
        <Select
          id="chart-year-select"
          value={ viewYear.id }
          onChange={ handleSelectionChange }
          variant="standard"
          size="small"
          displayEmpty
          renderValue={ (selected) => {
            if (selected.length === 0) {
              return <span style={ { color: '#888' } }>Select year</span>;
            }
            return selected;
          } }
        >
          {
            yearOptions.map((option: DashboardYearOption) => {
              return <MenuItem key={ option.id } value={ option.id }>{ option.id }</MenuItem>;
            })
          }
        </Select>
      </FormControl>
    </Stack>
  );
}
const MemoizedChartYearSelect = memo(DashboardChartYearSelect);
export default MemoizedChartYearSelect;