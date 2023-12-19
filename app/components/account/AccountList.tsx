import List from '@mui/material/List';
import type { Account as IAccount } from '~/shared/models/account.model';
import Account from './Account';
import ContentPaperWrap from '~/shared/layouts/ContentPaperWrap';

function AccountList({ accounts }: { accounts: IAccount[] }) {
  return (
    <ContentPaperWrap>
      <List sx={ { width: '100%' } } >
        {
          accounts.map((account: IAccount) => {
            return (
              <Account account={ account } key={ account.id } />
            );
          })
        }
      </List>
    </ContentPaperWrap>

  );
}

export default AccountList;