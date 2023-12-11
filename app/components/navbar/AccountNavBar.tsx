import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Grid from '@mui/material/Unstable_Grid2';
import SettingsIcon from '@mui/icons-material/Settings';
import Add from "@mui/icons-material/Add";
import Edit from "@mui/icons-material/Edit";
import Divider from "@mui/material/Divider";
import Delete from "@mui/icons-material/Delete";
import { useLocation, useParams } from "@remix-run/react";


export interface AccountNavBarProps {
  accountId?: string;
  onClickAction: (actionId: string) => void;
}

function AccountNavBar({ accountId, onClickAction }: AccountNavBarProps) {
  const params = useParams();
  const { pathname } = useLocation();
  const routePath: string = pathname.split('/')[1];

  const handleNavActionClick = (actionId: string) => () => {
    onClickAction(actionId);
  };

  if (params.expenseId) {
    return (
      <Grid container xs={ 12 }>
        <Grid xs={ 4 }>
          <Stack direction="row" justifyContent="start" alignItems="center" width="100%" spacing={ 1 }>
            <Button variant="text" startIcon={ <Edit /> } onClick={ handleNavActionClick('editExpense') } >
              Edit
            </Button>
            <Divider orientation="vertical" variant="middle" flexItem />
            <Button variant="text" startIcon={ <Delete /> } onClick={ handleNavActionClick('deleteExpense') } >
              Delete
            </Button>
          </Stack>
        </Grid>
        <Grid xs={ 8 } xsOffset="auto" display="flex">
          <Stack direction="row" justifyContent="end" alignItems="center" width="100%" spacing={ 2 } data-tooltip-id="fetch-information">
            <Button variant="text" startIcon={ <SettingsIcon /> } onClick={ handleNavActionClick('settings') }>
              Settings
            </Button>
          </Stack>
        </Grid>
      </Grid>
    );
  }

  if (accountId) {
    return (
      <Grid container xs={ 12 }>
        <Grid xs={ 12 }>
          <Stack direction="row" justifyContent="start" alignItems="center" width="100%" spacing={ 1 }>
            <Button variant="text" startIcon={ <Add /> } onClick={ handleNavActionClick('newExpense') } >
              Expense
            </Button>
            <Divider orientation="vertical" variant="middle" flexItem />
            <Button variant="text" startIcon={ <Edit /> } onClick={ handleNavActionClick('editAccount') } >
              Edit Account
            </Button>
            <Divider orientation="vertical" variant="middle" flexItem />
            <Button variant="text" startIcon={ <Delete /> } onClick={ handleNavActionClick('deleteAccount') } >
              Delete Account
            </Button>
          </Stack>
        </Grid>
      </Grid>
    );
  }

  if (pathname === '/') {
    return (
      <Grid container xs={ 12 }>
        <Grid xs={ 4 }>
          <Stack direction="row" justifyContent="start" alignItems="center" width="100%" spacing={ 1 }>
            <Button variant="text" startIcon={ <Add /> } onClick={ handleNavActionClick('newExpense') } >
              Expense
            </Button>
          </Stack>
        </Grid>
        <Grid xs={ 8 } xsOffset="auto" display="flex">
          <Stack direction="row" justifyContent="end" alignItems="center" width="100%" spacing={ 2 } data-tooltip-id="fetch-information">
            <Button variant="text" startIcon={ <SettingsIcon /> } onClick={ handleNavActionClick('settings') }>
              Settings
            </Button>
          </Stack>
        </Grid>
      </Grid>
    );
  }

  if (routePath === 'accounts') {
    return (
      <Grid container xs={ 12 }>
        <Grid xs={ 4 }>
          <Stack direction="row" justifyContent="start" alignItems="center" width="100%" spacing={ 1 }>
            <Button variant="text" startIcon={ <Add /> } onClick={ handleNavActionClick('addAccount') } >
              Account
            </Button>
            <Divider orientation="vertical" variant="middle" flexItem />
            <Button variant="text" startIcon={ <Add /> } onClick={ handleNavActionClick('newExpense') } >
              Expense
            </Button>
          </Stack>
        </Grid>
        <Grid xs={ 8 } xsOffset="auto" display="flex">
          <Stack direction="row" justifyContent="end" alignItems="center" width="100%" spacing={ 2 } data-tooltip-id="fetch-information">
            <Button variant="text" startIcon={ <SettingsIcon /> } onClick={ handleNavActionClick('settings') }>
              Settings
            </Button>
          </Stack>
        </Grid>
      </Grid>
    );
  }

  return (
    <Grid container xs={ 12 }>
      <Grid xs={ 4 }>
        <Stack direction="row" justifyContent="start" alignItems="center" width="100%" spacing={ 1 }>
          <Button variant="text" startIcon={ <Add /> } onClick={ handleNavActionClick('newExpense') } >
            Expense
          </Button>
        </Stack>
      </Grid>
      <Grid xs={ 8 } xsOffset="auto" display="flex">
        <Stack direction="row" justifyContent="end" alignItems="center" width="100%" spacing={ 2 } data-tooltip-id="fetch-information">
          <Button variant="text" startIcon={ <SettingsIcon /> } onClick={ handleNavActionClick('settings') }>
            Settings
          </Button>
        </Stack>
      </Grid>
    </Grid>
  );

}

export default AccountNavBar;