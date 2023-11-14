import type { AccountWithPreCalculateExpenses } from "~/shared/models/account.model";

/**
 * This function is used to get accounts and expenses for the home page.
 * Cached for 1 minute
 */
let cachedShownAccountsAndExpenses: CachedData<AccountWithPreCalculateExpenses[]> = {
  data: undefined,
  insertTime: 0
};