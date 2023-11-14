import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import LinearProgress from "@mui/material/LinearProgress";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import TableBody from "@mui/material/TableBody";
import { stickyHeaderClass, ellipsis, stickyDataCellClass } from "~/shared/utils/css.utils";
import { GREY } from "~/theme/palette";
import useScreenSize from "~/shared/hooks/useIsMobile";
import { TABLE_COLUMNS, transformColumnName } from "~/shared/utils/table";
import { StyledDataCell, StyledHeaderCell, transformTableData } from "../table/TableComponents";
import { useLocation, useNavigate } from "@remix-run/react";
import { useFetcher } from '@remix-run/react';
//@ts-ignore
import urlcat from "urlcat";
import { useFetcherType } from "~/shared/hooks/useFetcherType";
import { useNavigationType } from "~/shared/hooks/useNavigationType";
import type { Expense } from "~/shared/models/expense.model";

export interface ExpenseTableProps {
  expenses: Expense[];
}

function ExpenseTable({ expenses }: ExpenseTableProps) {
  const { isAboveXl } = useScreenSize();
  const { pathname, search } = useLocation();
  const navigate = useNavigate();
  const deleteFetcher = useFetcher();
  const { isFetcherActionSubmission, isFetcherActionReload, isFetcherActionRedirect } = useFetcherType(deleteFetcher as any);
  const { isNormalLoad, isActionReload, isActionRedirect,  isReloading, isActionSubmission, isLoaderSubmission, isLoaderSubmissionRedirect } = useNavigationType();
  const isApiLoading = isFetcherActionSubmission || isFetcherActionReload || isFetcherActionRedirect || isReloading || isActionSubmission || isActionReload || 
    isActionRedirect || isLoaderSubmission || isLoaderSubmissionRedirect || isNormalLoad;
  
  const handleCellMenuAction = (expense: Expense) => (action: 'editExpense' | 'deleteExpense') => {
    switch (action) {
      case 'editExpense': {
        const url = urlcat('', '/data/:expenseId/edit', { expenseId: expense.id, redirectUrl: `${pathname}${search}`});
        navigate(url);
        break;
      }
      case 'deleteExpense': {
        const proceed = confirm(`Are you sure you want to delete this item?`);
        if (!proceed) return;

        const url = urlcat('', '/data/:expenseId', { expenseId: expense.id, redirectUrl: `${pathname}${search}`});
        deleteFetcher.submit({ id: expense.id }, { method: 'DELETE', action: url, preventScrollReset: true });
        break;
      }
    }
  };


  return (
    <Box width="100%">
      <Box height="5px" width="100%">
        { isApiLoading && <LinearProgress color={ isFetcherActionSubmission ? 'warning' : 'info' } /> }
      </Box>
      <TableContainer component={ Paper } elevation={ 0 } sx={ { overflowX: 'hidden', '&:hover': {overflowX: 'auto'}} }>
        <Table size="medium" aria-label="table" stickyHeader  style={ { width: '100%', tableLayout: 'fixed' } }>
          <TableHead>
            <TableRow>
              {
                TABLE_COLUMNS.map((col, index) => {
                  return (
                    <StyledHeaderCell 
                      key={ col } 
                    >
                      <Stack direction="row" justifyContent="space-between" alignItems="center" overflow="hidden">
                        <TableSortLabel active={ false } direction="asc" style={ { width: 'calc(100%)'} }>
                          <Box style={ {...ellipsis} }  title={ `${transformColumnName(col)}` } >
                            { transformColumnName(col) }
                          </Box>
                        </TableSortLabel>
                      </Stack>
                    </StyledHeaderCell>
                  );
                })
              }
            </TableRow>
          </TableHead>

          <TableBody>
            {
              expenses.map((expense: Expense, rindex: number) => (
                <TableRow
                  key={ expense.id }
                  sx={ { '&:hover': {backgroundColor: GREY[300]}, opacity: 1 } }
                  id={ `expense-${expense.id}-${rindex}` }
                >
                  {
                    TABLE_COLUMNS.map((col, index) => {
                      return (
                        <StyledDataCell key={ `${expense.id}${index}` }
                          style={ col === 'account' ? {...stickyDataCellClass as any} : {} }
                        >
                          {transformTableData(expense, col, handleCellMenuAction(expense)) }
                        </StyledDataCell>
                      );
                    })
                  }
                </TableRow>
              ))
            }
          </TableBody>

        </Table>
      </TableContainer>
      
    </Box>
  );
}

export default ExpenseTable;