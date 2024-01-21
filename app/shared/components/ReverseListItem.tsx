import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import type { ReactNode } from "react";

function ReverseListItem({ primaryText, secondaryText }: { primaryText: ReactNode, secondaryText: ReactNode }) {

  return (
    <ListItem disableGutters>
      <ListItemText primary={ primaryText } secondary={ secondaryText }
        primaryTypographyProps={ { color: 'GrayText' } }
        secondaryTypographyProps={ { color: '#000000de', variant: 'body1' } } />
    </ListItem>
  );
}

export default ReverseListItem;