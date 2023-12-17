import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

function ExpenseCommentsSkeleton() {

  return (
    <Stack direction="column" justifyContent="start" alignItems="center" width="100%" spacing={ 2 }>
      <Stack direction="row" justifyContent="start" alignItems="center" width="100%" spacing={ 2 }>
        <Skeleton variant="circular" width={ 44 } height={ 40 } />
        <Skeleton variant="rounded" width="100%" height={ 30 } />
      </Stack>

      <Stack direction="row" justifyContent="start" alignItems="center" width="100%" spacing={ 2 }>
        <Skeleton variant="circular" width={ 44 } height={ 40 } />
        <Skeleton variant="rounded" width="100%" height={ 30 } />
      </Stack>
    </Stack>
  );
}

export default ExpenseCommentsSkeleton;