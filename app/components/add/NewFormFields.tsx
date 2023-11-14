import HFTextField from "~/shared/hook-forms/TextField";
import NewExpenseFormFields from "./NewExpenseFormFields";
import HFSwitch from "~/shared/hook-forms/Switch";
import type { Control } from "react-hook-form";

function NewFormFields({ type, control, onClearField }: { type: 'expense' | 'account', control: Control<any, any>, onClearField?: (name: string) => void}) {
  
  if (type === 'expense') {
    return (
      <NewExpenseFormFields control={ control } onClearField={ onClearField } />
    );
  } else if (type === 'account') {
    return (
      <>
        <HFTextField name="name" label="Account Name" control={ control } variant="standard" type="text" helperText="Account name." fullWidth autoFocus
          clearField={ onClearField } />
        <HFSwitch name="shown" label="Show by default" control={ control } />
      </>
      
    );
  }

  return null;
}

export default NewFormFields;