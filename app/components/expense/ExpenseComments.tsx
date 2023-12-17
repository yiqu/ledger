import Typography from "@mui/material/Typography";
import type { ExpenseComment as ExpenseCommentType } from "~/shared/models/comment.model";
import ExpenseCommentDisplay from "./ExpenseComment";
import Stack from "@mui/material/Stack";

interface ExpenseCommentsProps {
  comments?: ExpenseCommentType[];
}

function ExpenseComments({ comments }: ExpenseCommentsProps) {
  if (!comments || comments.length === 0) {
    return (
      <Typography variant="body1" component="div" sx={ { flexGrow: 1 } }>
        No comments.
      </Typography>
    );
  }

  return (
    <Stack direction="column" justifyContent="start" alignItems="start" spacing={ 2 }>
      {
        comments.map((comment: ExpenseCommentType) => {
          return (
            // <ExpenseCommentDisplay comment={ comment } key={ comment.id } />
            <div key={ comment.id }>
              { comment.comment }
            </div>
          );
        })
      }
    </Stack>
  );
}

export default ExpenseComments;