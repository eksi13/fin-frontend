import type { Transaction } from '../types/transactionTypes';

export function mapTransactionData(rawTransaction: any): Transaction {
  return {
    ...rawTransaction,
    date: new Date(rawTransaction.date),
    lastUpdated: new Date(
      (rawTransaction.lastUpdated as string).replace(' ', 'T')
    ),
  };
}
