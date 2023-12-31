import React from 'react';
import { useContext, useMemo } from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import { Drawer, DrawerHeader } from './LayoutComponents';
import type { Theme } from '@mui/material/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { getMyTheme } from '~/theme/AppTheme';
import ThemeContext from '~/theme/ThemeContext';
import Grid from '@mui/material/Unstable_Grid2';
import { GREY } from '~/theme/palette';
import { Toaster } from 'react-hot-toast';
import LeftNavHeader from '../left-nav/LeftNavHeader';
import TopNav from '../top-nav/TopNav';
import LeftNav from '../left-nav/LeftNav';
import LinearProgress from "@mui/material/LinearProgress";
import { useNavigationType } from '~/shared/hooks/useNavigationType';
import { useLoaderData } from "@remix-run/react";
import { useFetcher } from "@remix-run/react";
import type { loader } from '~/root';


function Layout({ child }: { child: React.ReactNode }) {
  const themeContext = useContext(ThemeContext);
  const { isNormalLoad, isActionReload, isActionRedirect, isReloading, isActionSubmission, isLoaderSubmission, isLoaderSubmissionRedirect } = useNavigationType();
  const showProgress = isNormalLoad || isActionSubmission || isLoaderSubmission || isLoaderSubmissionRedirect || isReloading || isActionReload || isActionRedirect;
  const theme: Theme = useMemo(() => {
    return createTheme(getMyTheme(themeContext.currentTheme));
  }, [themeContext.currentTheme]);
  const fetcher = useFetcher();
  const { leftNavOpen } = useLoaderData<typeof loader>();

  const handleDrawerOpen = (openState: boolean) => {
    fetcher.submit({ leftNavOpen: 'true' }, { preventScrollReset: true, method: 'post' });
  };

  const handleDrawerClose = (openState: boolean) => {
    fetcher.submit({ leftNavOpen: 'false' }, { preventScrollReset: true, method: 'post' });
  };

  return (
    <ThemeProvider theme={ theme }>
      <Box sx={ { display: 'flex', height: '100%' } }>
        <CssBaseline />

        <TopNav open={ leftNavOpen } onNavOpen={ handleDrawerOpen } />

        <Drawer variant="permanent" open={ leftNavOpen }>

          <LeftNavHeader closeDrawerHandler={ handleDrawerClose } />

          <Box width="100%" height="4px" marginTop="-4px">
            { showProgress && <LinearProgress color="info" /> }
          </Box>

          <Divider />

          <LeftNav open={ leftNavOpen } />

        </Drawer>

        <Box component="main" sx={ { flexGrow: 1, bgcolor: (theme) => theme.palette.mode === 'light' ? GREY[100] : null } }>
          <DrawerHeader />

          <Grid container sx={ { bgcolor: (theme) => theme.palette.mode === 'light' ? GREY[100] : null } } pb={ 5 }>

            { child }

          </Grid>

        </Box>
        <Toaster
          position="top-center"
          containerClassName="app-toast-container"
          containerStyle={ {} }
          toastOptions={ {
            className: 'app-toast',
            duration: 5000,
            success: {
              duration: 8000,
            },
            error: {
              duration: 10000
            }
          } }
        />
        {/* <Tooltip id="tooltip" variant='dark' style={ { zIndex: 1300 } } /> */ }
      </Box>
    </ThemeProvider>

  );
}

export default Layout;