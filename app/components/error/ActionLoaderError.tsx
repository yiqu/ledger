import Stack from "@mui/material/Stack";
import Alert from "@mui/material/Alert";
import Typography from "@mui/material/Typography";
import type { ErrorResponse } from "@remix-run/react";
import { Link } from "@remix-run/react";
//import type { ErrorResponse } from "~/shared/models/http.model";

function ActionLoaderErrorDisplay({ error, backToUrl = "/" }: {error: ErrorResponse, backToUrl?: string}) {

  return (
    <Stack direction="column" justifyContent="center" alignItems="center" width="100%" spacing={ 3 }>
      <Alert severity="error">
        <Typography variant="h5" fontFamily="Poppins">
          Status: { error.status } - { error.statusText }
        </Typography>
      </Alert>
      <Typography> 
        Error occurred!
      </Typography>
      <Typography>
        { error.data.message }
      </Typography>
      <Link to={ `${backToUrl}` }>Back to safely</Link>
    </Stack>
  );
}

export default ActionLoaderErrorDisplay;