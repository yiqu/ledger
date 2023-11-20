import InputAdornment from "@mui/material/InputAdornment";
import { useLoaderData } from "@remix-run/react";
import type { Control } from "react-hook-form";
import type { loader } from "~/routes/_public.add";
import HFAutocompleteField from "~/shared/hook-forms/Autocomplete";
import HFTextField from "~/shared/hook-forms/TextField";
import type { Account } from "~/shared/models/account.model";

export interface NewExpenseFormFieldsProps {
  control: Control<any, any>;
  onClearField?: (name: string) => void;
}

function NewExpenseFormFields({ control, onClearField }: NewExpenseFormFieldsProps) {
  const { accounts: accountList } = useLoaderData<typeof loader>();

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

      <HFTextField name="date" label="" control={ control } type="datetime-local" variant="standard" helperText="Expense submission date" fullWidth clearField={ onClearField } />

      { }

      <HFAutocompleteField
        name="account"
        label="Select an Account"
        control={ control }
        options={ accountList }
        getOptionLabel={ (option: Account) => (option?.name ?? '') }
        fullWidth={ true }
        isOptionEqualToValue={ (option: Account, value: Account) => option.id === value.id }
      />

    </>
  );
}

export default NewExpenseFormFields;