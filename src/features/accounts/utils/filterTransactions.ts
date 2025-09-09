import type { TransactionData } from "../features/transactions/types/dummyTransactions";
import type {
  SearchAmounts,
  SearchDates,
  SelectableItem,
} from "../types";

export function filterTransactions(
  transactions: TransactionData[],
  searchAmounts: SearchAmounts,
  searchDates: SearchDates,
  categories: SelectableItem[],
  transactionTypes: SelectableItem[],
  accounts: SelectableItem[]
) {
  return transactions.filter((ta) =>
    (searchAmounts.min === null || ta.amount >= searchAmounts.min) &&
    (searchAmounts.max === null || ta.amount <= searchAmounts.max) &&
    (searchDates.min === null || +ta.date >= searchDates.min) &&
    (searchDates.max === null || +ta.date <= searchDates.max) &&
    categories[ta.categoryId - 1].status &&
    transactionTypes[ta.type].status &&
    accounts[ta.accountId - 1].status
  );
}
