import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

function SkeletonBar() {

  return (
    <Stack width="100%">
      <Skeleton variant="text" sx={ { fontSize: '3rem' } } />
    </Stack>
  );
}

export default SkeletonBar;