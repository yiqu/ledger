import type { PaletteOptions } from "@mui/material/styles";

/**
 * Usage.
 * 
 * Any MUI components' sx={{color : xx}}
 * xx can be stated as primary.main, text.primary, etc
 */
export const MyPaletteOptions: PaletteOptions = {
  primary: {
    main: '#092250', // Color primary, dark blue
  },
  text: {
    primary: '#202124', // also the body default color
    secondary: '#222',
    disabled: '#5e5e5e'
  }
};

export const GREY = {
  0: '#FFFFFF',
  50: '#f2f2f2',
  100: '#f5f5f5',
  200: '#F4F6F8',
  300: '#DFE3E8',
  400: '#C4CDD5',
  500: '#919EAB',
  600: '#637381',
  700: '#454F5B',
  800: '#212B36',
  900: '#161C24',
};
