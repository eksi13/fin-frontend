export interface TransactionData {
  id: number;
  amount: number;
  date: Date;
  categoryId: number;
  accountId: number;
  type: number;
}

export const transactions: TransactionData[] = [];

transactions.push(
  {
    id: 1,
    amount: 100,
    date: new Date("2025-08-01"),
    categoryId: 1,
    accountId: 1,
    type: 0,
  },
  {
    id: 2,
    amount: 50,
    date: new Date("2025-08-02"),
    categoryId: 2,
    accountId: 1,
    type: 1,
  },
  {
    id: 3,
    amount: 200,
    date: new Date("2025-08-03"),
    categoryId: 1,
    accountId: 2,
    type: 0,
  },
  {
    id: 4,
    amount: 75,
    date: new Date("2025-08-04"),
    categoryId: 3,
    accountId: 3,
    type: 1,
  },
  {
    id: 5,
    amount: 150,
    date: new Date("2025-08-05"),
    categoryId: 2,
    accountId: 2,
    type: 0,
  }
);
