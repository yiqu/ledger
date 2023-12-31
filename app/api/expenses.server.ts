import { prisma } from "./database.server";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import type { Prisma } from "@prisma/client";
import format from "date-fns/format";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import parseInt from "lodash/parseInt";
import type { Expense, ExpenseAddable, ExpenseEditable } from "~/shared/models/expense.model";
import { TIME_STAMP_FORMAT } from "~/shared/utils/constants";
import { convertDateDisplay } from "./utils/date.server";

/**
 * Get all expenses paged
 * @param page page number
 * @returns 
 */
export async function getExpensesPaged(page: number, filterString: string | null) {
  const pageSize = 25;
  const offset = page * pageSize;
  const totalCount: number = await prisma.expense.count();
  const filter = (filterString !== null) ? filterString.trim() : '';

  const filterParsedNumber: number = parseInt(filter.replaceAll(",", ""));
  const filterAsNumber: number | undefined = filterParsedNumber ? (filter.includes(",") ? +(filter.replaceAll(",", "")) : +filter) : undefined;

  try {
    const res = await prisma.expense.findMany({
      include: {
        account: true
      },
      orderBy: {
        date: 'desc'
      },
      skip: offset,
      take: pageSize,
      where: {
        OR: [
          {
            account: {
              name: {
                contains: filter,
                mode: 'insensitive',
              }
            }
          },
          {
            amount: filterAsNumber
          }
        ]
      }
    });

    const currentResultSetCount: number = await prisma.expense.count({
      where: {
        OR: [
          {
            account: {
              name: {
                contains: filter,
                mode: 'insensitive',
              }
            }
          },
          {
            amount: filterAsNumber
          }
        ]
      }
    });
    const totalPages: number = Math.ceil(currentResultSetCount / pageSize);

    return {
      data: res,
      totalPages: totalPages,
      totalCount: totalCount,
      currentResultSetCount: currentResultSetCount,
      pageSize: pageSize
    };
  } catch (error: Prisma.PrismaClientKnownRequestError | any) {
    console.log('Server error at getExpensesPaged(): ', JSON.stringify(error));
    throw new Error(`Expenses could not be retrieved. Code: ${error.code}`);
  }
}

export async function getFirstAndLastExpenseDatesByShownAccounts() {
  try {
    const res = await prisma.expense.findMany({
      orderBy: {
        date: 'asc'
      },
      select: {
        date: true
      },
      where: {
        account: {
          shown: true
        }
      }
    });

    const firstDate = res.length > 0 ? res[0].date : null;
    const lastDate = res.length > 0 ? res[res.length - 1].date : null;

    return {
      firstDate: firstDate,
      lastDate: lastDate
    };
  } catch (error: Prisma.PrismaClientKnownRequestError | any) {
    console.log('Server error at getFirstAndLastExpenseDates(): ', JSON.stringify(error));
    throw new Error(`Expenses could not be retrieved. Code: ${error.code}`);
  }
}

export async function addExpense(expense: ExpenseAddable) {
  try {
    const res = await prisma.expense.create({
      data: {
        amount: +expense.amount,
        date: new Date(expense.date).getTime(),
        account: { connect: { id: expense.accountId } },
        addedAtEpoch: Date.now(),
        updatedAtEpoch: 0
      },
    });
    return res;
  } catch (error: Prisma.PrismaClientKnownRequestError | any) {
    console.log('Server error at addExpense(): ', JSON.stringify(error));
    if (error.code === 'P2002') {
      throw new Error(`Expense name '${expense.amount}' already exists.`);
    }
    throw new Error(`Expense name ${expense.amount} could not be added. Code: ${error.code}`);
  }

}

export async function getExpensesByAccountId(accountId: string, page: number, filterString: string | null) {
  const pageSize = 25;
  const offset = page * pageSize;
  const totalCount: number = await prisma.expense.count({
    where: {
      accountId: accountId
    }
  });

  try {
    const res: Expense[] = await prisma.expense.findMany({
      where: {
        accountId: accountId
      },
      include: {
        account: true
      },
      orderBy: {
        date: 'desc'
      },
      skip: offset,
      take: pageSize,
    });

    const currentResultSetCount: number = await prisma.expense.count({
      where: {
        accountId: accountId
      }
    });

    const totalPages: number = Math.ceil(currentResultSetCount / pageSize);

    const expenseWithDateFormatted: Expense[] = res.map((expense: Expense) => {
      return {
        ...expense,
        dateAddedFromNow: convertDateDisplay(expense.dateAdded, 'fromNow'),
        updatedAtFromNow: convertDateDisplay(expense.updatedAt, 'fromNow'),
        dateFromNow: convertDateDisplay(expense.date, 'fromNowUnlessFarBack'),
      };
    });

    return {
      data: expenseWithDateFormatted,
      totalPages: totalPages,
      totalCount: totalCount,
      currentResultSetCount: currentResultSetCount,
      pageSize: pageSize
    };

  } catch (error: Prisma.PrismaClientKnownRequestError | any) {
    console.log('Server error at getExpensesByAccountId(): ', JSON.stringify(error));
    throw new Error(`Expenses could not be retrieved. Code: ${error.code}`);
  }
}

export async function deleteExpense(expenseId: string) {
  try {
    const res = await prisma.expense.delete({
      where: {
        id: expenseId
      }
    });
    return res;
  } catch (error: Prisma.PrismaClientKnownRequestError | any) {
    console.log('Server error at deleteExpense(): ', JSON.stringify(error));
    throw new Error(`Expense could not be deleted. Code: ${error.code}`);
  }
}

export async function getExpenseById(expenseId: string) {
  try {
    const res = await prisma.expense.findUnique({
      where: {
        id: expenseId
      },
      include: {
        account: true
      }
    });

    if (res) {
      const expense: Expense = {
        ...res,
        dateFromNow: {
          display: `${format(res.date, TIME_STAMP_FORMAT)} (${formatDistanceToNow(res.date, { addSuffix: true })})`,
          tooltip: `${new Date(res.date).toLocaleString()}`
        },
        dateAddedFromNow: {
          display: `${format(res.addedAtEpoch, TIME_STAMP_FORMAT)} (${formatDistanceToNow(res.addedAtEpoch, { addSuffix: true })})`,
          tooltip: `${new Date(res.addedAtEpoch).toLocaleString()}`
        },
        updatedAtFromNow: {
          display: `${format(res.updatedAtEpoch, TIME_STAMP_FORMAT)} (${formatDistanceToNow(res.updatedAtEpoch, { addSuffix: true })})`,
          tooltip: `${new Date(res.updatedAtEpoch).toLocaleString()}`
        },
      };
      return expense;
    }

    return res;
  } catch (error: Prisma.PrismaClientKnownRequestError | any) {
    console.log('Server error at getExpenseById(): ', JSON.stringify(error));
    throw new Error(`Expense could not be retrieved. Code: ${error.code}`);
  }
}

export async function getExpenseAndExpenseCommentsById(expenseId: string) {
  try {
    const res = await prisma.expense.findUnique({
      where: {
        id: expenseId
      },
      include: {
        account: true,
        comments: true
      }
    });
    return res;
  } catch (error: Prisma.PrismaClientKnownRequestError | any) {
    console.log('Server error at getExpenseAndExpenseCommentsById(): ', JSON.stringify(error));
    throw new Error(`Expense could not be retrieved. Code: ${error.code}`);
  }
}

export async function editExpense(expense: ExpenseEditable) {
  try {
    const res = await prisma.expense.update({
      where: {
        id: expense.id
      },
      data: {
        amount: +expense.amount,
        date: new Date(expense.date).getTime(),
        accountId: expense.accountId,
        updatedAtEpoch: Date.now()
      },
    });
    return res;
  } catch (error: Prisma.PrismaClientKnownRequestError | any) {
    console.log('Server error at editExpense(): ', JSON.stringify(error));
    throw new Error(`Expense could not be edited. Code: ${error.code}`);
  }
}