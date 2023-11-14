import type { Expense, ExpenseDisplay, ExpenseWithoutAccount } from "./expense.model";
import type { DateDisplayFormat } from "./general.model";
import type { DashboardChartType } from "@prisma/client";

export interface AccountAddable {
  name: string;
  shown?: boolean;
}

export interface AccountUpdateable {
  name: string | null;
  shown?: boolean;
}

export interface Account extends AccountAddable {
  id: string;
  dateAdded: string | Date | null;
  updatedAt: string | Date | null;
  _count?: {
    expenses: number;
  };
  dateAddedFromNow?: DateDisplayFormat;
  updatedAtFromNow?: DateDisplayFormat;
}

export interface AccountWithPreCalculateExpenses {
  id: string;
  name: string;
  dateAdded: string | Date;
  updatedAt: string | null | Date;
  shown: boolean;
  expenses: ExpenseWithoutAccount[];
  expenseCount: number;
}

export interface AccountWithExpenses {
  id: string;
  name: string;
  dateAdded: string | Date;
  updatedAt: string | null | Date;
  shown: boolean;
  totalAmount: number;
  totalAmountOfInteger: number;
  totalAmountOfDecimal: string;
  expenses: ExpenseDisplay[];
  expenseCount: number;
  dashboardDisplayHasMore: boolean;
}

export interface DashboardChartData {
  [accountName: string]: number | string | null;
}

export interface DashboardExpensesData {
  accountsData: AccountWithExpenses[];
  isChartShown: boolean;
  chartType: DashboardChartType;
  chartData: DashboardChartData[];
  shownAccountAndColorData: DashboardShownAccountAndColor[];
  total: number;
}

export interface DashboardShownAccountAndColor {
  name: string;
  color: string;
}

export interface ExpenseAndAccounts {
  expense: Expense;
  accounts: Account[];
}