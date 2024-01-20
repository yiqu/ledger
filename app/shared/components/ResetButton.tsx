import RestartAlt from '@mui/icons-material/RestartAlt';
import type { ButtonProps } from "@mui/material/Button";
import Button from "@mui/material/Button";

function ButtonReset({ ...props }: ButtonProps) {
  return (
    <Button type="button" startIcon={ <RestartAlt fontSize="small" /> } { ...props } disableRipple disableFocusRipple>
      { props.children ? props.children : 'Reset' }
    </Button>
  );
}

export default ButtonReset;