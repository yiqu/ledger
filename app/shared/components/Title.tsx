import Typography from "@mui/material/Typography";
import { ellipsisBlock } from "../utils/css.utils";

export function TitleNameDisplay({ name }: { name: string }) {
  return (
    <Typography style={ { ...ellipsisBlock } } variant='h6' fontWeight={ 400 }
      title={ `${name}` }>
      { name }
    </Typography>
  );
}