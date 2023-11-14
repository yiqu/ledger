import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { ellipsisBlock } from '~/shared/utils/css.utils';
import Stack from '@mui/material/Stack';
import EditIcon from '@mui/icons-material/Edit';
import { Link, useNavigate, useFetcher, useLocation } from '@remix-run/react';
import { useFetcherType } from '~/shared/hooks/useFetcherType';
import CircularProgress from "@mui/material/CircularProgress";
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import type { Account as IAccount } from '~/shared/models/account.model';
// @ts-ignore
import urlcat from 'urlcat';


function Account({ account }: { account: IAccount }) {
  const navigate = useNavigate();
  const deleteFetcher = useFetcher();
  const { pathname, search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const newlyAddedAccountId = searchParams.get('addedAccountId');

  const { isFetcherActionSubmission, isFetcherActionReload, isFetcherActionRedirect } = useFetcherType(deleteFetcher as any);
  const isApiLoading = isFetcherActionReload || isFetcherActionSubmission || isFetcherActionRedirect;

  const handleActionClick = (actionId: 'edit' | 'delete') => () => {
    if (actionId === 'edit') {
      const url = urlcat('', '/accounts/:accountId/edit', { accountId: account.id, redirectUrl: pathname });
      navigate(url);
    } else if (actionId === 'delete') {
      const proceed = confirm(`Are you sure you want to delete this item?`);
      if (!proceed) return;

      deleteFetcher.submit({ id: account.id }, { method: 'DELETE', action: `/accounts/${account.id}`, preventScrollReset: true });
    }
  };

  return (
    <ListItem
      sx={ { pr: '100px', opacity: isApiLoading ? 0.5 : 1 } }
      secondaryAction={
        <Stack direction="row" justifyContent="end" alignItems="center">
          <IconButton edge="end" aria-label="delete" size="small" onClick={ handleActionClick('edit') }
            disabled={ isApiLoading ? true : false }>
            <EditIcon />
          </IconButton>
          <IconButton edge="end" aria-label="delete" size="small" onClick={ handleActionClick('delete') }
            disabled={ isApiLoading ? true : false } >
            <DeleteIcon />
          </IconButton>
        </Stack>
      }
    >
      <ListItemAvatar>
        <Avatar>
          <AccountBalanceIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={
          <Stack direction="row" justifyContent="start" alignItems="center" spacing={ 1 }>
            <AccountNameDisplay account={ account } />
            { newlyAddedAccountId === account.id && <Chip label="New" color="success" size='small' sx={ { height: '19px' } } /> }
            { account.shown && <Chip label="Shown" color="secondary" size='small' sx={ { height: '19px' } } /> }
            { !!(account._count?.expenses && account._count.expenses > 0) && <Chip label={ `${account._count.expenses}` } color="info" size='small' sx={ { height: '19px' } } /> }
            { isApiLoading && <CircularProgress size="12px" /> }
          </Stack>
        }
        secondary={
          <AccountSubText account={ account } />
        }
      />
    </ListItem>
  );
}

export default Account;

function AccountNameDisplay({ account }: { account: IAccount }) {
  return (
    <Typography style={ { ...ellipsisBlock } } variant='body2' fontWeight={ 500 }>
      <Link to={ `${account.id}` } >
        { account.name }
      </Link>
    </Typography>
  );
}

function AccountSubText({ account }: { account: IAccount }) {
  return (
    <span style={ { ...ellipsisBlock, fontSize: '13px' } }>
      <span title={ account.dateAddedFromNow?.tooltip } >created: { account.dateAddedFromNow?.display }</span>
      { (account.updatedAt && account.updatedAt !== account.dateAdded) &&
        <span title={ account.updatedAtFromNow?.tooltip }> (updated: { account.updatedAtFromNow?.display })
        </span> }
    </span>
  );
}
