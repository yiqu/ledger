import InputAdornment from "@mui/material/InputAdornment";
import type { Control } from "react-hook-form";
import HFAutocompleteField from "~/shared/hook-forms/Autocomplete";
import HFTextField from "~/shared/hook-forms/TextField";
import type { Account } from "~/shared/models/account.model";

function ExpenseEditFormFields({ accountList, control, onClearField }: { accountList: Account[], control: Control<any, any>, onClearField?: (name: string) => void }) {

  return (
    <>
      <HFTextField name="amount" label="Amount" control={ control } variant="standard" type="number" helperText="Expense amount" fullWidth autoFocus
        InputProps={ {
          startAdornment: <InputAdornment position="start">$</InputAdornment>,
        } }
        clearField={ onClearField }
        onFocus={ event => {
          event.target.select();
        } }
      />

      <HFTextField name="dateStringForInput" label="" control={ control } type="datetime-local" variant="standard" helperText="Expense submission date" fullWidth clearField={ onClearField } />

      <HFAutocompleteField
        name="account"
        label="Select an account"
        control={ control }
        options={ accountList }
        getOptionLabel={ (option: Account) => (option?.name ?? '') }
        fullWidth={ true }
        isOptionEqualToValue={ (option: Account, value: Account) => option.id === value.id }
      />

    </>
  );
}

export default ExpenseEditFormFields;