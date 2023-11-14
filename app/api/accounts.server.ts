import { prisma } from "./database.server";
import type { Prisma } from "@prisma/client";
import { getDataSettingsByUserId } from "./settings.server";
import { USER_ID } from "~/shared/utils/constants";
import format from "date-fns/format";
import type { Account, AccountAddable, AccountUpdateable, AccountWithPreCalculateExpenses, DashboardChartData } from "~/shared/models/account.model";

export async function addAccount(item: AccountAddable) {
  try {
    const res = await prisma.account.create({
      data: item,
    });
    return res;
  } catch (error: Prisma.PrismaClientKnownRequestError | any) {
    console.log('Server error at addAccount(): ', JSON.stringify(error));
    if (error.code === 'P2002') {
      throw new Error(`Account name '${item.name}' already exists.`);
    }
    throw new Error(`Account name ${item.name} could not be added. Code: ${error.code}`);
  }

}

export async function getAccounts() {
  try {
    const res = await prisma.account.findMany({
      orderBy: {
        name: 'asc'
      },
      include: {
        _count: {
          select: { expenses: true }
        }
      }
    });
    return res;
  } catch (error: Prisma.PrismaClientKnownRequestError | any) {
    console.log('Server error at getAccounts(): ', JSON.stringify(error));
    throw new Error(`Accounts could not be retrieved. Code: ${error.code}`);
  }
}

export async function getAccount(accountId: string) {
  try {
    const res = await prisma.account.findUnique({
      where: {
        id: accountId
      }
    });
    return res;
  } catch (error: Prisma.PrismaClientKnownRequestError | any) {
    console.log('Server error at getAccount(): ', JSON.stringify(error));
    throw new Error(`Account could not be retrieved. Code: ${error.code}`);
  }
}

export async function updateAccount(accountId: string, item: AccountUpdateable) {
  try {
    const res = await prisma.account.update({
      where: {
        id: accountId
      },
      data: {
        name: item.name || undefined,
        shown: item.shown
      },
    });
    return res;
  } catch (error: Prisma.PrismaClientKnownRequestError | any) {
    console.log('Server error at updateAccount(): ', JSON.stringify(error));
    if (error.code === 'P2002') {
      throw new Error(`Account name '${item.name}' already exists.`);
    }
    throw new Error(`Account name ${item.name} could not be updated. Code: ${error.code}`);
  }
}

export async function deleteAccount(accountId: string) {
  try {
    const res = await prisma.account.delete({
      where: {
        id: accountId
      }
    });
    return res;
  } catch (error: Prisma.PrismaClientKnownRequestError | any) {
    console.log('Server error at deleteAccount(): ', JSON.stringify(error));
    throw new Error(`Account could not be deleted. Code: ${error.code}`);
  }
}

export async function getAccountExpenses(accountId: string) {
  try {
    const res = await prisma.account.findUnique({
      where: {
        id: accountId
      },
      include: {
        expenses: {
          orderBy: {
            date: 'desc'
          }
        }
      }
    });
    return res?.expenses;
  } catch (error: Prisma.PrismaClientKnownRequestError | any) {
    console.log('Server error at getAccountExpenses(): ', JSON.stringify(error));
    throw new Error(`Account expenses could not be retrieved. Code: ${error.code}`);
  }
}



export async function getShownAccountAndExpenses(): Promise<AccountWithPreCalculateExpenses[]> {

  const settings = await getDataSettingsByUserId(USER_ID);
  const dashboardCount: number = settings?.dashboardCount || 20;

  try {
    const shownAccounts = await prisma.account.findMany({
      where: {
        shown: true
      },
      orderBy: {
        dateAdded: 'desc'
      },
      include: {
        expenses: {
          orderBy: {
            date: 'desc'
          },
          take: dashboardCount,
        }
      }
    });

    const shownAccountIds = shownAccounts.map(account => account.id);

    const totalExpenseCountByAccountId = await prisma.expense.groupBy({
      by: ['accountId'],
      _count: {
        accountId: true
      },
      where: {
        accountId: {
          in: shownAccountIds
        }
      }
    });

    const accountsWithExpenseCount: AccountWithPreCalculateExpenses[] = shownAccounts.map(account => {
      const expenseCount = totalExpenseCountByAccountId.find(expense => expense.accountId === account.id);

      return {
        ...account,
        expenseCount: expenseCount?._count?.accountId || 0
      };
    });

    return accountsWithExpenseCount;
  } catch (error: Prisma.PrismaClientKnownRequestError | any) {
    console.log('Server error at getShownAccountAndExpenses(): ', JSON.stringify(error));
    throw new Error(`Account expenses could not be retrieved. Code: ${error.code}`);
  }
}

export async function getDashboardChartData(): Promise<DashboardChartData[]> {
  // Get all account data 
  const allAccountData = await prisma.account.findMany({
    where: {
      shown: true
    },
    orderBy: {
      dateAdded: 'desc'
    },
    include: {
      expenses: {
        orderBy: {
          date: 'desc'
        },
      }
    }
  });

  // get all unique dates for all entries
  const allAccountDataDateSet = new Set<string>();
  allAccountData.forEach((account) => {
    account.expenses.forEach((rec) => {
      allAccountDataDateSet.add(format((rec.date), 'MM/dd/yyyy'));
    });
  });

  const allAccountDataDateSetArray: string[] = Array.from(allAccountDataDateSet);
  allAccountDataDateSetArray.sort((a, b) => new Date(b).getTime() < new Date(a).getTime() ? 1 : -1);

  // create a data point for every date entry
  const dashboardChartData: DashboardChartData[] = allAccountDataDateSetArray.map((dateString: string) => {
    const data: DashboardChartData = {
      expenseDate: format(new Date(dateString), 'MM/dd/yyyy'),
      color: ''
    };

    allAccountData.forEach((account, index) => {
      const expense = account.expenses.find((rec) => format((rec.date), 'MM/dd/yyyy') === dateString);
      data[account.name] = expense?.amount || null;
    });

    return data;
  });

  return dashboardChartData;
}

export async function getShownAccounts(): Promise<Account[]> {
  try {
    const res = await prisma.account.findMany({
      where: {
        shown: true
      },
      orderBy: {
        name: 'asc'
      }
    });
    return res;
  } catch (error: Prisma.PrismaClientKnownRequestError | any) {
    console.log('Server error at getShownAccounts(): ', JSON.stringify(error));
    throw new Error(`Shown accounts could not be retrieved. Code: ${error.code}`);
  }
}