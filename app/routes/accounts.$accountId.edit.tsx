import DialogContent from "@mui/material/DialogContent";
import Stack from "@mui/material/Stack";
import DialogActions from "@mui/material/DialogActions";
import startCase from "lodash/startCase";
import DialogLayout from "~/shared/dialog/DialogLayout";
import { Form, useActionData, useNavigate, useRouteLoaderData, useSearchParams } from "@remix-run/react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useCallback } from "react";
import invariant from "tiny-invariant";
import type { ActionFunctionArgs } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import HFTextField from "~/shared/hook-forms/TextField";
import { handleError } from "~/api/utils/utils.server";
import Alert from "@mui/material/Alert";
import { useNavigationType } from "~/shared/hooks/useNavigationType";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import HFSwitch from "~/shared/hook-forms/Switch";
import type { AccountAndExpense } from "~/shared/models/general.model";
import type { AccountAddable } from "~/shared/models/account.model";
import { accountSchema } from "~/shared/validation/yup-schemas";
import { updateAccount } from "~/api/accounts.server";
import ButtonReset from "~/shared/components/ResetButton";
import ButtonSubmit from "~/shared/components/SubmitButton";
import ButtonClose from "~/shared/components/CloseButton";
import Divider from "@mui/material/Divider";

function AccountDetailEdit() {
  const [searchParams] = useSearchParams();
  const accountAndExpense = useRouteLoaderData('routes/accounts.$accountId') as AccountAndExpense | null;
  invariant(accountAndExpense?.account, "Expected account details data to be defined");

  const { account } = accountAndExpense;
  const actionData: any | undefined = useActionData<typeof action>();
  const hasActionError = actionData && !!actionData.error;
  const navigate = useNavigate();
  const { control, reset, setValue, formState } = useForm<AccountAddable>({
    defaultValues: account,
    resolver: yupResolver(accountSchema),
    mode: "onChange"
  });
  const { isActionSubmission, isActionRedirect } = useNavigationType();
  const redirectUrl: string = searchParams.get('redirectUrl') || '../';

  const handleClearField = useCallback((name: any) => {
    if (name) {
      setValue(name, '');
    }
  }, [setValue]);

  const handleClose = () => {
    navigate(redirectUrl);
  };

  const handleOnReset = () => {
    reset();
  };

  return (
    <DialogLayout open={ true } onClose={ handleClose } title={ `Edit: ${startCase(account.name)}` } maxWidth="xs">
      <Box width="100%">
        { (isActionSubmission || isActionRedirect) && <LinearProgress color={ isActionRedirect ? 'success' : 'warning' } /> }
      </Box>
      <Form method="PATCH">
        <DialogContent>
          <Stack direction="column" justifyContent="start" alignItems="start" spacing={ 2 } width="100%">
            { hasActionError && <Alert severity="error" sx={ { width: '100%' } }> { actionData.message } </Alert> }

            <HFTextField name="name" label="Account Name" control={ control } variant="standard" type="text" helperText="Account name." fullWidth autoFocus
              clearField={ handleClearField } />

            <HFSwitch name="shown" label="Show on Dashboard" control={ control } />

          </Stack>
        </DialogContent>
        <Divider flexItem variant="fullWidth" />
        <DialogActions sx={ { width: '100%' } }>
          <Stack direction="row" justifyContent="space-between" alignItems="center" width="100%">
            <Stack direction="row" justifyContent="start" alignItems="center">
              <ButtonClose onClick={ handleClose } />
            </Stack>
            <Stack direction="row" justifyContent="end" alignItems="center" spacing={ 2 }>
              <ButtonReset type="reset" onClick={ handleOnReset } disabled={ isActionSubmission } />
              <ButtonSubmit type="submit" disabled={ !formState.isValid || isActionSubmission }>
                { isActionSubmission ? "Submitting..." : "Submit" }
              </ButtonSubmit>
            </Stack>
          </Stack>
        </DialogActions>
      </Form>
    </DialogLayout>
  );
}

export default AccountDetailEdit;

export async function action({ request, context, params }: ActionFunctionArgs) {
  const body = await request.formData();
  const accountId = params.accountId;
  invariant(accountId, "Expected accountId in params to be defined");
  const name = body.get("name") as string | null;

  const url = new URL(request.url);
  const redirectUrl = url.searchParams.get('redirectUrl') as string;

  try {
    await updateAccount(accountId, {
      name: name,
      shown: body.get("shown") === 'true'
    });
    return redirect(redirectUrl);
  } catch (err: any) {
    return handleError({ message: err.message, error: true });
  }

}