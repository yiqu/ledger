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
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import { handleError } from "~/api/utils/utils.server";
import { badRequest } from "~/api/utils/request.server";
import { useCallback } from "react";
import { useNavigationType } from "~/shared/hooks/useNavigationType";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import { getDefaultValue, getInitAddableData } from "~/shared/utils/time";
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

export const meta: MetaFunction = (data) => {
  return [
    { title: "Add New Expense - Ledger" },
    { name: "description", content: "Add a new expense." },
  ];
};

function AddNewExpense() {
  const navigate = useNavigate();
  const submit = useSubmit();
  const { isActionSubmission, isActionRedirect } = useNavigationType();
  const [searchParams, setSearchParams] = useSearchParams();
  const actionData: any | undefined = useActionData<typeof action>();
  const { accounts: accountList, currentAccountFromUrl, dataSettings: { addAnotherAfterSubmit } } = useLoaderData<typeof loader>();

  const hasActionError = actionData && !!actionData.error;
  const redirectUrl: string = searchParams.get('redirectUrl') || '/';
  const entityType = searchParams.get('type') as 'account' | 'expense' | null;
  const isApiLoading = isActionSubmission || isActionRedirect;

  const { control, reset, setValue, watch, handleSubmit } = useForm<ExpenseAddable | AccountAddable>({
    defaultValues: getDefaultValue(entityType, getInitAddableData(currentAccountFromUrl)),
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
        addAnotherAfterSubmit
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

              <DialogActions sx={ { width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' } }>
                <Button type="reset" onClick={ handleOnReset } disabled={ isApiLoading }>
                  Reset
                </Button>
                <Button type="submit" disabled={ isApiLoading }>
                  { isApiLoading ? "Submitting..." : "Submit" }
                </Button>
              </DialogActions>
            </Stack>
          </DialogContent>
        </Form>
      </DialogLayout>
    </>
  );
}

export default AddNewExpense;

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
    const accountShown = body.get('shown') as string;
    try {
      await isValidStringCount(accountName, 5);
    } catch (err: any) {
      return handleError({ message: err.message, error: true });
    }

    try {
      const result = await addAccount({
        name: accountName,
        shown: accountShown === 'true',
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
      date: body.get('date') as string,
      amount: +(body.get('amount') as string),
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