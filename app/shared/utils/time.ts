import format from "date-fns/format";
import type { AddableData } from "../models/data.model";
import type { Account } from "../models/account.model";

export function getDefaultValue(type: 'account' | 'expense' | null, initData?: AddableData) {
  const initAccountData = {
    name: 'Test',
    ...initData?.account
  };
  
  const initExpenseData = {
    amount: 100,
    date: format(new Date(), 'yyyy-MM-dd HH:mm'),
    accountId: '',
    ...initData?.expense
  };

  switch (type) {
    case 'account': {
      return initAccountData;
    }
    case 'expense': {
      return initExpenseData;
    }
    default: {
      return {};
    }
  }
}

export const getInitAddableData = (account?: Account): AddableData => {
  return {
    expense: {
      amount: 1000,
      date: format(new Date(), 'yyyy-MM-dd HH:mm'),
      accountId: '',
      account: account || null
    },
    account: {
      name: 'My Boba Account',
      shown: true
    }
  };
};