import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";

interface TablePaginationProps {
  currentPage: number;
  totalPages: number;
  pageSize: number;
  currentResultSetCount: number;
  data: any[];
  handlePageUpdate: (event: React.ChangeEvent<unknown>, value: number) => void;
}

function TablePagination({ currentPage, totalPages, pageSize, currentResultSetCount, data, handlePageUpdate }: TablePaginationProps) {

  if (currentResultSetCount < 1) {
    return null;
  }

  return (
    <Stack direction="row" justifyContent="flex-end" alignItems="center">
      <Box mr={ 2 }>
        <Typography variant="body2">
          { `${(currentPage * pageSize) + 1}-${(currentPage * pageSize) + data.length} of ${currentResultSetCount}` }
        </Typography>
      </Box>
      <Pagination count={ totalPages } showFirstButton showLastButton size="small" page={ currentPage + 1 } onChange={ handlePageUpdate } color="standard" shape="rounded" />
    </Stack>
  );
}

export default TablePagination;