import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Grid from '@mui/material/Unstable_Grid2';
import CountUp from 'react-countup';

interface AccountMetaSummaryProps {
  totalBalance: number;
  countOfExpenses: number;
  highest: number;
  lowest: number;
  average: number;
}

function AccountMetaSummary({ totalBalance, countOfExpenses, highest, lowest, average }: AccountMetaSummaryProps) {

  return (
    <Grid
      container
      spacing={ 2 }
      sx={ {
        '--Grid-borderWidth': '1px',
        borderColor: 'divider',
        '& > div:not(:last-child)': {
          borderRight: 'var(--Grid-borderWidth) solid',
          borderColor: 'divider',
        },
      } }
    >
      <Grid xs>
        <Stack direction="column" justifyContent="start" alignItems="center">
          <Typography variant="h6" fontWeight={ 400 } >
            Total Balance
          </Typography>
          <Typography variant="h4" fontWeight={ 400 } >
            <CountUp
              end={ totalBalance }
              prefix="$"
            />
          </Typography>
        </Stack>
      </Grid>

      <Grid xs>
        <Stack direction="column" justifyContent="start" alignItems="center">
          <Typography variant="h6" fontWeight={ 400 } >
            Number of Expenses
          </Typography>
          <Typography variant="h4" fontWeight={ 400 } >
            <CountUp
              end={ countOfExpenses }
            />
          </Typography>
        </Stack>
      </Grid>

      <Grid xs>
        <Stack direction="column" justifyContent="start" alignItems="center">
          <Typography variant="h6" fontWeight={ 400 } >
            Highest Expense
          </Typography>
          <Typography variant="h4" fontWeight={ 400 } >
            <CountUp
              end={ highest }
              prefix="$"
            />
          </Typography>
        </Stack>
      </Grid>

      <Grid xs>
        <Stack direction="column" justifyContent="start" alignItems="center">
          <Typography variant="h6" fontWeight={ 400 } >
            Lowest Expense
          </Typography>
          <Typography variant="h4" fontWeight={ 400 } >
            <CountUp
              end={ lowest }
              prefix="$"
            />
          </Typography>
        </Stack>
      </Grid>

      <Grid xs>
        <Stack direction="column" justifyContent="start" alignItems="center">
          <Typography variant="h6" fontWeight={ 400 } >
            Average per Expense
          </Typography>
          <Typography variant="h4" fontWeight={ 400 } >
            <CountUp
              end={ average }
              prefix="$"
            />
          </Typography>
        </Stack>
      </Grid>

    </Grid>
  );
}

export default AccountMetaSummary;