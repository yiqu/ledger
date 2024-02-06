import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import type { ExpenseComment } from "~/shared/models/comment.model";
import PersonIcon from '@mui/icons-material/Person';
import { blueGrey } from "@mui/material/colors";
import Typography from "@mui/material/Typography";
import Moment from "react-moment";
import { GREY_TEXT } from "~/theme/typography";

function ExpenseCommentDisplay({ comment }: { comment: ExpenseComment }) {

  return (
    <Stack direction="row" justifyContent="start" alignItems="start" spacing={ 2 }>
      <Avatar sx={ { bgcolor: blueGrey[300] } }>
        <PersonIcon />
      </Avatar>
      <Stack direction="column" justifyContent="start" alignItems="start" spacing={ 0.5 }>
        <Stack direction="row" justifyContent="start" alignItems="center" spacing={ 0.5 }>
          <Typography variant="body1" fontWeight={ 500 }>
            @kq
          </Typography>
          <Typography variant="body1">
            &#x2022;
          </Typography>
          <Moment fromNow date={ comment.dateAdded } style={ { color: GREY_TEXT, fontSize: '12px' } } />
          <Moment format="(MM/DD/yyyy h:mm a)" date={ comment.dateAdded } style={ { color: GREY_TEXT, fontSize: '12px' } } />
        </Stack>
        <Typography variant="body1">
          { comment.comment }
        </Typography>
      </Stack>
    </Stack>
  );
}

export default ExpenseCommentDisplay;