import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import TableBody from "@mui/material/TableBody";
import { ellipsis } from "~/shared/utils/css.utils";
import { TABLE_COLUMNS, transformColumnName } from "~/shared/utils/table";
import { StyledDataCell, StyledHeaderCell, TableCellDisplayMemoized } from "../table/TableComponents";
import { useLocation, useNavigate } from "@remix-run/react";
import { useFetcher } from '@remix-run/react';
//@ts-ignore
import urlcat from "urlcat";
import type { Expense } from "~/shared/models/expense.model";
import ContentPaperWrap from "~/shared/layouts/ContentPaperWrap";
import { useCallback, useEffect } from "react";
import toast from "react-hot-toast";
import type { DeleteFetcher } from "~/shared/models/http.model";
import NoResult from "../no-result/NoResult";

export interface ExpenseTableProps {
  expenses: Expense[];
}

function ExpenseTable({ expenses }: ExpenseTableProps) {
  const { pathname, search } = useLocation();
  const navigate = useNavigate();
  const deleteFetcher = useFetcher<DeleteFetcher>();

  const deleteId: string = deleteFetcher.formData?.get('id')?.toString() || '';

  useEffect(() => {
    if (deleteFetcher.state === 'idle' && deleteFetcher.data?.showToast) {
      toast.error(deleteFetcher.data.message);
    }
    return (() => {
      toast.remove();
    });
  }, [deleteFetcher.state, deleteFetcher.data?.showToast, deleteFetcher.data?.message]);


  const handleCellMenuAction = useCallback((action: 'editExpense' | 'deleteExpense', expense: Expense) => {
    switch (action) {
      case 'editExpense': {
        const url = urlcat('', '/expenses/:expenseId/edit', { expenseId: expense.id, redirectUrl: `${pathname}${search}` });
        navigate(url);
        break;
      }
      case 'deleteExpense': {
        const proceed = confirm(`Are you sure you want to delete this item?`);
        if (!proceed) return;

        const url = urlcat('', '/expenses/:expenseId', { expenseId: expense.id, redirectUrl: `${pathname}${search}` });
        deleteFetcher.submit({ id: expense.id }, { method: 'DELETE', action: url, preventScrollReset: true });
        break;
      }
    }
  }, [deleteFetcher, navigate, pathname, search]);

  if (expenses.length < 1) {
    return (
      <NoResult />
    );
  }

  return (
    <ContentPaperWrap>
      <TableContainer sx={ { overflowX: 'hidden', '&:hover': { overflowX: 'auto' } } }>
        <Table size="medium" aria-label="table" stickyHeader style={ { width: '100%', tableLayout: 'auto' } }>
          <TableHead>
            <TableRow>
              {
                TABLE_COLUMNS.map((col, index, array) => {
                  return (
                    <StyledHeaderCell
                      key={ col }
                      sx={ {
                        //borderRight: (index < array.length - 1) ? `1px solid ${GREY[400]}` : 'none',
                      } }
                    >
                      <Stack direction="row" justifyContent="space-between" alignItems="center" overflow="hidden">
                        <TableSortLabel active={ false } direction="asc" style={ { width: 'calc(100%)' } }>
                          <Box style={ { ...ellipsis } } title={ `${transformColumnName(col)}` } >
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
              expenses.map((expense: Expense, rindex: number) => {
                const isWorking: boolean = deleteId === expense.id;
                return (
                  <TableRow
                    key={ expense.id }
                    id={ `expense-${expense.id}-${rindex}` }
                    sx={ { opacity: isWorking ? 0.5 : 1 } }
                  >
                    {
                      TABLE_COLUMNS.map((col, index) => {
                        return (
                          <StyledDataCell key={ `${expense.id}${index}` }
                          // style={ col === 'account' ? { ...stickyDataCellClass as any } : {} }
                          >
                            <TableCellDisplayMemoized
                              expense={ expense }
                              columnId={ col }
                              onMenuClick={ handleCellMenuAction }
                              isDeleting={ deleteId === expense.id }
                            />
                          </StyledDataCell>
                        );
                      })
                    }
                  </TableRow>
                );
              })
            }
          </TableBody>

        </Table>
      </TableContainer>

    </ContentPaperWrap>
  );
}

export default ExpenseTable;