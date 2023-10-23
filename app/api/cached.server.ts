import type { AccountWithPreCalculateExpenses } from "~/shared/models/account.model";

/**
 * This function is used to get banks with records for the home page.
 * Cached for 1 minute
 */
let cachedShownBanksAndRecords: CachedData<AccountWithPreCalculateExpenses[]> = {
  data: undefined,
  insertTime: 0
};