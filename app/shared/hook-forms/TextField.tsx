import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import type { TextFieldProps } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { Controller } from "react-hook-form";
import { red } from '@mui/material/colors';
import Close from "@mui/icons-material/Close";

export interface HFTextFieldProps {
  name: string;
  label: string;
  control: any;
  clearField?: (name: string) => void;
}

export type FieldProps = HFTextFieldProps & TextFieldProps;

function HFTextField({ name, label, control, clearField, ...props }: FieldProps) {

  const clearValue = (e: any) => {
    clearField && clearField(name);
  };

  return (
    <Controller
      name={ name }
      control={ control }
      render={ ({
        field,
        fieldState: { invalid, isTouched, isDirty, error },
        formState,
      }) => {
        return (
          <FormControl fullWidth={ props.fullWidth } size={ props.size ?? 'medium' } sx={ { ...props.sx } }>
            <TextField id={ name } label={ label } { ...props } { ...field } error={ !!(error) }
              helperText={ undefined } autoComplete="off" variant="outlined"
              InputProps={ {
                endAdornment: (field.value && <InputAdornment position="end" >
                  <IconButton onClick={ clearValue } size="small">
                    <Close />
                  </IconButton>
                </InputAdornment>), ...props.InputProps
              } }
              InputLabelProps={ {
                shrink: true,
                ...props.InputLabelProps
              } }
              size="medium"
            />
            <FormHelperText id={ `${name}-helper-text` } error={ !!error } sx={ { ml: 0 } } >
              {
                <Typography variant="body0" color={ red } component="span"> { error ? error.message : props.helperText } </Typography>
              }
            </FormHelperText>
          </FormControl>
        );
      } }
    />
  );
}

export default HFTextField;