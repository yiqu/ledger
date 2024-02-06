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
import { ACCOUNTS_TABLE_COLUMNS, getColumnWidth, transformColumnName } from "~/shared/utils/table";
import { StyledHeaderCell, StyledDataCell } from "../table/TableComponents";
import { TableCellDisplayMemoized } from "../table/AccountTableCellDisplay";
import { useCallback, useEffect } from "react";
import { useFetcher, useLocation, useNavigate } from "@remix-run/react";
//@ts-ignore
import urlcat from "urlcat";
import type { DeleteFetcher } from "~/shared/models/http.model";
import toast from "react-hot-toast";
import useScreenSize from "~/shared/hooks/useIsMobile";


function AccountsTable({ accounts }: { accounts: Account[] }) {
  const { isAboveXl } = useScreenSize();
  const { pathname, search } = useLocation();
  const navigate = useNavigate();
  const deleteFetcher = useFetcher<DeleteFetcher>();
  const searchParams = new URLSearchParams(search);
  const newlyAddedAccountId = searchParams.get('addedAccountId');
  const deleteId: string = deleteFetcher.formData?.get('id')?.toString() || '';

  useEffect(() => {
    if (deleteFetcher.state === 'idle' && deleteFetcher.data?.showToast) {
      toast.error(deleteFetcher.data.message);
    }
    return (() => {
      toast.remove();
    });
  }, [deleteFetcher.state, deleteFetcher.data?.showToast, deleteFetcher.data?.message]);

  const handleCellMenuAction = useCallback((action: 'edit' | 'delete', data: Account) => {
    switch (action) {
      case 'edit': {
        const url = urlcat('', '/accounts/:accountId/edit', { accountId: data.id, redirectUrl: pathname });
        navigate(url);
        break;
      }
      case 'delete': {
        const proceed = confirm(`Are you sure you want to delete this account?`);
        if (!proceed) return;

        const url = urlcat('', '/accounts/:accountId', { accountId: data.id, redirectUrl: `${pathname}${search}` });
        deleteFetcher.submit({ id: data.id }, { method: 'DELETE', action: url, preventScrollReset: true });
      }
    }
  }, [deleteFetcher, navigate, pathname, search]);

  if (accounts.length < 1) {
    return (
      <Stack direction="column" justifyContent="center" alignItems="center" height="100%">
        <NoResult type="account" />
      </Stack>
    );
  }

  return (
    <ContentPaperWrap>
      <TableContainer sx={ { overflowX: 'hidden', '&:hover': { overflowX: 'auto' } } }>
        <Table size="medium" aria-label="table" stickyHeader style={ { width: '100%', tableLayout: isAboveXl ? 'auto' : 'fixed' } }>
          <TableHead>
            <TableRow>
              {
                ACCOUNTS_TABLE_COLUMNS.map((col, index, array) => {
                  return (
                    <StyledHeaderCell
                      key={ col }
                      style={ isAboveXl ? {} : { width: getColumnWidth(col) } }
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
                const isWorking: boolean = deleteId === account.id;
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
                              isNewlyCreated={ newlyAddedAccountId === account.id }
                              itemIndex={ rindex }
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