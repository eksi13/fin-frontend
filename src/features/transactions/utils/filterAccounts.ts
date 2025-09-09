import type { AccountData } from "../../accounts/types/dummyAccounts";
import type {
  SearchDates, 
  SelectableItem,
} from "../../../types";

export function filterAccounts(
  accounts: AccountData[],
  type: SelectableItem[],
  currency: SelectableItem[],
  searchDates: SearchDates,
) {
  return accounts.filter((acc) =>
    (searchDates.min === null || +acc.lastUpdated >= searchDates.min) &&
    (searchDates.max === null || +acc.lastUpdated <= searchDates.max) &&
    type[acc.type - 1].status &&
    currency[acc.currency - 1].status
  );
}
