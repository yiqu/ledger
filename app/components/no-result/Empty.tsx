import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import noresultlogo from '../../../public/images/emptybox.png';
import { Link, useLocation } from "@remix-run/react";

function Empty({ type }: { type: 'account' | 'expense' }) {

  const { pathname, search } = useLocation();

  return (
    <Stack direction="column" justifyContent="start" alignItems="center" width="100%" spacing={ 3 }>

      <Typography component="img" src={ noresultlogo } sx={ { height: '5rem' } } alt="logo"></Typography>

      <Typography variant="h4" fontFamily="Poppins">
        No { type }s found.
      </Typography>

      <Typography variant="body1" fontFamily="Poppins">
        <Link to={ `/add?type=${type}&redirectUrl=${pathname}${search}` }>
          Add a new { type } to get started.
        </Link>
      </Typography>

    </Stack>
  );
}

export default Empty;