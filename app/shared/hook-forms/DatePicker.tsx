import FormHelperText from "@mui/material/FormHelperText";
import Typography from "@mui/material/Typography";
import { Controller } from "react-hook-form";
import { red } from '@mui/material/colors';
import type { DatePickerProps } from "@mui/x-date-pickers/DatePicker";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

export interface HFSelectFieldProps {
  name: string;
  label: string;
  helperText?: string;
  control: any;
}

export type FieldProps = HFSelectFieldProps & DatePickerProps<any>;

function HFDatePicker({ name, label, control, helperText, ...props }: FieldProps) {

  return (
    <Controller
      name={ name }
      control={ control }
      render={ ({
        field,
        fieldState: { invalid, isTouched, isDirty, error },
        formState,
      }) => (
        <>
          <LocalizationProvider dateAdapter={ AdapterDateFns }>
            <DatePicker
              label={ label }
              { ...props }
              { ...field }
            />
          </LocalizationProvider>
          
          <FormHelperText id={ `${name}-helper-text` } error={ !!error } sx={ {ml: 0} } >
            {
              <Typography variant="caption" color={ red } component="span"> { error ? error.message : helperText } </Typography>
            }
          </FormHelperText>
        </>
      ) }
    />
  );
}

export default HFDatePicker;