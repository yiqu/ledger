import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import type { MetaFunction } from "@remix-run/react";
import { Link } from "@remix-run/react";
import useScreenSize from "~/shared/hooks/useIsMobile";
import LayoutWithGutter from "~/shared/layouts/LayoutWithGutter";
import notfoundlogo from '../../public/images/no-money.png';

export const meta: MetaFunction = (data) => {
  return [
    { title: "404 Not Found - Ledger" },
    { name: "description", content: "Page not found." },
  ];
};

function NotFound404() {
  const { isMobile } = useScreenSize();

  return (
    <Stack direction="column" width="100%">
      <Box mt={ 2 } mx={ isMobile ? 2 : 0 }>
        <LayoutWithGutter size={ 'wide' }>
          <Stack direction="column" width="100%" justifyContent="center" alignItems="center" spacing={ 3 }>

            <Typography variant="h3">
              404
            </Typography>
            <Typography variant="h4">
              Page not found.
            </Typography>

            <Typography component="img" src={ notfoundlogo } sx={ { height: '8rem' } } alt="logo"></Typography>

            <Link to="/">Go Home</Link>
          </Stack>

        </LayoutWithGutter>
      </Box>


    </Stack>
  );
}

export default NotFound404;