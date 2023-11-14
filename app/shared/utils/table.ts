import startCase from "lodash/startCase";

export const TABLE_COLUMNS = ['account',  'amount', 'date', 'dateAdded', 'updatedAt', 'actions'] as const;

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
    default: {
      result = startCase(colId);
    }
  }
  return result;
};