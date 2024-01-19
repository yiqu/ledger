import startCase from "lodash/startCase";

export const TABLE_COLUMNS = ['account', 'amount', 'date', 'dateAdded', 'updatedAt', 'actions'] as const;

export const ACCOUNTS_TABLE_COLUMNS = ['name', 'shown', 'dateAdded', 'updatedAt', "expensesCount", "actions"] as const;

export const transformColumnName = (colId: string) => {
  let result = colId;
  switch (colId) {
    case "account": {
      result = 'Account';
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
      result = 'Expenses Count';
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
    default: {
      result = startCase(colId);
    }
  }
  return result;
};