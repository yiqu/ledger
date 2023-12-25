import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import type { DashboardYearOption } from "~/shared/models/account.model";
import useSelections from "~/shared/headless/useSelections";
import { useEffect } from "react";
import Stack from "@mui/material/Stack";

function DashboardChartYearSelect({ initValue, options, onSelectChange }:
  { initValue?: DashboardYearOption, options: DashboardYearOption[], onSelectChange: (value: string) => void }) {

  const { handleSelectionChange, selectedOption } = useSelections(options, initValue);

  useEffect(() => {
    if (selectedOption?.id) {
      onSelectChange(selectedOption.id);
    }
  }, [onSelectChange, selectedOption?.id]);

  return (
    <Stack direction="row" justifyContent="end" alignItems="center" mb={ 2 } width="100%">
      <FormControl sx={ { minWidth: '10rem' } }>
        <Select
          id="chart-year-select"
          value={ selectedOption ? selectedOption.id : '' }
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