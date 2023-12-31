import type { ExpenseComment, ExpenseCommentInput } from "~/shared/models/comment.model";
import { prisma } from "./database.server";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import type { Prisma } from "@prisma/client";

export async function getCommentsByExpenseId(expenseId: string) {
  // await runDelayTimer(800);
  try {
    const res = await prisma.expenseComments.findMany({
      where: {
        expenseId: expenseId
      },
      orderBy: {
        dateAdded: 'desc'
      }
    });
    return res;
  } catch (error: Prisma.PrismaClientKnownRequestError | any) {
    console.log('Server error at getCommentByExpenseId(): ', JSON.stringify(error));
    throw new Error(`Comment could not be retrieved. Code: ${error.code}`);
  }
}

export async function addExpenseComment(comment: ExpenseCommentInput) {
  try {
    const res = await prisma.expenseComments.create({
      data: {
        comment: comment.comment,
        expenseId: comment.expenseId,
      }
    });
    return res;
  } catch (error: Prisma.PrismaClientKnownRequestError | any) {
    console.log('Server error at addExpenseComment(): ', JSON.stringify(error));
    throw new Error(`Comment could not be added. Code: ${error.code}`);
  }
}

export async function editExpenseComment(comment: ExpenseComment) {
  try {
    const res = await prisma.expenseComments.update({
      where: {
        id: comment.id
      },
      data: {
        comment: comment.comment,
        expenseId: comment.expenseId,
      }
    });
    return res;
  } catch (error: Prisma.PrismaClientKnownRequestError | any) {
    console.log('Server error at editExpenseComment(): ', JSON.stringify(error));
    throw new Error(`Comment could not be edited. Code: ${error.code}`);
  }
}