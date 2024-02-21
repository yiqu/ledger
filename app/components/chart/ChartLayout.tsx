import Paper from "@mui/material/Paper";

function ChartLayout({ children }: { children: React.ReactNode }) {
  return (
    <Paper
      variant="outlined"
      sx={ { width: '100%', pt: 2, pb: 1, px: 1, borderRadius: '12px' } }
      elevation={ 0 }
    >
      { children }
    </Paper>
  );
}

export default ChartLayout;