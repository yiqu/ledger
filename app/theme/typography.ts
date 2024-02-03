import type { Palette } from "@mui/material/styles";
import type { TypographyOptions } from "@mui/material/styles/createTypography";

export const APP_BODY_COLOR = "#202124";
export const APP_TEXT_COLOR = "#222";
export const APP_HEADER_COLOR = "#1f1f1f";
export const GREY_TEXT = "#5e5e5e";

declare module '@mui/material/styles' {
  interface TypographyVariants {
    body0: React.CSSProperties;
    subtitle0: React.CSSProperties;
  }
  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    body0?: React.CSSProperties;
    subtitle0?: React.CSSProperties;
  }
}
// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    body0: true;
    subtitle0: false;
  }
}

export const MyTypography: TypographyOptions | ((palette: Palette) => TypographyOptions) | undefined = {
  fontFamily: 'G Sans Text, Roboto',
  fontSize: 14,

  subtitle0: {
    fontWeight: "normal",
    fontSize: '10px',
    color: GREY_TEXT
  },

  subtitle1: {
    fontWeight: "normal",
    fontSize: '12px',
    color: GREY_TEXT
  },
  subtitle2: {
    fontWeight: "normal",
    fontSize: '14px',
    color: GREY_TEXT
  },

  body0: {
    fontSize: '12px',
    color: APP_TEXT_COLOR
  },

  body1: {
    fontSize: '14px',
    color: APP_TEXT_COLOR
  },
  body2: {
    fontSize: '16px',
    color: APP_TEXT_COLOR
  },

  caption: {
    fontSize: '12px',
    color: GREY_TEXT
  },

  h1: {
    fontFamily: 'G Sans Display, Roboto',
    fontSize: '28px',
    fontWeight: 500,
    color: APP_HEADER_COLOR
  },
  h2: {
    fontFamily: 'G Sans Display, Roboto',
    fontSize: '26px',
    fontWeight: 500,
    color: APP_HEADER_COLOR
  },
  h3: {
    fontFamily: 'G Sans Display, Roboto',
    fontSize: '22px',
    fontWeight: 500,
    color: APP_HEADER_COLOR
  },
  h4: {
    fontFamily: 'G Sans, Roboto',
    fontSize: '20px',
    color: APP_HEADER_COLOR
  },
  h5: {
    fontFamily: 'G Sans, Roboto',
    fontSize: '18px',
    color: APP_HEADER_COLOR
  },
  h6: {
    fontFamily: 'G Sans, Roboto',
    fontSize: '16px',
    color: APP_HEADER_COLOR
  }
};

export const ELLIPIS_STYLE = {
  whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'
};