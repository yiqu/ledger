import DialogContent from "@mui/material/DialogContent";
import Stack from "@mui/material/Stack";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import { startCase } from "lodash";
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

            <HFSwitch name="shown" label="Show by default" control={ control } />

            <DialogActions sx={ { width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' } }>
              <Button type="reset" onClick={ handleOnReset } disabled={ isActionSubmission }>
                Reset
              </Button>
              <Button type="submit" disabled={ !formState.isValid || isActionSubmission }>
                { isActionSubmission ? "Submitting..." : "Submit" }
              </Button>
            </DialogActions>
          </Stack>
        </DialogContent>
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