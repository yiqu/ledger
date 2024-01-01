import { object, string, number } from "yup";

export const accountSchema = object({
  name: string().trim().required('Field is required.').min(2, 'Value has to be at least 2 characters.'),
});

export const expenseSchema = object({
  amount: number().required('Field is required.').min(0, 'Value has to be at least 2 characters.'),
  date: number().required('Field is required.'),
  accountId: string().required('Field is required.')
});

export const expenseCommentSchema = object({
  comment: string().trim().required('Field is required.').min(2, 'Comments has to be at least 2 characters.'),
});