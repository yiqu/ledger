import Grid from '@mui/material/Unstable_Grid2';
import type { ReactNode } from 'react';

export interface LayoutGutterProps {
  children: ReactNode;
  size?: "full" | "wide" | "med" | "skinny" // 12, 10, 7, 4
}

function LayoutWithGutter({ size = "med", children }: LayoutGutterProps) {

  return (
    <Grid container spacing={ 0 } 
      xs={ 12 } 
      xsOffset={ 0 } 
      sm={ size === 'full' ? 12 : (size === 'wide' ? (10) : (size === "med" ? 7 : (4))) } 
      smOffset={ size==='full' ? 0 : (size === 'wide' ? (1) : (size === "med" ? 2.5 : (4))) }
    >
      { children }
    </Grid>
  );
}

export default LayoutWithGutter;