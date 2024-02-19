import Stack from "@mui/material/Stack";
import { useForm } from "react-hook-form";
import type { ExpenseComment, ExpenseCommentInput } from "~/shared/models/comment.model";
import HFTextField from "~/shared/hook-forms/TextField";
import { useFetcher } from "@remix-run/react";
import Button from "@mui/material/Button";
import SendIcon from '@mui/icons-material/Send';
import type { SuccessJsonObj } from "~/shared/models/general.model";
import { useEffect, type KeyboardEvent } from "react";
import { useFetcherType } from "~/shared/hooks/useFetcherType";
import { expenseCommentFormFetcherId } from "~/shared/constants/fetcher-ids";
import CircularProgress from "@mui/material/CircularProgress";

function ExpenseCommentForm({ expenseId }: { expenseId: string }) {
  const fetcher = useFetcher<SuccessJsonObj<ExpenseComment>>({
    key: expenseCommentFormFetcherId
  });
  const { isFetcherActionSubmission, isFetcherActionReload, isFetcherDone } = useFetcherType(fetcher as any);
  const isApiLoading: boolean = isFetcherActionSubmission || isFetcherActionReload;

  const { control, formState, reset, getValues } = useForm<ExpenseCommentInput>({
    defaultValues: {
      comment: '',
    },
    //resolver: yupResolver(expenseCommentSchema),
    //mode: "onSubmit"
  });

  useEffect(() => {
    if (fetcher.data?.success && isFetcherDone) {
      reset({ comment: '' });
    }
  }, [fetcher.data?.success, isFetcherDone, reset]);

  const handleClearField = () => {
    reset({ comment: '' });
  };

  const handleCancelComment = () => {
    handleClearField();
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const formValues = getValues();
      const formData = new FormData();
      formData.append('comment', formValues.comment);
      fetcher.submit(formData, {
        method: 'post',
        action: `/expenses/${expenseId}/comments`,
        preventScrollReset: true
      });
    } else if (e.key === 'Escape') {
      handleCancelComment();
    }
  };

  if (isApiLoading) {
    return (
      <Stack direction="row" justifyContent="center" alignItems="center" width="100%" height={ '67px' }>
        <CircularProgress size={ 30 } />
      </Stack>
    );
  }

  return (
    <fetcher.Form method="post" action={ `/expenses/${expenseId}/comments` } style={ { width: '100%' } }>
      <fieldset disabled={ isApiLoading }>
        <HFTextField
          name="comment"
          control={ control }
          label={ "Add a comment..." }
          multiline
          fullWidth
          maxRows={ 8 }
          clearField={ handleClearField }
          variant="standard"
          onKeyDown={ handleKeyDown }
          id="expense-add-comment-input"
          key={ `${fetcher.data?.result?.id}` }
        />
        <Stack direction="row" justifyContent="flex-end" alignItems="center" mt={ 1 } spacing={ 2 }>

          { formState.isDirty && (
            <>
              <Button type="reset" variant="text" color="inherit" size="small" onClick={ handleCancelComment }>
                Cancel
              </Button>
              <Button type="submit" variant="contained" disabled={ isApiLoading }
                color="primary" size="small" startIcon={ <SendIcon /> }>
                Add
              </Button>
            </>
          ) }
        </Stack>
      </fieldset>
    </fetcher.Form>
  );
}

export default ExpenseCommentForm;