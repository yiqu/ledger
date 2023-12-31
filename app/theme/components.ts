import type { Components, Theme } from "@mui/material/styles";

export const MyComponents: Components<Omit<Theme, "components">> | undefined = {
  MuiButton: {
    defaultProps: {
      disableElevation: true
    },
    styleOverrides: {
      root: {
        textTransform: 'none'
      }
    }
  },
  MuiListItemButton: {
    defaultProps: {
      disableRipple: true
    }
  },
  MuiListItemText: {
    styleOverrides: {
      primary: {
      }
    },
    defaultProps: {
      primaryTypographyProps: {
        style: {
          whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'
        }
      },
      secondaryTypographyProps: {
        style: {
          whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'
        }
      }
    }
  },
  MuiFormHelperText: {
    styleOverrides: {
      root: {
        color: '#888'
      }
    }
  },
  MuiAutocomplete: {
    defaultProps: {
      size: 'small'
    }
  },
  MuiTextField: {
    defaultProps: {
      size: 'small'
    }
  },
  MuiInput: {
    defaultProps: {
      spellCheck: false
    }
  }
};