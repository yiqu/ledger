import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import AccountColumn from './AccountColumn';
import type { AccountWithExpenses } from '~/shared/models/account.model';
import Empty from '../no-result/Empty';

function Dashboard({ accounts }: { accounts: AccountWithExpenses[] }) {

  if (accounts.length === 0) {
    return (
      <Empty type='account' />
    );
  }

  return (
    <Grid container spacing={ 0 } xs={ 12 } columnGap={ 2 }>
      {
        accounts.map((account: AccountWithExpenses) => {
          return (
            <Grid key={ account.id } xs={ 12 } sm md lg xl >
              <AccountColumn account={ account } />
            </Grid>
          );
        })
      }
    </Grid>
  );
}

export default Dashboard;