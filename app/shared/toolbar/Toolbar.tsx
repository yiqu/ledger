import type { AppBarProps } from "@mui/material/AppBar";
import AppBar from "@mui/material/AppBar";
import Toolbar from '@mui/material/Toolbar';
import { GREY } from "~/theme/palette";

interface ToolbarProps {
  toolbarProps: AppBarProps;
  children: any;
}

export default function AppToolbar({ toolbarProps, children }: ToolbarProps) {

  return (
    <AppBar elevation={ 0 } { ...toolbarProps }>
      <Toolbar
        variant="dense"
        sx={ {
          bgcolor: (theme) => theme.palette.mode === 'light' ? GREY[50] : null,
          color: (theme) => theme.palette.mode === 'light' ? '#000' : null,
          pr: 0
        } }>
        { children }
      </Toolbar>
    </AppBar>
  );
}