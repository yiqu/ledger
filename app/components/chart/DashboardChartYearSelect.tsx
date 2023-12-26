import FormControl from "@mui/material/FormControl";
import type { SelectChangeEvent } from "@mui/material/Select";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import type { DashboardYearOption } from "~/shared/models/account.model";
import Stack from "@mui/material/Stack";
import { useNavigate, useSearchParams } from "@remix-run/react";
// @ts-ignore
import urlcat from 'urlcat';
import Typography from "@mui/material/Typography";
import getYear from "date-fns/getYear";
interface DashboardChartYearSelectProps {
  options: DashboardYearOption[];
}

function DashboardChartYearSelect({ options }: DashboardChartYearSelectProps) {
  const [searchParams,] = useSearchParams();
  const navigate = useNavigate();
  const currentYear = getYear(new Date());
  const chartViewYear = searchParams.get('chartViewYear');
  const initOption = chartViewYear ? { id: chartViewYear } : { id: `${currentYear}` };

  const handleSelectionChange = (e: SelectChangeEvent<string>) => {
    navigate(urlcat('/', '', { chartViewYear: e.target.value }));
  };

  return (
    <Stack direction="row" justifyContent="center" alignItems="center" mb={ 2 } width="100%" spacing={ 1 }>
      <Typography>Viewing year:</Typography>
      <FormControl sx={ { minWidth: '6rem' } }>
        <Select
          id="chart-year-select"
          value={ initOption ? initOption.id : '' }
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
            options.map((option: DashboardYearOption) => {
              return <MenuItem key={ option.id } value={ option.id }>{ option.id }</MenuItem>;
            })
          }
        </Select>
      </FormControl>
    </Stack>
  );
}

export default DashboardChartYearSelect;