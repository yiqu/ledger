import { splitNumberByDot } from "~/shared/utils/number.utils";
import { convertDateDisplay } from "./date.server";
import type { AccountWithExpenses, AccountWithPreCalculateExpenses } from "~/shared/models/account.model";
import type { ExpenseDisplay, ExpenseWithoutAccount } from "~/shared/models/expense.model";

export function calculateGainRateForAccount(account: AccountWithPreCalculateExpenses): AccountWithExpenses {
  const expensesCopy: ExpenseWithoutAccount[] = [...account.expenses]; 
  const result: ExpenseDisplay[] = [];
  const totalAmount = expensesCopy.reduce((acc, expense) => {
    return acc + expense.amount;
  }, 0);

  const latest = expensesCopy[0]?.amount ?? 0;
  const [latestInteger, latestDecimal] = splitNumberByDot(latest);

  // 1, 3  3-1=2  2/1 = 2  which is 200%
  expensesCopy.reverse();
  expensesCopy.forEach((expense, index) => {
    const [integer, decimal] = splitNumberByDot(expense.amount);
    const gain = (index === 0) ? 0 : expense.amount - expensesCopy[index - 1].amount;
    const [gainInteger, gainDecimal] = splitNumberByDot(gain);
    const percentage = (index === 0) ? 0 : (gain / expensesCopy[index - 1].amount) * 100;

    let bgColorClassName: string = '';
    if (percentage === 0) {
      bgColorClassName = 'no-change-bg';
    } else if (percentage < 0 && percentage > -3) {
      bgColorClassName = 'neg-bg-1';
    } else if (percentage <= -3 && percentage > -5) {
      bgColorClassName = 'neg-bg-2';
    } else if (percentage <= -5) {
      bgColorClassName = 'neg-bg-3';
    } else if (percentage > 0) {
      bgColorClassName = 'pos-bg';
    } else {
      bgColorClassName = '';
    }
    
    result.push({
      ...expense,
      dateFromNowDisplay: convertDateDisplay(expense.date, 'fromNow'),
      dateFullDisplay: convertDateDisplay(expense.date, 'full'),
      amountOfInteger: integer,
      amountOfDecimal: decimal,
      gainAmount: gain,
      gainAmountOfInteger: Math.abs(gainInteger),
      gainAmountOfDecimal: gainDecimal,
      gainPercentage: percentage,
      bgColorClassName: bgColorClassName,
      textColorClassName: (gain > 0) ? "positive" : (gain === 0 ? "no-change" : 'negative'),
    });
  });
  
  const expenseData = result.sort((a, b) => a.date < b.date ? 1 : -1);

  return {
    ...account,
    totalAmount: latest,
    totalAmountOfInteger: latestInteger,
    totalAmountOfDecimal: latestDecimal,
    expenses: expenseData,
    dashboardDisplayHasMore: account.expenseCount > account.expenses.length,
  };
}