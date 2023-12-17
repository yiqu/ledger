import TableCell from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';
import { ellipsis } from '~/shared/utils/css.utils';
import { GREY } from '~/theme/palette';
import type { TABLE_COLUMNS } from '~/shared/utils/table';
import { ExpenseName } from '../expense/Expense';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import type { Expense } from '~/shared/models/expense.model';
import format from "date-fns/format";


export const StyledHeaderCell = styled(TableCell)(() => ({
  ...ellipsis,
  paddingTop: '10px',
  paddingBottom: '10px',
  fontSize: '15px',
  // borderRight: `1px solid ${GREY[400]}`,
  borderColor: GREY[400],
}));

export const StyledDataCell = styled(TableCell)(() => ({
  ...ellipsis,
  paddingTop: '10px',
  paddingBottom: '10px',
  fontSize: '14px',
  maxWidth: '22rem', // the max width data cells can have
}));

export function transformTableData(expense: Expense, columnId: typeof TABLE_COLUMNS[number], onMenuClick: (actionId: 'editExpense' | 'deleteExpense') => void) {
  const handleTitleCellMenuAction = (actionId: 'editExpense' | 'deleteExpense') => () => {
    onMenuClick(actionId);
  };

  switch (columnId) {
    case 'account': {
      return (
        <span
          title={ `${expense.account.name}` }> { expense.account.name }
        </span>
      );
    }
    case 'amount': {
      return (
        <ExpenseName expense={ expense } />
      );
    }
    case 'date': {
      return (
        <span title={ format(expense.date, 'MM/dd/yy HH:mm') }>
          { expense.date }
        </span>
      );
    }
    case 'dateAdded': {
      return (
        <span title={ format(expense.addedAtEpoch, 'MM/dd/yy HH:mm') }>
          { expense.addedAtEpoch }
        </span>
      );
    }
    case 'updatedAt': {
      return (
        <span title={ expense.updatedAtEpoch ? format(expense.addedAtEpoch, 'MM/dd/yy HH:mm') : 'N/A' }>
          { expense.updatedAtEpoch ? expense.updatedAtEpoch : 'N/A' }
        </span>
      );
    }
    case 'actions': {
      return (
        <Stack direction="row" justifyContent="start" alignItems="center">
          <IconButton edge="end" aria-label="edit" size="small" onClick={ handleTitleCellMenuAction('editExpense') } title="Edit"
            disabled={ false ? true : false }>
            <EditIcon fontSize='small' />
          </IconButton>
          <IconButton edge="end" aria-label="delete" size="small" onClick={ handleTitleCellMenuAction('deleteExpense') } title="Delete"
            disabled={ false ? true : false } >
            <DeleteIcon fontSize='small' />
          </IconButton>
        </Stack>
      );
    }
    default: {
      return <span> TBD </span>;
    }
  }
}