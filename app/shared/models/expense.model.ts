import type { Account } from "./account.model";
import type { DateDisplayFormat } from "./general.model";

export interface ExpenseAddable {
  amount: number;
  date: any;
  account?: Account | null;
  accountId: string;
}

export interface ExpenseEditable {
  id: string;
  amount: number;
  date: any;
  accountId: string;
}

export interface Expense {
  id: string;
  amount: number;
  date: string | Date | null;
  dateAdded: string | Date | null;
  updatedAt: string | Date | null;
  dateFromNow?: DateDisplayFormat;
  dateAddedFromNow?: DateDisplayFormat;
  updatedAtFromNow?: DateDisplayFormat;
  accountId: string;
  account: Account;
}

export interface ExpenseWithoutAccount {
  id: string;
  amount: number;
  date: string | Date;
  dateAdded: string | Date;
  updatedAt: string | null | Date;
  accountId: string;
}

export interface ExpenseDisplay {
  id: string;
  amount: number;
  amountOfInteger: number;
  amountOfDecimal: string;
  date: string | Date;
  dateFromNowDisplay?: {display: string; tooltip: string};
  dateFullDisplay?: {display: string; tooltip: string};
  dateAdded: string | Date;
  updatedAt: string | null | Date;
  accountId: string;

  gainAmount: number;
  gainAmountOfInteger: number;
  gainAmountOfDecimal: string;
  gainPercentage: number;
  bgColorClassName: string;
  textColorClassName: string;
}