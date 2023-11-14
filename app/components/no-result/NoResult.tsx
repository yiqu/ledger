import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { useSearchParams } from "@remix-run/react";
import noresultlogo from '../../../public/images/emptybox.png';
import noresultquerylogo from '../../../public/images/no-results.png';

function NoResult() {

  const [searchParams, setSearchParams] = useSearchParams();
  const searchParam: string | null = searchParams.get('q');

  const notFoundText = searchParam ? `No result found with the query: '${ searchParam }'` : 'No result found';

  return (
    <Stack direction="column" justifyContent="start" alignItems="center" width="100%" spacing={ 3 }>

      <Typography component="img" src={ searchParam ? noresultquerylogo : noresultlogo } sx={ { height: '5rem' } } alt="logo"></Typography>

      <Typography variant="h4" fontFamily="Poppins">
        { notFoundText }.
      </Typography>
    </Stack>
  );
}

export default NoResult;