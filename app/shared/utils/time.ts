import format from "date-fns/format";
import type { AddableData } from "../models/data.model";
import type { Account } from "../models/account.model";

export function getDefaultValue(type: 'bank' | 'record' | null, initData?: AddableData) {
  const initBankData = {
    name: 'Test',
    ...initData?.account
  };
  
  const initRecordData = {
    amount: 100,
    date: format(new Date(), 'yyyy-MM-dd HH:mm'),
    bankId: '',
    ...initData?.expense
  };

  switch (type) {
    case 'bank': {
      return initBankData;
    }
    case 'record': {
      return initRecordData;
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