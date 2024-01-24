import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";
import IconButton from "@mui/material/IconButton";
import { memo } from "react";
import type { Account } from "~/shared/models/account.model";
import type { ACCOUNTS_TABLE_COLUMNS } from "~/shared/utils/table";
import { LinkableCellDisplay } from "./TableComponents";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Chip from "@mui/material/Chip";

interface TableCellDisplayProps {
  data: Account;
  columnId: typeof ACCOUNTS_TABLE_COLUMNS[number];
  onMenuClick: (actionId: 'edit' | 'delete', payload: Account) => void;
  isDeleting: boolean;
  isNewlyCreated: boolean;
  itemIndex: number;
}

function TableCellDisplay({ data, columnId, onMenuClick, isDeleting, isNewlyCreated, itemIndex }: TableCellDisplayProps) {
  const handleTitleCellMenuAction = (actionId: 'edit' | 'delete') => () => {
    onMenuClick(actionId, data);
  };

  switch (columnId) {
    case 'name': {
      return (
        <Stack direction="row" justifyContent="start" alignItems="center" spacing={ 1 }>
          <LinkableCellDisplay url={ `/accounts/${data.id}` } display={ data.name } />
          { isNewlyCreated && (<Chip label="New" size="small" color="info" />) }
          { isDeleting && (<CircularProgress size={ 12 } />) }
        </Stack>
      );
    }
    case 'shown': {
      return (
        <Stack direction="row" justifyContent="start" alignItems="center" spacing={ 1 }>
          <Chip label={ data.shown ? 'Yes' : 'No' } size="small" color={ data.shown ? 'success' : 'error' } />
        </Stack>
      );
    }
    case 'dateAdded': {
      return (
        <span title={ data.dateAddedFromNow?.tooltip }>
          { data.dateAddedFromNow?.display }
        </span>
      );
    }
    case 'updatedAt': {
      return (
        <span title={ data.updatedAtEpoch ? data.updatedAtFromNow?.tooltip : 'N/A' }>
          { data.updatedAtEpoch ? data.updatedAtFromNow?.display : 'N/A' }
        </span>
      );
    }
    case 'expensesCount': {
      return (
        <span title={ `${data._count?.expenses}` }>
          { `${data._count?.expenses ?? 'N/A'}` }
        </span>
      );
    }
    case 'actions': {
      return (
        <Stack direction="row" justifyContent="start" alignItems="center">
          <IconButton edge="end" aria-label="edit" size="small" onClick={ handleTitleCellMenuAction('edit') } title="Edit"
            disabled={ isDeleting }>
            <EditIcon fontSize='small' />
          </IconButton>
          <IconButton edge="end" aria-label="delete" size="small" onClick={ handleTitleCellMenuAction('delete') } title={ `Delete #${itemIndex + 1}` }
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