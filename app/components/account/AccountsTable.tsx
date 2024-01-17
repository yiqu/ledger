import ContentPaperWrap from "~/shared/layouts/ContentPaperWrap";
import type { Account } from "~/shared/models/account.model";
import NoResult from "../no-result/NoResult";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Stack from "@mui/material/Stack";
import TableSortLabel from "@mui/material/TableSortLabel";
import Box from "@mui/material/Box";
import TableBody from "@mui/material/TableBody";
import { ellipsis } from "~/shared/utils/css.utils";
import { ACCOUNTS_TABLE_COLUMNS, transformColumnName } from "~/shared/utils/table";
import { StyledHeaderCell, StyledDataCell } from "../table/TableComponents";
import { TableCellDisplayMemoized } from "../table/AccountTableCellDisplay";
import { useCallback } from "react";
import { useFetcher, useLocation, useNavigate } from "@remix-run/react";
//@ts-ignore
import urlcat from "urlcat";


function AccountsTable({ accounts }: { accounts: Account[] }) {
  const { pathname, search } = useLocation();
  const navigate = useNavigate();
  const deleteFetcher = useFetcher();
  const searchParams = new URLSearchParams(search);
  const newlyAddedAccountId = searchParams.get('addedAccountId');
  const deleteId: string = deleteFetcher.formData?.get('id')?.toString() || '';

  const handleCellMenuAction = useCallback((action: 'edit' | 'delete', data: Account) => {
    switch (action) {
      case 'edit': {
        const url = urlcat('', '/accounts/:accountId/edit', { accountId: data.id, redirectUrl: pathname });
        navigate(url);
        break;
      }
      case 'delete': {
        const proceed = confirm(`Are you sure you want to delete this item?`);
        if (!proceed) return;

        deleteFetcher.submit({ id: data.id }, { method: 'DELETE', action: `/accounts/${data.id}`, preventScrollReset: true });
      }
    }
  }, [deleteFetcher, navigate, pathname]);

  if (accounts.length < 1) {
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
                ACCOUNTS_TABLE_COLUMNS.map((col, index, array) => {
                  return (
                    <StyledHeaderCell
                      key={ col }
                    // style={ col === 'name' ? { ...stickyDataCellClass as any } : {} }
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
              accounts.map((account: Account, rindex: number) => {
                const isWorking: boolean = false;
                return (
                  <TableRow
                    key={ account.id }
                    id={ `account-${account.id}` }
                    sx={ { opacity: isWorking ? 0.5 : 1 } }
                  >
                    {
                      ACCOUNTS_TABLE_COLUMNS.map((col, index) => {
                        return (
                          <StyledDataCell key={ `${account.id}-${col}` }>
                            <TableCellDisplayMemoized
                              data={ account }
                              columnId={ col }
                              onMenuClick={ handleCellMenuAction }
                              isDeleting={ deleteId === account.id }
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

export default AccountsTable;