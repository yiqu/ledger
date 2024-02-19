import DialogContent from "@mui/material/DialogContent";
import Stack from "@mui/material/Stack";
import DialogActions from "@mui/material/DialogActions";
import startCase from "lodash/startCase";
import DialogLayout from "~/shared/dialog/DialogLayout";
import { Form, useActionData, useNavigate, useRouteLoaderData, useSearchParams, useSubmit } from "@remix-run/react";
import { useForm } from "react-hook-form";
import { useCallback, useEffect } from "react";
import invariant from "tiny-invariant";
import type { ActionFunctionArgs } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import HFTextField from "~/shared/hook-forms/TextField";
import { handleError } from "~/api/utils/utils.server";
import Alert from "@mui/material/Alert";
import { useNavigationType } from "~/shared/hooks/useNavigationType";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import type { AccountAndExpense } from "~/shared/models/general.model";
import type { Account, AccountUpdateable } from "~/shared/models/account.model";
import { updateAccount } from "~/api/accounts.server";
import ButtonReset from "~/shared/components/ResetButton";
import ButtonSubmit from "~/shared/components/SubmitButton";
import ButtonClose from "~/shared/components/CloseButton";
import Divider from "@mui/material/Divider";
import type { Category } from "~/shared/models/category.model";
import { useFetcher } from "@remix-run/react";
import HFAutocompleteField from "~/shared/hook-forms/Autocomplete";
import type { HttpResponsePaged } from "~/shared/models/http.model";
import { isValidStringCount } from "~/api/utils/validations.server";

function AccountDetailEdit() {
  const [searchParams] = useSearchParams();
  const submit = useSubmit();
  const accountAndExpense = useRouteLoaderData('routes/accounts.$accountId') as AccountAndExpense | null;
  const allCategoriesFetcher = useFetcher<HttpResponsePaged<Category[]>>();

  useEffect(() => {
    if (allCategoriesFetcher.state === 'idle' && !allCategoriesFetcher.data) {
      allCategoriesFetcher.load('/categories?getAll=true');
    }
  }, [allCategoriesFetcher]);

  invariant(accountAndExpense?.account, "Expected account details data to be defined");

  const { account } = accountAndExpense;
  const actionData: any | undefined = useActionData<typeof action>();
  const hasActionError = actionData && !!actionData.error;
  const navigate = useNavigate();
  const { control, reset, setValue, formState, handleSubmit } = useForm<Account>({
    defaultValues: account,
    //resolver: yupResolver(accountSchema),
    //mode: "onChange"
  });
  const { isActionSubmission, isActionRedirect } = useNavigationType();
  const isApiLoading = isActionSubmission || isActionRedirect;
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

  const handleFormSubmit = (data: Account) => {
    const dataToSave: AccountUpdateable = {
      name: data.name,
      categoryId: data.category?.id ?? null
    };
    submit(dataToSave as any, {
      method: 'PATCH',
      replace: true,
      preventScrollReset: true,
    });
  };

  return (
    <DialogLayout open={ true } onClose={ handleClose } title={ `Edit: ${startCase(account.name)}` } maxWidth="xs">
      <Box width="100%">
        { (isApiLoading) && <LinearProgress color={ isActionRedirect ? 'success' : 'warning' } /> }
      </Box>
      <Form onSubmit={ handleSubmit(handleFormSubmit) }>
        <DialogContent>
          <Stack direction="column" justifyContent="start" alignItems="start" spacing={ 2 } width="100%">
            { hasActionError && <Alert severity="error" sx={ { width: '100%' } }> { actionData.message } </Alert> }

            <HFTextField name="name" label="Account name" control={ control } type="text"
              helperText="Account name has to be at least 2 characters long." fullWidth autoFocus
              clearField={ handleClearField } />

            <HFAutocompleteField
              name="category"
              label="Category"
              control={ control }
              helperText="Select a category for this account."
              options={ allCategoriesFetcher.data?.data ?? [] }
              getOptionLabel={ (option: Category) => (option?.name ?? '') }
              fullWidth={ true }
              isOptionEqualToValue={ (option: Category, value: Category) => option.id === value.id }
              loading={ allCategoriesFetcher.state === 'loading' }
            />

          </Stack>
        </DialogContent>
        <Divider flexItem variant="fullWidth" />
        <DialogActions sx={ { width: '100%' } }>
          <Stack direction="row" justifyContent="space-between" alignItems="center" width="100%">
            <Stack direction="row" justifyContent="start" alignItems="center">
              <ButtonClose onClick={ handleClose } />
            </Stack>
            <Stack direction="row" justifyContent="end" alignItems="center" spacing={ 2 }>
              <ButtonReset type="reset" onClick={ handleOnReset } disabled={ isApiLoading } />
              <ButtonSubmit type="submit" disabled={ !formState.isValid || isApiLoading }>
                { isApiLoading ? "Submitting..." : "Submit" }
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
  const accountName = body.get("name") as string;
  const categoryId = body.get("categoryId") as string | null;

  const url = new URL(request.url);
  const redirectUrl = url.searchParams.get('redirectUrl') as string;

  try {
    await isValidStringCount(accountName, 2);
  } catch (err: any) {
    return handleError({ message: err.message, error: true });
  }
  try {
    await updateAccount(accountId, {
      name: accountName,
      categoryId: categoryId
    });
    return redirect(redirectUrl);
  } catch (err: any) {
    return handleError({ message: err.message, error: true });
  }

}