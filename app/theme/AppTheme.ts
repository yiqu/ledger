import type { PaletteMode, ThemeOptions } from '@mui/material';
import { MyComponents } from './components';
import { MyPaletteOptions } from './palette';
import { MyTypography } from './typography';

export const getMyTheme = (mode: PaletteMode): ThemeOptions => {
  return {
    typography: MyTypography,
    palette: {
      mode,
      ...(
        mode === 'light' ? { ...MyPaletteOptions } : {}
      )
    },
    components: {
      ...MyComponents,
      ...(
        mode === 'light' ? {} : {}
      ),
    },
  };
};
