import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import type { MetaFunction } from "@remix-run/node";
import useScreenSize from "~/shared/hooks/useIsMobile";
import LayoutWithGutter from "~/shared/layouts/LayoutWithGutter";
import dollarLogo from '../../public/images/dollar.png';
import logologo from '../../public/images/logo.png';
import moneylogo from '../../public/images/money.png';
import Icon from "@mui/material/Icon";
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import AccountBalanceIconOutlined from '@mui/icons-material/AccountBalanceOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import { Link } from "@remix-run/react";
import TitleBarLayout from "~/components/title/TitleBarLayout";
import InfoIcon from '@mui/icons-material/Info';
import { TitleNameDisplay } from "~/shared/components/Title";

export const meta: MetaFunction = (data) => {
  return [
    { title: "About | Ledger" },
    { name: "description", content: "What is Ledger" },
  ];
};

function About() {
  const { isMobile } = useScreenSize();

  return (
    <Stack direction="column" width="100%">

      <Box mt={ 2 } mx={ isMobile ? 2 : 0 }>
        <LayoutWithGutter size={ 'wide' }>

          <Stack direction="column" justifyContent="start" alignItems="center" width="100%" spacing={ 3 }>

            <TitleBarLayout>
              <Stack direction="row" justifyContent="start" alignItems="center" spacing={ 2 }>
                <InfoIcon />
                <TitleNameDisplay name={ 'About' } />
              </Stack>
            </TitleBarLayout>

            <Box p={ 3 } borderRadius="20px" width="100%">

              <Stack direction="row" justifyContent="start" alignItems="center" mb={ 2 }>
                <Typography variant="h5" mr={ 2 }>
                  What is Ledger?
                </Typography>
                <Typography component="img" src={ dollarLogo } sx={ { height: '2rem', mr: '10px' } } alt="logo"></Typography>
                <Typography component="img" src={ logologo } sx={ { height: '2rem', mr: '10px' } } alt="logo"></Typography>
                <Typography component="img" src={ moneylogo } sx={ { height: '2rem', mr: '10px' } } alt="logo"></Typography>
              </Stack>


              <Typography variant="body1" mb={ 2 }>
                Ledger is a simple web app that helps you to keep track of your expenses.
              </Typography>

            </Box>

            <Box p={ 3 } borderRadius="20px" width="100%" bgcolor="background.paper">
              <Stack direction="row" justifyContent="start" alignItems="start" mb={ 2 }>
                <Icon fontSize="small">
                  <AccountBalanceIconOutlined color='primary' fontSize="small" />
                </Icon>
                <Typography variant="h5" ml={ 1 }>
                  <Link to="/accounts">Accounts</Link>
                </Typography>
              </Stack>

              <Typography variant="body1" mb={ 2 }>
                Accounts holds the expenses of the user. Users can add their accounts to the ledger.
              </Typography>
            </Box>

            <Box p={ 3 } borderRadius="20px" width="100%" bgcolor="background.paper">
              <Stack direction="row" justifyContent="start" alignItems="start" mb={ 2 }>
                <Icon fontSize="small">
                  <FormatListBulletedOutlinedIcon color='primary' fontSize="medium" />
                </Icon>
                <Typography variant="h5" ml={ 1 }>
                  <Link to="/data">Expenses</Link>
                </Typography>
              </Stack>

              <Typography variant="body1" mb={ 2 }>
                Expenses are account's balances at a date of time. Users can add their expenses to a ledger. This will help them to keep track of their expenses.
              </Typography>
            </Box>

            <Box p={ 3 } borderRadius="20px" width="100%" bgcolor="background.paper">
              <Stack direction="row" justifyContent="start" alignItems="start" mb={ 2 }>
                <Icon fontSize="small">
                  <DashboardOutlinedIcon color='primary' fontSize="small" />
                </Icon>
                <Typography variant="h5" ml={ 1 }>
                  <Link to="/">Analysis</Link>
                </Typography>
              </Stack>

              <Typography variant="body1" mb={ 2 }>
                Dashboard will show the analysis of the user's expenses.
              </Typography>
            </Box>

          </Stack>

        </LayoutWithGutter>
      </Box>
    </Stack>
  );
}

export default About;