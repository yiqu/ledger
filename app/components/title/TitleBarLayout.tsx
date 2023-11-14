import type { ReactNode } from "react";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";

function TitleBarLayout({ children }: { children: ReactNode }) {
  return (
    <Paper sx={ {width: '100%', p: 2} } elevation={ 1 }>
      <Stack direction="row" justifyContent="space-between" alignItems="center" width="100%">
        {
          children
        }
      </Stack>
    </Paper>
  );
}

export default TitleBarLayout;