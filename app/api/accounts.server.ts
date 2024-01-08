import { prisma } from "./database.server";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import type { Prisma } from "@prisma/client";
import { getDataSettingsByUserId } from "./settings.server";
import { USER_ID } from "~/shared/utils/constants";
import type {
  Account, AccountAddable, AccountUpdateable, AccountWithPreCalculateExpenses,
  DashboardChartData
} from "~/shared/models/account.model";
import { getEpochFromSimpleDate } from "./utils/utils.server";

export async function addAccount(item: AccountAddable) {
  try {
    const res = await prisma.account.create({
      data: {
        ...item,
        dateAddedEpoch: Date.now(),
        updatedAtEpoch: 0
      },
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

export async function getAccountsPaged(page: number, filterString: string | null) {
  const pageSize = 25;
  const offset = page * pageSize;
  const totalCount: number = await prisma.account.count();
  const filter = (filterString !== null) ? filterString.trim() : '';

  try {
    const res = await prisma.account.findMany({
      orderBy: {
        name: 'asc'
      },
      skip: offset,
      take: pageSize,
      where: {
        name: {
          contains: filter,
          mode: 'insensitive'
        }
      },
      include: {
        _count: {
          select: { expenses: true }
        }
      }
    });

    const currentResultSetCount: number = await prisma.account.count({
      where: {
        name: {
          contains: filter,
          mode: 'insensitive'
        }
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
    console.log('Server error at getAccountsPaged(): ', JSON.stringify(error));
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
        shown: item.shown,
        updatedAtEpoch: Date.now()
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

export async function getDashboardChartData(year: string): Promise<DashboardChartData[]> {
  const yearStartInEpoch: number = new Date(+year, 0, 1).getTime();
  const yearEndInEpoch: number = new Date(+year, 11, 31).getTime() + 86400000; // add 1 day to include the last day of the year

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
        where: {
          date: {
            gte: yearStartInEpoch,
            lte: yearEndInEpoch
          }
        }
      }
    }
  });

  const dashboardData: { [dateString: string]: DashboardChartData } = {};
  allAccountData.forEach((account, index) => {
    account.expenses.forEach((rec) => {
      const expenseDate: string = `${(new Date(rec.date).getMonth()) + 1}/${new Date(rec.date).getFullYear()}`;
      const accountName = account.name;
      if (dashboardData[expenseDate]) {
        if (dashboardData[expenseDate][accountName] !== undefined && dashboardData[expenseDate][accountName] !== null) {
          dashboardData[expenseDate][accountName] = (+(dashboardData[expenseDate][accountName]!) + rec.amount);
          dashboardData[expenseDate][accountName] = Math.round(+(dashboardData[expenseDate][accountName]!) * 100) / 100;
        } else {
          dashboardData[expenseDate][accountName] = rec.amount;
        }
      } else {
        dashboardData[expenseDate] = {
          [accountName]: rec.amount,
        };
      }
    });
  });

  // convert to array
  const expenseDateString: string[] = Object.keys(dashboardData); // format: M/YYYY
  const allMonthsDateString = [...Array(12).keys()].map((month) => `${month + 1}/${year}`);

  const dashboardDataArray: DashboardChartData[] = expenseDateString.map((dateKey: string) => {
    const data: DashboardChartData = {
      expenseDate: dateKey,
      expenseDateInEpoch: getEpochFromSimpleDate(dateKey),
      color: ''
    };
    Object.keys(dashboardData[dateKey]).forEach((accountName) => {
      data[accountName] = dashboardData[dateKey][accountName];
    });
    return data;
  });

  // fill in missing months
  allMonthsDateString.forEach((month) => {
    if (!dashboardDataArray.find((data) => data.expenseDate === month)) {
      dashboardDataArray.push({
        expenseDate: month,
        expenseDateInEpoch: getEpochFromSimpleDate(month),
        color: ''
      });
    }
  });

  // sort by date
  const dashboardDataArraySorted = dashboardDataArray.toSorted((a: DashboardChartData, b: DashboardChartData) => {
    return (a.expenseDateInEpoch ?? 0) > (b.expenseDateInEpoch ?? 0) ? 1 : -1;
  });

  return dashboardDataArraySorted;
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