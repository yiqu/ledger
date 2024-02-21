import type { Account } from "./account.model";
import type { Expense } from "./expense.model";

export enum DataBlockDisplayMode {
  TABLE = "table",
  CARD = "card"
}

export interface AccountAndExpense {
  account: Account;
  expense: Expense;
}

export interface DateDisplayFormat {
  display: string;
  tooltip: string;
}

export interface SuccessJsonObj<T> {
  success: boolean;
  timestamp: string;
  result: T;
}

export interface PrismaAmountResult {
  amount: number | null;
}