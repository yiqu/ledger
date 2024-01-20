import Close from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import type { DialogProps } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";

export interface DialogLayoutProps {
  id?: string;
  open: boolean;
  title: React.ReactNode;
  maxWidth?: DialogProps['maxWidth'];
  onClose: (payload?: any) => void;
  children: React.ReactNode
}

function DialogLayout({ id, open, title, maxWidth = "lg", onClose, children }: DialogLayoutProps) {

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
      id={ id ?? 'app-dialog' }
    >
      <DialogTitle sx={ { backgroundColor: 'primary.main', color: 'white', py: '10px' } }>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Typography variant="h5">
            { title }
          </Typography>
          <IconButton aria-label="delete" sx={ { color: 'white' } } onClick={ handleClose }>
            <Close />
          </IconButton>
        </Stack>
      </DialogTitle>

      { children }
    </Dialog>
  );
}


export default DialogLayout;