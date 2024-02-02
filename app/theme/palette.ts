import type { PaletteOptions } from "@mui/material/styles";
import { APP_BODY_COLOR, APP_TEXT_COLOR, GREY_TEXT } from "./typography";

/**
 * Usage.
 * 
 * Any MUI components' sx={{color : xx}}
 * xx can be stated as primary.main, text.primary, etc
 */
export const MyPaletteOptions: PaletteOptions = {
  primary: {
    main: '#092250',  // Color primary, dark blue
    light: '#0E357E'
  },
  secondary: {
    main: '#e79d18',
    light: '#ECB146'
  },
  text: {
    primary: APP_TEXT_COLOR, // also the body default color
    secondary: APP_BODY_COLOR,
    disabled: GREY_TEXT
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
