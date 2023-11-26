import Stack from "@mui/material/Stack";
import Alert from "@mui/material/Alert";
import Typography from "@mui/material/Typography";

function OtherErrorDisplay({ error }: { error: any }) {
  return (
    <Stack direction="column" justifyContent="center" alignItems="center" width="100%" spacing={ 3 }>
      <Alert severity="error">
        <Typography variant="h5" fontFamily="Poppins">
          Oops! Something went wrong!
        </Typography>
      </Alert>
      <Typography>
        Error occurred!
      </Typography>
      <Typography>
        { error.message }
      </Typography>
    </Stack>
  );
}

export default OtherErrorDisplay;