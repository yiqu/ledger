import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import type { ExpenseComment } from "~/shared/models/comment.model";
import PersonIcon from '@mui/icons-material/Person';
import { blueGrey, grey } from "@mui/material/colors";
import Typography from "@mui/material/Typography";
import Moment from "react-moment";

function ExpenseCommentDisplay({ comment }: { comment: ExpenseComment }) {

  return (
    <Stack direction="row" justifyContent="start" alignItems="start" spacing={ 2 }>
      <Avatar sx={ { bgcolor: blueGrey[300] } }>
        <PersonIcon />
      </Avatar>
      <Stack direction="column" justifyContent="start" alignItems="start" spacing={ 0.5 }>
        <Stack direction="row" justifyContent="start" alignItems="center" spacing={ 0.5 }>
          <Typography variant="body1" fontSize="12px" fontWeight={ 500 }>
            @kq
          </Typography>
          <Typography variant="body1" fontSize="12px">
            &#x2022;
          </Typography>
          <Moment fromNow date={ comment.dateAdded } style={ { fontWeight: 500, color: grey[600], fontSize: '12px' } } />
          <Moment format="(MM/DD/yyyy h:mm a)" date={ comment.dateAdded } style={ { fontWeight: 500, color: grey[600], fontSize: '12px' } } />
        </Stack>
        <Typography fontSize="14px" fontWeight={ 400 }>
          { comment.comment }
        </Typography>
      </Stack>
    </Stack>
  );
}

export default ExpenseCommentDisplay;