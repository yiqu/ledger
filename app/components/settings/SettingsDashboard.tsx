import FormGroup from "@mui/material/FormGroup";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Form, useSubmit } from "@remix-run/react";
import type { DashboardSettingsForm, DashboardSettingsToUpdate } from "~/shared/models/settings";
import { useForm } from "react-hook-form";
import HFSwitch from "~/shared/hook-forms/Switch";
import Button from "@mui/material/Button";
import Save from "@mui/icons-material/Save";
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import { useNavigationType } from "~/shared/hooks/useNavigationType";
import HFSelectField from "~/shared/hook-forms/Select";
import MenuItem from "@mui/material/MenuItem";
import type { DashboardChartType } from "@prisma/client";

function SettingsDashboard({ showDashboardChart, dashboardChartType, dashboardCount }: { showDashboardChart: boolean; dashboardChartType: DashboardChartType; dashboardCount: number }) {
  const submit = useSubmit();
  const { isActionSubmission, isActionReload } = useNavigationType();
  const apiLoading = isActionSubmission || isActionReload;

  const { control, reset, handleSubmit } = useForm<DashboardSettingsForm>({
    defaultValues: {
      showDashboardChart: showDashboardChart,
      dashboardCount: dashboardCount,
      dashboardChartType: dashboardChartType
    },
    //resolver: yupResolver(productSchema),
    //mode: "onChange",
  });

  const handleReset = () => {
    reset();
  };

  const handleFormSubmit = (payload: DashboardSettingsToUpdate, event: any) => {
    const dataToSave: DashboardSettingsToUpdate = {
      showDashboardChart: payload.showDashboardChart,
      dashboardCount: payload.dashboardCount,
      dashboardChartType: payload.dashboardChartType
    };
    submit(dataToSave as any, {
      method: 'PATCH',
      replace: true,
      preventScrollReset: true,
    });
  };

  return (
    <Box p={ 3 } borderRadius="20px" width="100%" bgcolor="background.paper">
      <Stack direction="column" justifyContent="start" alignItems="start" spacing={ 1 }>
        <Typography variant="h5" fontFamily="Poppins">
          Dashboard Settings
        </Typography>
        <Typography variant="body1">Settings related to Dashboard.</Typography>
      </Stack>
      <Divider variant="fullWidth" flexItem sx={ { my: 2 } } />

      <Form method="PATCH" onSubmit={ handleSubmit(handleFormSubmit) }>
        <Stack direction="column" justifyContent="start" alignItems="start" spacing={ 1 } width="100%">
          <FormGroup>
            <HFSwitch control={ control } name="showDashboardChart" label={ `Show Dashboard Chart:` } labelProps={ { labelPlacement: "start", sx: { ml: 0 } } } />
          </FormGroup>

          <Stack direction="row" justifyContent="start" alignItems="end" width="100%">
            <Typography variant="body1" flexBasis="30%">Chart Type: </Typography>

            <HFSelectField control={ control } name="dashboardChartType" label={ `Dashboard Chart Type:` } variant="standard">
              <MenuItem value={ 'bar' }>Bar</MenuItem>
              <MenuItem value={ 'line' }>Line</MenuItem>
            </HFSelectField>

          </Stack>

          <Stack direction="row" justifyContent="start" alignItems="end" width="100%">
            <Typography variant="body1" flexBasis="30%">Dashboard Data Count: </Typography>

            <HFSelectField control={ control } name="dashboardCount" label={ `Dashboard Data Count:` } variant="standard">
              <MenuItem value={ 10 }>10</MenuItem>
              <MenuItem value={ 20 }>20</MenuItem>
              <MenuItem value={ 30 }>30</MenuItem>
              <MenuItem value={ 50 }>50</MenuItem>
            </HFSelectField>

          </Stack>

          <Stack direction="row" justifyContent="space-between" alignItems="center" width="100%" pt={ 3 }>
            <Button startIcon={ <RestartAltIcon /> } variant={ 'outlined' } onClick={ handleReset } disabled={ apiLoading } >
              Reset
            </Button>
            <Button startIcon={ <Save /> } variant={ 'outlined' } type="submit" disabled={ apiLoading } >
              Save
            </Button>
          </Stack>
        </Stack>
      </Form>
    </Box>
  );
}

export default SettingsDashboard;