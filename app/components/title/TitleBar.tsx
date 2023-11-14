import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { TitleNameDisplay } from "~/shared/components/Title";

function TitleBar({ title }: { title: string }) {
  return (
    <Paper sx={ {width: '100%', p: 2} } elevation={ 1 }>
      <Stack direction="row" justifyContent="space-between" alignItems="center" width="100%">
        <TitleNameDisplay name={ title } />
      </Stack>
    </Paper>
  );
}

export default TitleBar;