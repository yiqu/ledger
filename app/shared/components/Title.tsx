import Typography from "@mui/material/Typography";
import { ellipsisBlock } from "../utils/css.utils";

export function TitleNameDisplay({ name }: { name: string }) {
  return (
    <Typography style={ { ...ellipsisBlock } } variant='h5' fontFamily="Poppins"
      data-tooltip-id="tooltip" data-tooltip-content={ `${name}` }>
      {name}
    </Typography>
  );
}