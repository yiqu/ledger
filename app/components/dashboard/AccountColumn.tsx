import Stack from "@mui/material/Stack";
import AccountHeader from "./AccountHeader";
import Divider from "@mui/material/Divider";
import ExpenseDisplay from "./ExpenseDisplay";
import Typography from "@mui/material/Typography";
import { Link } from "@remix-run/react";
import type { AccountWithExpenses } from "~/shared/models/account.model";

function AccountColumn({ account }: { account: AccountWithExpenses }) {
  const nameWithoutParentheses = account.name.replace(/\(.*\)/, '').trim();
  return (
    <Stack direction="column" justifyContent="start" alignItems="center" width="100%" sx={ { bgcolor: 'background.paper', borderRadius: '20px', p: 0.5 } }>
      <AccountHeader
        name={ account.name }
        total={ account.totalAmount }
        count={ account.expenseCount }
        accountId={ account.id }
        totalInt={ account.totalAmountOfInteger }
        totalDecimal={ account.totalAmountOfDecimal }
      />

      <Divider variant="fullWidth" flexItem sx={ { my: 2 } } />

      {
        account.expenses.map((expense) => {
          return (
            <ExpenseDisplay key={ expense.id } expense={ expense } />
          );
        })
      }
      {
        account.dashboardDisplayHasMore && <Stack>
          <Typography variant="body1"> <Link to={ `/expenses?q=${nameWithoutParentheses}` }>See more</Link> </Typography>
        </Stack>
      }
    </Stack>
  );
}

export default AccountColumn;