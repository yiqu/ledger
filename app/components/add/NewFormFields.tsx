import HFTextField from "~/shared/hook-forms/TextField";
import NewExpenseFormFields from "./NewExpenseFormFields";
import type { Control } from "react-hook-form";

function NewFormFields({ type, control, onClearField }: { type: 'expense' | 'account', control: Control<any, any>, onClearField?: (name: string) => void }) {

  if (type === 'expense') {
    return (
      <NewExpenseFormFields control={ control } onClearField={ onClearField } />
    );
  } else if (type === 'account') {
    return (
      <>
        <HFTextField name="name" label="Account name" control={ control } type="text"
          helperText="Account name has to be at least 2 characters long." fullWidth autoFocus
          clearField={ onClearField } />
      </>

    );
  }

  return null;
}

export default NewFormFields;