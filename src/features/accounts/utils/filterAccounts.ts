import type { Account } from '../types/accountTypes';
import type { SearchDates, SelectableItem } from '../../../types';

export function filterAccounts(
  accounts: Account[],
  type: SelectableItem[],
  currency: SelectableItem[],
  { min, max }: SearchDates
) {
  return accounts.filter(
    (acc) =>
      (min === null || +acc.lastUpdated >= min) &&
      (max === null || +acc.lastUpdated <= max) &&
      type[acc.type].status &&
      currency[acc.currency].status
  );
}
