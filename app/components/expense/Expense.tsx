import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { ellipsisBlock } from '~/shared/utils/css.utils';
import Stack from '@mui/material/Stack';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate, useFetcher, useLocation } from '@remix-run/react';
import { useFetcherType } from '~/shared/hooks/useFetcherType';
import CircularProgress from "@mui/material/CircularProgress";
import PageviewIcon from '@mui/icons-material/Pageview';
import { useState } from 'react';
import DialogLayout from '~/shared/dialog/DialogLayout';
import ExpenseDetail from './ExpenseDetail';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
//@ts-ignore
import urlcat from 'urlcat';
import type { Expense as IExpense } from '~/shared/models/expense.model';
import { LinkableCellDisplay } from '../table/TableComponents';
import DialogContent from "@mui/material/DialogContent";

function Expense({ expense }: { expense: IExpense }) {
  const navigate = useNavigate();
  const deleteFetcher = useFetcher();
  const { isFetcherActionSubmission, isFetcherActionReload, isFetcherActionRedirect } = useFetcherType(deleteFetcher as any);
  const isApiLoading = isFetcherActionSubmission || isFetcherActionReload || isFetcherActionRedirect;
  const [showExpenseDetail, setShowExpenseDetail] = useState<boolean>(false);
  const { pathname, search } = useLocation();

  const handleCloseDetail = () => {
    setShowExpenseDetail(false);
  };

  const handleActionClick = (actionId: 'editExpense' | 'deleteExpense' | 'details') => () => {
    if (actionId === 'editExpense') {
      const url = urlcat('', '/expenses/:expenseId/edit', { expenseId: expense.id, redirectUrl: `${pathname}${search}` });
      navigate(url);
    } else if (actionId === 'deleteExpense') {
      const proceed = confirm(`Are you sure you want to delete this item?`);
      if (!proceed) return;
      const url = urlcat('', '/expenses/:expenseId', { expenseId: expense.id, redirectUrl: `${pathname}${search}` });
      deleteFetcher.submit({ id: expense.id }, { method: 'DELETE', action: url, preventScrollReset: true });
    } else if (actionId === 'details') {
      navigate(`expense/${expense.id}/details`);
    }
  };


  return (
    <>
      <ListItem
        sx={ { pr: '100px', opacity: isApiLoading ? 0.5 : 1 } }
        secondaryAction={
          <Stack direction="row" justifyContent="end" alignItems="center">
            <IconButton edge="end" aria-label="details" size="small" onClick={ handleActionClick('details') } title="See details"
              disabled={ isApiLoading ? true : false } >
              <PageviewIcon />
            </IconButton>
            <IconButton edge="end" aria-label="edit" size="small" onClick={ handleActionClick('editExpense') } title="Edit"
              disabled={ isApiLoading ? true : false }>
              <EditIcon />
            </IconButton>
            <IconButton edge="end" aria-label="delete" size="small" onClick={ handleActionClick('deleteExpense') } title="Delete"
              disabled={ isApiLoading ? true : false } >
              <DeleteIcon />
            </IconButton>
          </Stack>
        }
      >
        <ListItemAvatar>
          <Avatar>
            <ReceiptLongIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={
            <Stack direction="row" justifyContent="start" alignItems="center" spacing={ 1 }>
              <LinkableCellDisplay url={ `/expenses/${expense.id}` } display={ `$${expense.amount.toLocaleString()}` } />
              { isApiLoading && <CircularProgress size="12px" /> }
            </Stack>
          }
          secondary={
            <ExpenseSubText expense={ expense } />
          }
        />
      </ListItem>

      <DialogLayout open={ showExpenseDetail } onClose={ handleCloseDetail } title={ `Expense Detail` } maxWidth="xs">
        <DialogContent>
          <ExpenseDetail expense={ expense } />
        </DialogContent>
      </DialogLayout>
    </>
  );
}

export default Expense;

function ExpenseSubText({ expense }: { expense: IExpense }) {
  return (
    <span style={ { ...ellipsisBlock, fontSize: '13px', height: '18.5px' } } title={ `${expense.dateFromNow?.tooltip}` }>
      { expense.dateFromNow?.display }
    </span>
  );
}