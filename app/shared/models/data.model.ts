import type { ExpenseAddable } from './expense.model';
import type { AccountAddable } from './account.model';


export interface AddableData {
  expense?: ExpenseAddable;
  account?: AccountAddable;
}


export interface AccountExpenseCount {
  accountId: string;
  _count: {
    accountId: number;
  }
}