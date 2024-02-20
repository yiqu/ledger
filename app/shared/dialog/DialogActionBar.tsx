import type { DialogActionsProps } from "@mui/material/DialogActions";
import DialogActions from "@mui/material/DialogActions";
import omit from "lodash/omit";

interface DialogActionBarProps {
  dialogActionsProps?: DialogActionsProps;
  children: React.ReactNode;
}

function DialogActionBar({ children, dialogActionsProps }: DialogActionBarProps) {

  return (
    <DialogActions
      { ...omit(dialogActionsProps, ['sx']) }
      sx={ { backgroundColor: 'primary.light', ...dialogActionsProps?.sx } }
    >
      { children }
    </DialogActions>
  );
}

export default DialogActionBar;