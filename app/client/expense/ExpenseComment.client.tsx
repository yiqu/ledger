import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import PersonIcon from '@mui/icons-material/Person';
import { green } from "@mui/material/colors";

function ExpenseCommentClient() {

  return (
    <Stack direction="row" justifyContent="start" alignItems="center">
      <Avatar sx={ { bgcolor: green[500] } }>
        <PersonIcon />
      </Avatar>
    </Stack>
  );
}

export default ExpenseCommentClient;