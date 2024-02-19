import startCase from "lodash/startCase";

export const EXPENSES_TABLE_COLUMNS = ['account', 'amount', 'date', 'dateAdded', 'updatedAt', 'commentsCount', 'actions'];

export const ACCOUNTS_TABLE_COLUMNS = ['name', 'category', 'shown', "expensesCount", 'dateAdded', 'updatedAt', "actions"];

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
    case "actions": {
      result = '';
      break;
    }
    default: {
      result = startCase(colId);
    }
  }
  return result;
};


export const getColumnWidth = (colId: string) => {
  let result = 'auto';
  switch (colId) {
    case "account": {
      result = 'auto';
      break;
    }
    case "category": {
      result = '11%';
      break;
    }
    case "amount": {
      result = '14%';
      break;
    }
    case "updatedAt": {
      result = '8%';
      break;
    }
    case "dateAdded": {
      result = '8%';
      break;
    }
    case "expensesCount": {
      result = '7.5%';
      break;
    }
    case "name": {
      result = '15%';
      break;
    }
    case "shown": {
      result = '7%';
      break;
    }
    case "commentsCount": {
      result = '8%';
      break;
    }
    case "actions": {
      result = '6%';
      break;
    }
    default: {
      result = startCase(colId);
    }
  }
  return result;
};