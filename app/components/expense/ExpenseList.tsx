import List from "@mui/material/List";
import ExpenseDisplay from "./Expense";
import type { Expense } from "~/shared/models/expense.model";

function ExpenseList({ expenses }: { expenses: Expense[] }) {
  return (
    <List sx={ { width: '100%', bgcolor: 'background.paper', borderRadius: '20px' } } >
      {
        expenses.map((expense: Expense) => {
          return (
            <ExpenseDisplay expense={ expense } key={ expense.id } />
          );
        })
      }
    </List>
  );
}

export default ExpenseList;