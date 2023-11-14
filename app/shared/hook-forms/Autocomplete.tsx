import TextField from "@mui/material/TextField";
import FormHelperText from "@mui/material/FormHelperText";
import Typography from "@mui/material/Typography";
import { Controller } from "react-hook-form";
import Autocomplete from '@mui/material/Autocomplete';

export interface HFAutocompleteProps {
  name: string;
  label: string;
  helperText?: string;
  control: any;
  options: any[];
  propertyIdToSelect?: string; // the property id name to be selected for onChange
}

export type FieldProps = HFAutocompleteProps & any;

function HFAutocompleteField({ name, label, control, options, helperText, propertyIdToSelect, ...autoCompleteProps }: FieldProps) {

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
          <Autocomplete
            id={ name }
            options={ options }
            { ...field }
            renderInput={ (params) => <TextField { ...params } label={ label } variant="standard" /> }
            onChange={ (e, data: any) => field.onChange(propertyIdToSelect ? data[propertyIdToSelect] : data) }
            { ...autoCompleteProps }
          />
          <FormHelperText id={ `${name}-helper-text` } error={ !!error } sx={ {ml: 0} } >
            {
              <Typography variant="caption" component="span"> { error ? error.message : helperText } </Typography>
            }
          </FormHelperText>
        </>
      ) }
    />
  );
}

export default HFAutocompleteField;