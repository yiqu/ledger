import Paper from "@mui/material/Paper";
import type { ReactNode } from "react";

function ContentPaperWrap({ children }: { children: ReactNode }) {

  return (
    <Paper sx={ { width: '100%', p: 2, borderRadius: '20px' } } elevation={ 0 }>
      { children }
    </Paper>
  );
}

export default ContentPaperWrap;