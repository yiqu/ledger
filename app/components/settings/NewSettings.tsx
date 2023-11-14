import Add from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Form } from "@remix-run/react";
import type { DataSettingsToAdd } from "~/shared/models/settings";
import { USER_ID } from "~/shared/utils/constants";

function NewSettings() {

  return (
    <Stack direction="column" justifyContent="start" alignItems="center" spacing={ 2 } width="100%">
      <Typography variant="h5" fontFamily="Poppins">
        No settings found, create default settings?
      </Typography>
      <Form method="POST">
        <Button startIcon={ <Add /> } variant="outlined" type="submit">
          Create Default Settings
        </Button>
      </Form>
      
    </Stack>
  );
}

export default NewSettings;

export const DEFAULT_SETTINGS_ADD: DataSettingsToAdd = {
  userId: USER_ID,
  addAnotherAfterSubmit: false,
  defaultAccountIdToAdd: "",
  showDashboardChart: true,
  dashboardCount: 20,
  dashboardChartType: "bar",
};