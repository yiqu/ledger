import formatInTimeZone from 'date-fns-tz/formatInTimeZone';
import type { Account } from "../models/account.model";
import { EST_TIME_ZONE } from "~/api/utils/utils.server";

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
        date: formatInTimeZone(new Date(), EST_TIME_ZONE, 'yyyy-MM-dd HH:mm'),
        accountId: account?.id || '',
        account: account ?? null,
      };
    }
    default: {
      return {};
    }
  }
}