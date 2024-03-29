import { Form, isRouteErrorResponse, useLoaderData, useNavigate, useRouteError, useSubmit } from "@remix-run/react";
import DialogLayout from "~/shared/dialog/DialogLayout";
import { useSearchParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import NewFormFields from "~/components/add/NewFormFields";
import startCase from "lodash/startCase";
import type { ActionFunctionArgs, LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { useActionData } from "@remix-run/react";
import DialogContent from "@mui/material/DialogContent";
import Stack from "@mui/material/Stack";
import Alert from "@mui/material/Alert";
import { handleError } from "~/api/utils/utils.server";
import { badRequest } from "~/api/utils/request.server";
import { useCallback } from "react";
import { useNavigationType } from "~/shared/hooks/useNavigationType";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import { getInitFormValue } from "~/shared/utils/time";
import ActionLoaderErrorDisplay from "~/components/error/ActionLoaderError";
import OtherErrorDisplay from "~/components/error/OtherError";
import { getDataSettingsByUserId } from "~/api/settings.server";
import { DEFAULT_SETTINGS_ADD } from "~/components/settings/NewSettings";
import type { ExpenseAddable } from "~/shared/models/expense.model";
import type { AccountAddable } from "~/shared/models/account.model";
import { addAccount, getAccounts } from "~/api/accounts.server";
import { isValidStringCount, validateExpenseToAdd } from "~/api/utils/validations.server";
import { addExpense } from "~/api/expenses.server";
import { USER_ID } from "~/shared/utils/constants";
import ButtonClose from "~/shared/components/CloseButton";
import ButtonSubmit from "~/shared/components/SubmitButton";
import ButtonReset from "~/shared/components/ResetButton";
import Divider from "@mui/material/Divider";
import DialogActionBar from "~/shared/dialog/DialogActionBar";

export const meta: MetaFunction = (data) => {
  return [
    { title: "Add New Expense | Ledger" },
    { name: "description", content: "Add a new expense." },
  ];
};

function AddNew() {
  const navigate = useNavigate();
  const submit = useSubmit();
  const { isActionSubmission, isActionRedirect } = useNavigationType();
  const [searchParams] = useSearchParams();
  const actionData: any | undefined = useActionData<typeof action>();
  const { currentAccountFromUrl, dataSettings: { addAnotherAfterSubmit } } = useLoaderData<typeof loader>();

  const hasActionError = actionData && !!actionData.error;
  const redirectUrl: string = searchParams.get('redirectUrl') || '/';
  const entityType = searchParams.get('type') as 'account' | 'expense' | null;
  const isApiLoading = isActionSubmission || isActionRedirect;

  const { control, reset, setValue, handleSubmit } = useForm<ExpenseAddable | AccountAddable>({
    defaultValues: getInitFormValue(entityType, currentAccountFromUrl),
    shouldFocusError: true
    //resolver: yupResolver(productSchema),
    //mode: "onChange",
  });

  const handleFormSubmit = (payload: ExpenseAddable | AccountAddable, event: any) => {
    let dataToSave = {};

    if (entityType === 'expense') {
      dataToSave = {
        ...payload,
        accountId: (payload as ExpenseAddable).account?.id ?? '',
        addAnotherAfterSubmit,
        date: new Date((payload as ExpenseAddable).date).getTime()
      };
    } else if (entityType === 'account') {
      dataToSave = {
        ...payload
      };
    }

    submit(dataToSave as any, {
      method: 'post',
    });
  };

  const handleClose = useCallback(() => {
    navigate(redirectUrl);
  }, [navigate, redirectUrl]);

  const handleOnReset = () => {
    reset();
  };

  const handleClearField = useCallback((name: any) => {
    if (name) {
      setValue(name, '');
    }
  }, [setValue]);

  if (!entityType) {
    return null;
  }

  return (
    <>
      <DialogLayout open={ true } onClose={ handleClose } title={ `Add New ${startCase(entityType)}` } maxWidth="xs">
        <Box width="100%">
          { (isActionSubmission || isActionRedirect) && <LinearProgress color={ isActionRedirect ? 'success' : 'warning' } /> }
        </Box>
        <Form method="post" onSubmit={ handleSubmit(handleFormSubmit) }>
          <DialogContent>
            <Stack direction="column" justifyContent="start" alignItems="start" spacing={ 2 } width="100%">
              { hasActionError && <Alert severity="error" sx={ { width: '100%' } }>{ actionData.message }</Alert> }
              <NewFormFields type={ entityType } control={ control } onClearField={ handleClearField } />
            </Stack>
          </DialogContent>
          <Divider flexItem />
          <DialogActionBar dialogActionsProps={ { sx: { width: '100%' } } }>
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
          </DialogActionBar>
        </Form>
      </DialogLayout>
    </>
  );
}

export default AddNew;

export async function loader({ params, request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const entityType = url.searchParams.get('type') as 'expense' | 'account' | null;
  const accountId: string = url.searchParams.get('accountId') || '';

  if (!entityType) {
    throw badRequest({ error: "Entity being added is missing." });
  }
  const accounts = await getAccounts();
  const dataSettings = await getDataSettingsByUserId(USER_ID);

  const account = accounts.find(account => account.id === accountId);
  const defaultAccount = accounts.find(account => account.id === dataSettings?.defaultAccountIdToAdd);

  return json({
    accounts,
    currentAccountFromUrl: account || defaultAccount, // use the default account from Settings if no accountId from search params is not found
    dataSettings: dataSettings ?? DEFAULT_SETTINGS_ADD
  }, {
    headers: {
      'Cache-Control': 'public, no-cache',
    },
  });
}

export async function action({ request, context, params }: ActionFunctionArgs) {
  const url = new URL(request.url);
  const body = await request.formData();
  const entityType = url.searchParams.get('type') as 'expense' | 'account' | null;
  const redirectUrl: string = url.searchParams.get('redirectUrl') || '/';

  if (entityType === 'account') {
    const accountName = body.get('name') as string;
    try {
      await isValidStringCount(accountName, 2);
    } catch (err: any) {
      return handleError({ message: err.message, error: true });
    }

    try {
      const result = await addAccount({
        name: accountName,
        dateAddedEpoch: Date.now(),
        updatedAtEpoch: 0
      });
      return redirect(`${redirectUrl}?addedAccountId=${result.id}`);
    } catch (err: any) {
      return handleError({ message: err.message, error: true });
    }
  }

  if (entityType === 'expense') {
    const shouldRedirect = (body.get('addAnotherAfterSubmit') === 'false');
    const expense: ExpenseAddable = {
      accountId: body.get('accountId') as string,
      date: +(body.get('date') as string),
      amount: +(body.get('amount') as string),
      addedAtEpoch: Date.now(),
      updatedAtEpoch: 0,
    };

    try {
      await validateExpenseToAdd(expense);
    } catch (err: any) {
      return handleError({ message: err.message, error: true });
    }

    try {
      const result = await addExpense(expense);
      return shouldRedirect ? redirect(redirectUrl) : json(result);
    } catch (err: any) {
      return handleError({ message: err.message, error: true });
    }

  }
}

export function ErrorBoundary() {
  const error: any = useRouteError();
  if (isRouteErrorResponse(error)) {
    return (
      <ActionLoaderErrorDisplay error={ error } />
    );
  }

  return (
    <OtherErrorDisplay error={ error } />
  );
}