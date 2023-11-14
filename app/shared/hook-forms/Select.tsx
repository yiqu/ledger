import type { SelectProps} from "@mui/material";
import FormHelperText from "@mui/material/FormHelperText";
import Typography from "@mui/material/Typography";
import { Controller } from "react-hook-form";
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { red } from '@mui/material/colors';


export interface HFSelectFieldProps {
  name: string;
  label: string;
  control: any;
  children: React.ReactNode;
  helperText?: string;
}

export type FieldProps = HFSelectFieldProps & SelectProps;

function HFSelectField({ name, label, control, children, helperText, ...props }: FieldProps) {

  return (
    <Controller
      name={ name }
      control={ control }
      render={ ({
        field,
        fieldState: { invalid, isTouched, isDirty, error },
        formState,
      }) => (
        <FormControl variant={ props.variant } fullWidth>
          <InputLabel id="">{ label } </InputLabel>
          <Select
            labelId=""
            id={ `${name}-select` }
            label={ label }
            { ...props }
            { ...field }
            error={ !!(error) }
          >
            { children }
          </Select>
          <FormHelperText id={ `${name}-helper-text` } error={ !!error } sx={ {ml: 0} } >
            {
              <Typography variant="caption" color={ red } component="span"> { error ? error.message : helperText } </Typography>
            }
          </FormHelperText>
        </FormControl>
      ) }
    />
  );
}

export default HFSelectField;