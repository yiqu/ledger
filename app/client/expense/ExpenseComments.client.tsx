import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import type { ExpenseComment } from "~/shared/models/comment.model";

interface ExpenseCommentsProps {
  comments?: ExpenseComment[];
}

function ExpenseCommentsClient({ comments }: ExpenseCommentsProps) {
  if (!comments || comments.length === 0) {
    return (
      <Typography variant="body1" component="div" sx={ { flexGrow: 1 } }>
        No comments.
      </Typography>
    );
  }

  return (
    <Stack direction="column" justifyContent="start" alignItems="start">
      {
        comments.map((comment: ExpenseComment) => {
          return (
            <div key={ comment.id }>{ comment.comment }</div>
          );
        })
      }
    </Stack>
  );

}

export default ExpenseCommentsClient;