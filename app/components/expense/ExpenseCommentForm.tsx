import Stack from "@mui/material/Stack";
import { useForm } from "react-hook-form";
import type { ExpenseCommentInput } from "~/shared/models/comment.model";
import { yupResolver } from "@hookform/resolvers/yup";
import { expenseCommentSchema } from "~/shared/validation/yup-schemas";
import HFTextField from "~/shared/hook-forms/TextField";
import { useFetcher } from "@remix-run/react";
import Button from "@mui/material/Button";
import SendIcon from '@mui/icons-material/Send';
import type { SuccessJsonObj } from "~/shared/models/general.model";



function ExpenseCommentForm({ expenseId }: { expenseId: string }) {
  const fetcher = useFetcher<SuccessJsonObj>();
  const { control, formState, reset } = useForm<ExpenseCommentInput>({
    defaultValues: {
      comment: '',
    },
    resolver: yupResolver(expenseCommentSchema),
    mode: "onSubmit"
  });

  const handleClearField = () => {
    reset({ comment: '' });
  };

  const handleCancelComment = () => {
    handleClearField();
  };

  return (
    <Stack direction="column" justifyContent="start" alignItems="start" width="100%" spacing={ 2 }>
      <fetcher.Form method="post" action={ `/expenses/${expenseId}/comments` } style={ { width: '100%' } }>
        <HFTextField
          name="comment"
          control={ control }
          label={ "Add a comment..." }
          multiline
          rows={ 1 }
          fullWidth
          clearField={ handleClearField }
          variant="standard"
        />
        <Stack direction="row" justifyContent="flex-end" alignItems="center" mt={ 1 } spacing={ 2 }>

          { formState.isDirty && (
            <>
              <Button type="reset" variant="text" color="inherit" size="small" onClick={ handleCancelComment }>
                Cancel
              </Button>
              <Button type="submit" variant="text" color="primary" size="small" startIcon={ <SendIcon /> }>
                Add
              </Button>
            </>
          ) }
        </Stack>
      </fetcher.Form>

    </Stack>
  );
}

export default ExpenseCommentForm;