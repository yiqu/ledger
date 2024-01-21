import type { PaperProps } from "@mui/material/Paper";
import Paper from "@mui/material/Paper";
import omit from "lodash/omit";
import type { ReactNode } from "react";

function ContentPaperWrap({ children, paperProps }: { children: ReactNode; paperProps?: PaperProps }) {

  return (
    <Paper sx={ { width: '100%', p: 2, borderRadius: '20px', ...paperProps?.sx } } elevation={ 0 } { ...omit(paperProps, ['sx']) }>
      { children }
    </Paper>
  );
}

export default ContentPaperWrap;