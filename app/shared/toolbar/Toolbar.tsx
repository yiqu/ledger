import type { AppBarProps } from "@mui/material/AppBar";
import AppBar from "@mui/material/AppBar";
import Toolbar from '@mui/material/Toolbar';

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
          color: (theme) => theme.palette.mode === 'light' ? '#000' : null,
          pr: 0
        } }>
        { children }
      </Toolbar>
    </AppBar>
  );
}