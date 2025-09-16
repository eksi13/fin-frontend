import type { Transaction } from "../types/transactionTypes";

export function mapTransactionData(rawTransaction: any): Transaction {
  return {
    ...rawTransaction,
    lastUpdated: new Date((rawTransaction.lastUpdated as string).replace(' ', 'T')),
  };
}