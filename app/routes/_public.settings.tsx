import type { ActionFunctionArgs } from "@remix-run/node";
import { json, type LoaderFunctionArgs, type MetaFunction } from "@remix-run/node";
import useScreenSize from "~/shared/hooks/useIsMobile";
import LayoutWithGutter from "~/shared/layouts/LayoutWithGutter";
import { isRouteErrorResponse, useLoaderData, useRouteError } from "@remix-run/react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import SettingsComponent from "~/components/settings/Settings";
import { USER_ID } from "~/shared/utils/constants";
import { addDataSettings, getDataSettingsByUserId, updateDataSettings } from "~/api/settings.server";
import NewSettings, { DEFAULT_SETTINGS_ADD } from "~/components/settings/NewSettings";
import { handleError } from "~/api/utils/utils.server";
import type { SettingsAllData } from "~/shared/models/settings";
import ActionLoaderErrorDisplay from "~/components/error/ActionLoaderError";
import OtherErrorDisplay from "~/components/error/OtherError";
import { convertDateDisplay } from "~/api/utils/date.server";
import type { DashboardChartType } from "@prisma/client";
import { getAccounts } from "~/api/accounts.server";

export const meta: MetaFunction = (data) => {
  return [
    { title: "Settings - Ledger" },
    { name: "description", content: "App Settings" },
  ];
};

function Settings() {
  const { isMobile } = useScreenSize();
  const { settings: dataSettings, currentDefaultAccount, accountList, updatedAtFromNow } = useLoaderData<typeof loader>();

  return (
    <Stack direction="column" width="100%">

      <Box mt={ 2 } mx={ isMobile ? 2 : 0 }>
        <LayoutWithGutter size={ 'wide' }>
          {
            dataSettings ? (<SettingsComponent settings={ dataSettings } defaultAccount={ currentDefaultAccount } accountList={ accountList } updatedTime={ updatedAtFromNow } />) : (<NewSettings />)
          }
        </LayoutWithGutter>
      </Box>
    </Stack>
  );
}

export default Settings;

export async function loader({ request, context, params }: LoaderFunctionArgs) {
  const settings = await getDataSettingsByUserId(USER_ID);
  const accounts = await getAccounts();
  let currentDefaultAccount = null;
  if (settings && accounts.length > 0) {
    currentDefaultAccount = accounts.find(b => b.id === settings.defaultAccountIdToAdd);
  }

  return json({
    settings,
    currentDefaultAccount: currentDefaultAccount ?? null, // value need to be null if it's not found (undefined) for MUI to make it a controlled component
    accountList: accounts,
    updatedAtFromNow: convertDateDisplay(settings?.updatedAt ?? '', 'fromNow'),
  });
}

export async function action({ request, context, params }: ActionFunctionArgs) {

  if (request.method === 'POST') {
    try {
      const res = await addDataSettings(DEFAULT_SETTINGS_ADD);
      return json(res);
    } catch (err: any) {
      return handleError({ message: err.message, error: true, showToast: true });
    }
  } else if (request.method === 'PATCH') {
    const body = await request.formData();
    const addAnotherAfterSubmit = body.get('addAnotherAfterSubmit') as string | null;
    const defaultAccountIdToAdd = body.get('defaultAccountIdToAdd') as string | null;
    const showDashboardChart = body.get('showDashboardChart') as string | null;
    const dashboardCount = body.get('dashboardCount') as string | null;
    const dashboardChartType = body.get('dashboardChartType') as DashboardChartType | null;

    const data: SettingsAllData = {
      addAnotherAfterSubmit: addAnotherAfterSubmit ? addAnotherAfterSubmit === 'true' : undefined,
      defaultAccountIdToAdd: defaultAccountIdToAdd === null ? undefined : (defaultAccountIdToAdd || ""), // this is null when Autocomplete is not selected
      showDashboardChart: showDashboardChart ? (showDashboardChart === 'true') : undefined,
      dashboardCount: dashboardCount ? (parseInt(dashboardCount) ? parseInt(dashboardCount) : 20) : undefined,
      dashboardChartType: dashboardChartType ? dashboardChartType : 'bar',
    };

    try {
      const res = await updateDataSettings(data);
      return json(res);
    } catch (err: any) {
      return handleError({ message: err.message, error: true, showToast: true });
    }
  }

  return json({ success: true });
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