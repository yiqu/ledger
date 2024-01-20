import SaveIcon from '@mui/icons-material/Save';
import type { ButtonProps } from "@mui/material/Button";
import Button from "@mui/material/Button";

function ButtonSubmit({ ...props }: ButtonProps) {
  return (
    <Button type="button" startIcon={ <SaveIcon fontSize="small" /> } { ...props } variant='outlined' disableRipple disableFocusRipple>
      { props.children ? props.children : 'Submit' }
    </Button>
  );
}

export default ButtonSubmit;