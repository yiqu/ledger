import { date, string, object, number } from 'yup';
import type { ExpenseAddable, ExpenseEditable } from '~/shared/models/expense.model';

export async function isValidDate(dateString: string) {
  const schema = date();
  return await schema.isValid(new Date(dateString));
}

export async function isValidStringCount(text: string, count: number = 1) {
  const schema = string().required("This field is required.").min(count, `This field must be at least ${count} character long.`);
  return await schema.validate(text);
}


export async function validateExpenseToAdd(expense: ExpenseAddable | ExpenseEditable) {
  const schema = object().shape({
    amount: number().required("Dollar amount field is required.").min(0, `Amount has to be greater than 0.`),
    date: number().required("Date field is required."),
    accountId: string().required("Account is required."),
  });
  return await schema.validate(expense);
}