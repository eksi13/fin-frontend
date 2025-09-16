import type { Transaction } from '../types/transactionTypes';
import { mapTransactionData } from '../utils/mapTransactionData';
import { fetchItems } from '../../../services/utils';

export async function fetchTransaction(
  API_URL: string
): Promise<Transaction[] | undefined> {
  try {
    const rawTransactions = await fetchItems(API_URL);
    return rawTransactions
      ? Object.values(rawTransactions).map(mapTransactionData)
      : [];
  } catch (err: unknown) {
    throw err;
  }
}
