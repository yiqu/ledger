import Stack from "@mui/material/Stack";
import SettingsData from "./SettingsData";
import type { DataSettings } from "~/shared/models/settings";
import SettingsDashboard from "./SettingsDashboard";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import { useNavigationType } from "~/shared/hooks/useNavigationType";
import Typography from "@mui/material/Typography";
import type { DateDisplayFormat } from "~/shared/models/general.model";
import TitleBarLayout from "../title/TitleBarLayout";
import SettingsIcon from '@mui/icons-material/Settings';
import type { Account } from "~/shared/models/account.model";
import { TitleNameDisplay } from "~/shared/components/Title";


function SettingsComponent({ settings, defaultAccount, accountList, updatedTime }: { settings: DataSettings, defaultAccount: Account | null | undefined, accountList: Account[], updatedTime: DateDisplayFormat }) {
  const { isActionSubmission, isActionReload } = useNavigationType();
  const apiLoading = isActionSubmission || isActionReload;

  return (
    <Stack direction="column" justifyContent="start" alignItems="center" width="100%" spacing={ 3 }>

      <TitleBarLayout>
        <Stack direction="row" justifyContent="start" alignItems="center" spacing={ 2 }>
          <SettingsIcon />
          <TitleNameDisplay name={ settings.userId } />
        </Stack>
        <Typography title={ updatedTime.tooltip }>
          Updated { `${updatedTime.display}` }
        </Typography>
      </TitleBarLayout>

      <Box height="5px" width="100%" mt={ -2 }>
        { apiLoading && <LinearProgress color={ 'success' } /> }
      </Box>

      <SettingsData addAnotherAfterSubmit={ settings.addAnotherAfterSubmit } account={ defaultAccount } accountList={ accountList } />

      <SettingsDashboard showDashboardChart={ settings.showDashboardChart } dashboardCount={ settings.dashboardCount } dashboardChartType={ settings.dashboardChartType } />

    </Stack>
  );
}

export default SettingsComponent;