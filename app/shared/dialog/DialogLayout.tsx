import Close from "@mui/icons-material/Close";
import type { DialogProps } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";

export interface DialogLayoutProps {
  open: boolean;
  title: React.ReactNode;
  maxWidth?: DialogProps['maxWidth'];
  onClose: (payload?: any) => void;
  children: React.ReactNode
}

function DialogLayout({ open, title, maxWidth="lg", onClose, children }: DialogLayoutProps) {

  const handleClose = () => {
    onClose();
  };


  return (
    <Dialog
      fullWidth={ true }
      maxWidth={ maxWidth }
      open={ open }
      onClose={ handleClose }
      transitionDuration={ 0 }
    >
      <DialogTitle>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          { title}
          <IconButton aria-label="delete" color="primary" onClick={ handleClose }>
            <Close />
          </IconButton>
        </Stack>
      </DialogTitle>
       
      { children }
    </Dialog>
  );
}


export default DialogLayout;