import type { Palette } from "@mui/material/styles";
import type { TypographyOptions } from "@mui/material/styles/createTypography";

export const MyTypography: TypographyOptions | ((palette: Palette) => TypographyOptions) | undefined = {
  fontFamily: 'G Sans, Roboto',
  subtitle1: {
    fontWeight: "normal",
    fontSize: '14px',
    color: '#5e5e5e'
  },
  subtitle2: {
    fontWeight: "normal",
    fontSize: '12px',
    color: '#5e5e5e'
  },
  body1: {
    fontSize: '14px',
    color: '#222'
  },
  body2: {
    fontSize: '14px',
    color: '#222'
  },
  h1: {
    color: '#1f1f1f'
  },
  h2: {
    color: '#1f1f1f'
  },
  h3: {
    color: '#1f1f1f'
  },
  h4: {
    fontSize: '20px',
    color: '#1f1f1f'
  },
  h5: {
    fontSize: '18px',
    color: '#1f1f1f'
  },
  h6: {
    fontSize: '16px',
    color: '#1f1f1f'
  }
};

export const ELLIPIS_STYLE = {
  whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'
};