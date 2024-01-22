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
import bgNoise from '../../../public/images/bg-noise2.png';

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
      <Box sx={ { display: 'flex', height: '100%' } } id="content">
        <CssBaseline />

        <TopNav open={ leftNavOpen } onNavOpen={ handleDrawerOpen } />

        <Drawer variant="permanent" open={ leftNavOpen }>

          <LeftNavHeader closeDrawerHandler={ handleDrawerClose } />

          <Divider />

          <LeftNav open={ leftNavOpen } />

        </Drawer>

        <Box
          id="main-content"
          component="main"
          sx={ {
            flexGrow: 1,
            bgcolor: (theme) => theme.palette.mode === 'light' ? GREY[100] : null,
            backgroundImage: `url(${bgNoise})`
          } }
        >
          <DrawerHeader id="main-content-header" />

          <Grid
            container
            id="main-content-parent-grid"
            sx={ {
              bgcolor: (theme) => theme.palette.mode === 'light' ? GREY[100] : null,
              backgroundImage: `url(${bgNoise})`
            } }
            pb={ 2 }
          >

            { child }

          </Grid>

        </Box>
        <CustomToaster />
      </Box>
    </ThemeProvider>

  );
}

export default Layout;