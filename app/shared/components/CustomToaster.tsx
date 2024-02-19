import Close from '@mui/icons-material/Close';
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import { toast, Toaster, ToastBar } from 'react-hot-toast';

function CustomToaster() {
  return (
    <Toaster
      position="top-center"
      containerClassName="app-toast-container"
      toastOptions={ {
        className: 'app-toast',
        duration: 5000,
        success: {
          duration: 5000,
        },
        error: {
          duration: 9000
        },
        style: {
          maxWidth: '25rem',
        }
      } }
    >
      { (t) => (
        <ToastBar toast={ t }>
          { ({ icon, message }) => (
            <Stack direction="row" justifyContent="space-between" alignItems="center" width="100%">
              <Stack direction="row" justifyContent="start" alignItems="center">
                { icon }
                { message }
              </Stack>
              { t.type !== 'loading' && (
                <IconButton size='small' onClick={ () => toast.remove(t.id) }>
                  <Close fontSize='small' />
                </IconButton>
              ) }
            </Stack>
          ) }
        </ToastBar>
      ) }
    </Toaster>
  );
}

export default CustomToaster;