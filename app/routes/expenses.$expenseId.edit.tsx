import DialogContent from "@mui/material/DialogContent";
import Stack from "@mui/material/Stack";
import DialogActions from "@mui/material/DialogActions";
import DialogLayout from "~/shared/dialog/DialogLayout";
import { Form, useActionData, useNavigate, useParams, useRouteLoaderData, useSearchParams, useSubmit } from "@remix-run/react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import type { BaseSyntheticEvent } from "react";
import { useCallback } from "react";
import invariant from "tiny-invariant";
import type { ActionFunctionArgs } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { handleError } from "~/api/utils/utils.server";
import Alert from "@mui/material/Alert";
import { useNavigationType } from "~/shared/hooks/useNavigationType";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import format from "date-fns/format";
import HFTextField from "~/shared/hook-forms/TextField";
import type { Expense, ExpenseAddable, ExpenseEditable } from "~/shared/models/expense.model";
import { validateExpenseToAdd } from "~/api/utils/validations.server";
import { editExpense } from "~/api/expenses.server";
import type { Account, ExpenseAndAccounts } from "~/shared/models/account.model";
import { expenseSchema } from "~/shared/validation/yup-schemas";
import ExpenseEditFormFields from "~/components/expense/ExpenseEditFormFields";
import ButtonClose from "~/shared/components/CloseButton";
import ButtonReset from "~/shared/components/ResetButton";
import ButtonSubmit from "~/shared/components/SubmitButton";

function ExpenseEdit() {
  const { expenseId } = useParams();
  const submit = useSubmit();
  const expenseData = useRouteLoaderData<ExpenseAndAccounts>('routes/expenses.$expenseId')?.expense as Expense | null;
  const accountData = useRouteLoaderData<ExpenseAndAccounts>('routes/expenses.$expenseId')?.accounts as Account[] | null;
  invariant(expenseData, "Expected expense to be defined");
  invariant(accountData, "Expected accounts to be defined");

  const accountFromId = accountData.find(account => account.id === expenseData.accountId);
  const [searchParams] = useSearchParams();
  const redirectUrl: string = searchParams.get('redirectUrl') || '../';
  const { isActionSubmission, isActionRedirect } = useNavigationType();
  const actionData: any | undefined = useActionData<typeof action>();
  const hasActionError = actionData && !!actionData.error;
  const isApiLoading = isActionSubmission || isActionRedirect;
  const navigate = useNavigate();

  const { control, reset, setValue, handleSubmit } = useForm<ExpenseAddable>({
    defaultValues: {
      amount: expenseData.amount,
      account: accountFromId,
      accountId: accountFromId?.id,
      dateStringForInput: format(new Date(expenseData?.date ?? 0), 'yyyy-MM-dd HH:mm'),
      date: expenseData.date,
    },
    resolver: yupResolver(expenseSchema),
    mode: "onSubmit"
  });

  const handleClearField = useCallback((name: any) => {
    if (name) {
      setValue(name, '');
    }
  }, [setValue]);

  const handleClose = () => {
    navigate(`${redirectUrl}`);
  };

  const handleOnReset = () => {
    reset();
  };

  const handleEditSubmit = (payload: any, event?: BaseSyntheticEvent) => {
    if (expenseId) {
      let dataToSave: ExpenseEditable = {
        id: expenseId,
        amount: payload.amount,
        accountId: payload.accountId,
        date: new Date(payload.dateStringForInput).getTime(), // date need to be set here to reflect local browser time zone
        updatedAtEpoch: Date.now(),
      };

      submit(dataToSave as any, {
        method: 'PATCH',
      });
    }
  };

  return (
    <DialogLayout open={ true } onClose={ handleClose } title={ `Edit Expense` } maxWidth="xs">
      <Box width="100%">
        { isApiLoading && <LinearProgress color={ isActionRedirect ? 'success' : 'warning' } /> }
      </Box>
      <Form onSubmit={ handleSubmit(handleEditSubmit) }>
        <DialogContent>
          <Stack direction="column" justifyContent="start" alignItems="start" spacing={ 2 } width="100%">
            { hasActionError && <Alert severity="error" sx={ { width: '100%' } }>{ actionData.message }</Alert> }

            <ExpenseEditFormFields control={ control } onClearField={ handleClearField } accountList={ accountData } />

            {/* This is hidden, only used for to submit to the server */ }
            <HFTextField
              type="hidden"
              name="accountId"
              control={ control }
              label={ "Account" }
              sx={ { display: 'none', mt: '0px' } }
            />
          </Stack>
        </DialogContent>
        <DialogActions sx={ { width: '100%' } }>
          <Stack direction="row" justifyContent="space-between" alignItems="center" width="100%">
            <Stack direction="row" justifyContent="start" alignItems="center">
              <ButtonClose onClick={ handleClose } />
            </Stack>
            <Stack direction="row" justifyContent="flex-end" alignItems="center" spacing={ 1 }>
              <ButtonReset type="reset" onClick={ handleOnReset } disabled={ isApiLoading } />
              <ButtonSubmit type="submit" disabled={ isApiLoading }>
                { isApiLoading ? "Submitting..." : "Submit" }
              </ButtonSubmit>
            </Stack>
          </Stack>
        </DialogActions>
      </Form>
    </DialogLayout>
  );
}

export default ExpenseEdit;

export async function action({ request, context, params }: ActionFunctionArgs) {
  const body = await request.formData();
  const expenseId = body.get('id') as string;
  const url = new URL(request.url);
  const redirectUrl = url.searchParams.get('redirectUrl') as string;
  invariant(expenseId, "Expected expenseId in params to be defined");

  const amount = (body.get('amount') as string).trim() === '' ? -1 : +(body.get('amount') as string);
  const expense: ExpenseEditable = {
    id: expenseId,
    accountId: body.get('accountId') as string,
    date: +(body.get('date') as string),
    amount: amount,
    updatedAtEpoch: +(body.get('updatedAtEpoch') as string),
  };

  try {
    await validateExpenseToAdd(expense);
  } catch (err: any) {
    return handleError({ message: err.message, error: true });
  }

  try {
    await editExpense(expense);
    return redirect(`${redirectUrl}`);
  } catch (err: any) {
    return handleError({ message: err.message, error: true });
  }

}