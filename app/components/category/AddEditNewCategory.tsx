import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import DialogContent from "@mui/material/DialogContent";
import Stack from "@mui/material/Stack";
import Alert from "@mui/material/Alert";
import DialogActions from "@mui/material/DialogActions";
import { useForm } from "react-hook-form";
import ButtonClose from "~/shared/components/CloseButton";
import ButtonReset from "~/shared/components/ResetButton";
import ButtonSubmit from "~/shared/components/SubmitButton";
import DialogLayout from "~/shared/dialog/DialogLayout";
import { useFetcher } from "@remix-run/react";
import { useEffect } from "react";
import HFTextField from "~/shared/hook-forms/TextField";
import { useFetcherType } from "~/shared/hooks/useFetcherType";
import type { CategoryAddable, CategoryEditable } from "~/shared/models/category.model";
import HFSwitch from "~/shared/hook-forms/Switch";

interface AddNewCategoryProps {
  open?: boolean;
  initData?: CategoryAddable | CategoryEditable;
  isEditMode?: boolean;
  onClose: (enteredData?: CategoryAddable) => void;
}

function AddEditCategoryDialog({ open, initData, isEditMode, onClose }: AddNewCategoryProps) {
  const addFetcher = useFetcher<CategoryAddable>();
  const { isFetcherActionSubmission, isFetcherActionReload, isFetcherDone } = useFetcherType(addFetcher);
  const hasActionError = addFetcher.data && !!addFetcher.data.error;
  const actionSuccess: boolean = !!(isFetcherDone && addFetcher.data && addFetcher.data.ok);
  const isApiLoading = isFetcherActionSubmission || isFetcherActionReload;

  let initValues: CategoryAddable = {
    name: initData?.name || '',
    shown: initData?.shown
  };

  if (isEditMode) {
    initValues = {
      ...initData as CategoryEditable
    } as CategoryEditable;
  }

  const { control, reset, setValue, getValues } = useForm<CategoryAddable>({
    defaultValues: {
      ...initValues
    },
  });

  useEffect(() => {
    if (actionSuccess) {
      onClose();
    }
  }, [actionSuccess, getValues, onClose]);

  const handleClose = () => {
    onClose(getValues());
  };

  const onClearField = (fieldId: string) => {
    if (fieldId) {
      setValue(fieldId as 'name', '');
    }
  };

  const handleOnReset = () => {
    reset();
  };

  return (
    <DialogLayout open={ !!open } onClose={ handleClose } title={ `${isEditMode ? 'Edit' : 'Add New'} Category${isEditMode ? `: ${initData?.name}` : ''}` } maxWidth="sm">
      <Box width="100%">
        { (isFetcherActionSubmission) && <LinearProgress color={ 'warning' } /> }
      </Box>
      <addFetcher.Form method="post" action={ isEditMode ? `/categories/edit` : `/categories/add` } >
        <DialogContent>
          <Stack direction="column" justifyContent="start" alignItems="start" spacing={ 2 } width="100%">
            { hasActionError && <Alert severity="error" sx={ { width: '100%' } }>{ addFetcher.data?.message }</Alert> }
            <HFTextField name="name" label="Category name" control={ control } variant="standard" type="text" helperText="" fullWidth autoFocus
              clearField={ onClearField } />

            <HFSwitch name="shown" label="Show on Dashboard" control={ control } />

            {/* This is hidden, only used for to submit to the server */ }
            <HFTextField
              type="hidden"
              name="id"
              control={ control }
              label={ "Id" }
              sx={ { display: 'none', mt: '0px' } }
            />

          </Stack>
        </DialogContent>
        <DialogActions sx={ { width: '100%' } }>
          <Stack direction="row" justifyContent="space-between" alignItems="center" width="100%">
            <Stack direction="row" justifyContent="start" alignItems="center">
              <ButtonClose onClick={ handleClose } disabled={ isApiLoading } />
            </Stack>
            <Stack direction="row" justifyContent="end" alignItems="center" spacing={ 2 }>
              <ButtonReset type="reset" onClick={ handleOnReset } disabled={ isApiLoading } />

              <ButtonSubmit type="submit" disabled={ isApiLoading } variant="outlined">
                { isApiLoading ? "Submitting..." : "Submit" }
              </ButtonSubmit>
            </Stack>
          </Stack>

        </DialogActions>
      </addFetcher.Form>
    </DialogLayout>
  );
}

export default AddEditCategoryDialog;