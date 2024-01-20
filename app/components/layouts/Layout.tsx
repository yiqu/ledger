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
import LeftNavHeader from '../left-nav/LeftNavHeader';
import TopNav from '../top-nav/TopNav';
import LeftNav from '../left-nav/LeftNav';
import { useLoaderData } from "@remix-run/react";
import { useFetcher } from "@remix-run/react";
import type { loader } from '~/root';
import CustomToaster from '~/shared/components/CustomToaster';


function Layout({ child }: { child: React.ReactNode }) {
  const themeContext = useContext(ThemeContext);
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

          <Divider />

          <LeftNav open={ leftNavOpen } />

        </Drawer>

        <Box component="main" sx={ { flexGrow: 1, bgcolor: (theme) => theme.palette.mode === 'light' ? GREY[100] : null } }>
          <DrawerHeader />

          <Grid container sx={ { bgcolor: (theme) => theme.palette.mode === 'light' ? GREY[100] : null } } pb={ 5 }>

            { child }

          </Grid>

        </Box>
        <CustomToaster />
      </Box>
    </ThemeProvider>

  );
}

export default Layout;