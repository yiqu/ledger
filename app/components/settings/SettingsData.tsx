import FormGroup from "@mui/material/FormGroup";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Form, useSubmit } from "@remix-run/react";
import HFAutocompleteField from "~/shared/hook-forms/Autocomplete";
import type { DataSettingsForm, DataSettingsToUpdate } from "~/shared/models/settings";
import { useForm } from "react-hook-form";
import HFSwitch from "~/shared/hook-forms/Switch";
import Button from "@mui/material/Button";
import Save from "@mui/icons-material/Save";
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import { useNavigationType } from "~/shared/hooks/useNavigationType";
import type { Account } from "~/shared/models/account.model";


function SettingsData({ addAnotherAfterSubmit, account, accountList }: { addAnotherAfterSubmit: boolean, account: Account | undefined | null, accountList: Account[] }) {
  const submit = useSubmit();
  const { isActionSubmission, isActionReload, isNormalLoad } = useNavigationType();
  const apiLoading = isActionSubmission || isActionReload;
  
  const { control, reset, setValue, watch, handleSubmit, formState } = useForm<DataSettingsForm>({
    defaultValues: {
      addAnotherAfterSubmit: addAnotherAfterSubmit,
      account: account
    },
    //resolver: yupResolver(productSchema),
    //mode: "onChange",
  });

  const handleReset = () => {
    reset();
  };

  const handleFormSubmit = (payload: DataSettingsForm, event: any) => {
    const dataToSave: DataSettingsToUpdate = {
      addAnotherAfterSubmit: payload.addAnotherAfterSubmit,
      defaultAccountIdToAdd: payload.account?.id ?? ''
    };
    submit(dataToSave as any, {
      method: 'PATCH',
      replace: true,
      preventScrollReset: true,
    });
  };

  return (
    <Box p={ 3 } borderRadius="20px" width="100%" bgcolor="background.paper">
      <Stack direction="column" justifyContent="start" alignItems="start" spacing={ 1 }>
        <Typography variant="h5" fontFamily="Poppins">
          Data Settings
        </Typography>
        <Typography variant="body1">Settings related to adding and updating data.</Typography>
      </Stack>
      <Divider variant="fullWidth" flexItem sx={ {my:2} } />
      
      <Form method="PATCH" onSubmit={ handleSubmit(handleFormSubmit) }>
        <Stack direction="column" justifyContent="start" alignItems="start" spacing={ 1 } width="100%">
          <FormGroup>
            <HFSwitch control={ control } name="addAnotherAfterSubmit" label={ `Add another after save:` } labelProps={ {labelPlacement:"start", sx: {ml: 0}} } />
          </FormGroup>

          <Stack direction="row" justifyContent="start" alignItems="end" width="100%">
            <Typography variant="body1" flexBasis="30%">Default account on add: </Typography>
            
            <HFAutocompleteField 
              name="account" 
              label="Select an account" 
              control={ control } 
              options={ accountList } 
              getOptionLabel={ (option: Account) => (option?.name ?? '') }
              fullWidth={ true }
              isOptionEqualToValue={ (option: Account, value: Account) => option.id === value.id }
            />
          </Stack>

          <Stack direction="row" justifyContent="space-between" alignItems="center" width="100%" pt={ 3 }>
            <Button startIcon={ <RestartAltIcon /> } variant={ 'outlined' } onClick={ handleReset } disabled={ apiLoading } >
              Reset
            </Button>
            <Button startIcon={ <Save /> } variant={ 'outlined' } type="submit" disabled={ apiLoading } >
              Save
            </Button>
          </Stack>
        </Stack>
      </Form>
    </Box>
  );
}

export default SettingsData;