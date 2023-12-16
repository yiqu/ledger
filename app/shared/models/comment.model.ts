import type { Expense } from "./expense.model";

export interface ExpenseComment {
  id: string;
  dateAdded: string | Date;
  updatedAt: string | null | Date;
  comment: string;
  expenseId: string;
  expense?: Expense | null;
}

export interface ExpenseCommentInput {
  comment: string;
  expenseId: string;
}