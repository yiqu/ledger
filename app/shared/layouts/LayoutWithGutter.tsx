import Grid from '@mui/material/Unstable_Grid2';
import type { ReactNode } from 'react';

export interface LayoutGutterProps {
  children: ReactNode;
  size?: "full" | "wider" | "wide" | "large" | "med" | "skinny"
  //       12,      11        10,      9         7,      4
}

function LayoutWithGutter({ size = "med", children }: LayoutGutterProps) {

  return (
    <Grid
      container
      disableEqualOverflow={ size === 'full' }
      xs={ 12 }
      xsOffset={ 0 }
      sm={
        size === 'full' ? (12) :
          size === 'wider' ? (11) :
            (size === 'wide' ? (10) :
              (size === 'large' ? (9) :
                (size === "med" ? (7) :
                  (4)
                )
              )
            )
      }
      smOffset={
        size === 'full' ? (0) :
          (size === 'wider' ? (0.5) :
            (size === 'wide' ? (1) :
              (size === 'large' ? (1.5) :
                (size === "med" ? (2.5) :
                  (4)
                )
              )
            )
          )
      }
    >
      { children }
    </Grid>
  );
}

export default LayoutWithGutter;