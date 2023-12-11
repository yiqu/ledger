import React, { useContext } from "react";
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { AppBar } from '~/components/layouts/LayoutComponents';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useLocation } from "react-router-dom";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Stack from "@mui/material/Stack";
import startCase from 'lodash/startCase';
import { TransformPageTitle } from "~/shared/utils/constants";
import ThemeContext from "~/theme/ThemeContext";

export interface TopNavProps {
  open: boolean;
  onNavOpen: (openState: boolean) => void;
}

export default function TopNav({ open, onNavOpen }: TopNavProps) {
  const location = useLocation();
  const themeContext = useContext(ThemeContext);
  const title = location.pathname.split("/")[1];

  const handleDrawerOpen = () => {
    onNavOpen(true);
  };

  const toggleThemeHandler = () => {
    const themeToSet = themeContext.currentTheme === 'light' ? 'dark' : 'light';
    themeContext.setTheme(themeToSet);
  };

  return (
    <React.Fragment>
      <AppBar position="fixed" open={ open } elevation={ 1 }>
        <Toolbar>
          <Stack direction="row" justifyContent="space-between" alignItems="center" width="100%">
            <Stack direction="row" justifyContent="start" alignItems="center">
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={ handleDrawerOpen }
                edge="start"
                sx={ {
                  marginRight: 5,
                  ...(open && { display: 'none' }),
                } }
              >
                <MenuIcon />
              </IconButton>
              <Link to={ `/${location.pathname.split("/")[1]}` }>
                <Typography variant="h5" noWrap sx={ { fontWeight: 400, fontFamily: 'Poppins', color: "#fff" } }>
                  { startCase(TransformPageTitle[`${title}`]) }
                </Typography>
              </Link>
            </Stack>

            <IconButton sx={ { ml: 1 } } color="inherit" onClick={ toggleThemeHandler } title={ `Turn ${themeContext.currentTheme === 'light' ? 'off' : 'on'} the lights` }>
              { themeContext.currentTheme ? <Brightness7Icon /> : <Brightness4Icon /> }
            </IconButton>

          </Stack>
        </Toolbar>

        {/* Nested Action bar that is sticky under main top nav */ }
        {/* <AppBar position="sticky" elevation={ 0 }>
          <Toolbar variant="dense" sx={ {bgcolor: '#fff', color: '#000'} }>
            <Button color="inherit" variant="text">
              <RefreshIcon sx={ {mr: '10px'} } />
              Refresh
            </Button>
          </Toolbar>
        </AppBar> */}

      </AppBar>
    </React.Fragment>
  );
}
