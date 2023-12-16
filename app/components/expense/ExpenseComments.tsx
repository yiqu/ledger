import Typography from "@mui/material/Typography";
import type { ExpenseComment } from "~/shared/models/comment.model";

interface ExpenseCommentsProps {
  comments?: ExpenseComment[];
}

function ExpenseComments({ comments }: ExpenseCommentsProps) {

  if (!comments || comments.length === 0) {
    return (
      <Typography variant="body1" component="div" sx={ { flexGrow: 1 } }>
        No comments yet
      </Typography>
    );
  }

  return (
    <div>
      Comments here
    </div>
  );

}

export default ExpenseComments;