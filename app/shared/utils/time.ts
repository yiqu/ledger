import format from "date-fns/format";
import type { Account } from "../models/account.model";

export function getInitFormValue(type: 'account' | 'expense' | null, account?: Account | null) {
  switch (type) {
    case 'account': {
      return {
        name: '',
        shown: false
      };
    }
    case 'expense': {
      return {
        amount: '',
        date: format(new Date(), 'yyyy-MM-dd HH:mm'),
        accountId: account?.id || '',
        account: account ?? null,
      };
    }
    default: {
      return {};
    }
  }
}