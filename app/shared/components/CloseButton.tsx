import Close from "@mui/icons-material/Close";
import type { ButtonProps } from "@mui/material/Button";
import Button from "@mui/material/Button";

function ButtonClose({ ...props }: ButtonProps) {
  return (
    <Button type="button" startIcon={ <Close fontSize="small" /> } { ...props } disableRipple disableFocusRipple>
      Close
    </Button>
  );
}

export default ButtonClose;