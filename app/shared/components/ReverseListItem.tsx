import type { ListItemProps } from "@mui/material/ListItem";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import type { ReactNode } from "react";

function ReverseListItem({ primaryText, secondaryText, listItemProps }: { primaryText: ReactNode; secondaryText: ReactNode; listItemProps?: ListItemProps }) {

  return (
    <ListItem disableGutters { ...listItemProps }>
      <ListItemText primary={ primaryText } secondary={ secondaryText }
        primaryTypographyProps={ { color: 'text.disabled' } }
        secondaryTypographyProps={ { color: 'text.primary ', variant: 'body1' } } />
    </ListItem>
  );
}

export default ReverseListItem;