import startCase from "lodash/startCase";

export const EXPENSES_TABLE_COLUMNS = ['account', 'amount', 'date', 'dateAdded', 'updatedAt', 'commentsCount', 'actions'];

export const ACCOUNTS_TABLE_COLUMNS = ['name', 'shown', 'category', 'dateAdded', 'updatedAt', "expensesCount", "actions"] as const;

export const transformColumnName = (colId: string) => {
  let result = colId;
  switch (colId) {
    case "account": {
      result = 'Account';
      break;
    }
    case "category": {
      result = 'Category';
      break;
    }
    case "amount": {
      result = 'Amount';
      break;
    }
    case "updatedAt": {
      result = 'Updated';
      break;
    }
    case "dateAdded": {
      result = 'Added';
      break;
    }
    case "expensesCount": {
      result = 'Expenses';
      break;
    }
    case "name": {
      result = 'Name';
      break;
    }
    case "shown": {
      result = 'Shown On Dashboard';
      break;
    }
    case "commentsCount": {
      result = 'Comments';
      break;
    }
    default: {
      result = startCase(colId);
    }
  }
  return result;
};