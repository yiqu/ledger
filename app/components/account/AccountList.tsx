import List from '@mui/material/List';
import type { Account as IAccount } from '~/shared/models/account.model';
import Account from './Account';

function AccountList({ accounts }: { accounts: IAccount[] }) {
  return (
    <List sx={ { width: '100%', bgcolor: 'background.paper', borderRadius: '20px' } } >
      {
        accounts.map((account: IAccount) => {
          return (
            <Account account={ account } key={ account.id } />
          );
        })
      }
    </List>
  );
}

export default AccountList;