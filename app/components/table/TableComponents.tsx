import TableCell from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';
import { ellipsis, ellipsisBlock, pxToRem } from '~/shared/utils/css.utils';
import { GREY } from '~/theme/palette';
import type { EXPENSES_TABLE_COLUMNS } from '~/shared/utils/table';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import type { Expense } from '~/shared/models/expense.model';
import Typography from '@mui/material/Typography';
import { Link } from '@remix-run/react';
import { memo } from 'react';
import CircularProgress from "@mui/material/CircularProgress";


export const StyledHeaderCell = styled(TableCell)(() => ({
  ...ellipsis,
  paddingTop: '10px',
  paddingBottom: '10px',
  fontSize: pxToRem(14),
  // borderRight: `1px solid ${GREY[400]}`,
  borderColor: GREY[400],
}));

export const StyledDataCell = styled(TableCell)(() => ({
  ...ellipsis,
  paddingTop: '10px',
  paddingBottom: '10px',
  fontSize: pxToRem(14),
  maxWidth: '22rem', // the max width data cells can have
}));

export function LinkableCellDisplay({ url, display }: { url: string, display: string }) {
  return (
    <Typography style={ { ...ellipsisBlock } } className='roboto' title={ display }>
      <Link to={ url }>
        { display }
      </Link>
    </Typography>
  );
}

interface TableCellDisplayProps {
  expense: Expense;
  columnId: typeof EXPENSES_TABLE_COLUMNS[number];
  onMenuClick: (actionId: 'editExpense' | 'deleteExpense', expense: Expense) => void;
  isDeleting: boolean;
  index: number;
}

function TableCellDisplay({ expense, columnId, onMenuClick, isDeleting, index }: TableCellDisplayProps) {
  const handleTitleCellMenuAction = (actionId: 'editExpense' | 'deleteExpense') => () => {
    onMenuClick(actionId, expense);
  };

  switch (columnId) {
    case 'account': {
      return (
        <Stack direction="row" justifyContent="start" alignItems="center" spacing={ 1 }>
          <LinkableCellDisplay url={ `/accounts/${expense.account.id}` } display={ expense.account.name } />
          { isDeleting && (<CircularProgress size={ 12 } />) }
        </Stack>
      );
    }
    case 'amount': {
      return (
        <LinkableCellDisplay url={ `/expenses/${expense.id}` } display={ `$${expense.amount.toLocaleString()}` } />
      );
    }
    case 'date': {
      return (
        <span title={ expense.dateFromNow?.tooltip }>
          { expense.dateFromNow?.display }
        </span>
      );
    }
    case 'dateAdded': {
      return (
        <span title={ expense.dateAddedFromNow?.tooltip }>
          { expense.dateAddedFromNow?.display }
        </span>
      );
    }
    case 'updatedAt': {
      return (
        <span title={ expense.updatedAtEpoch ? expense.updatedAtFromNow?.tooltip : 'N/A' }>
          { expense.updatedAtEpoch ? expense.updatedAtFromNow?.display : 'N/A' }
        </span>
      );
    }
    case 'commentsCount': {
      return (
        <span title={ `${expense._count?.comments ?? 'N/A'}` }>
          { expense._count?.comments.toLocaleString() ?? 'N/A' }
        </span>
      );
    }
    case 'actions': {
      return (
        <Stack direction="row" justifyContent="start" alignItems="center">
          <IconButton edge="end" aria-label="edit" size="small" onClick={ handleTitleCellMenuAction('editExpense') } title={ `Edit #${index + 1}` }
            disabled={ isDeleting }>
            <EditIcon fontSize='small' />
          </IconButton>
          <IconButton edge="end" aria-label="delete" size="small" onClick={ handleTitleCellMenuAction('deleteExpense') } title={ `Delete #${index + 1}` }
            disabled={ isDeleting } >
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

export const TableCellDisplayMemoized = memo(TableCellDisplay);