export interface RawTransaction {
  id: number;
  amount: number;
  categoryId: number;
  accountId: number;
  type: number;
  description: string;
  date: string;
  lastUpdated: string;
}

export interface Transaction
  extends Omit<RawTransaction, 'date' | 'lastUpdated'> {
  date: Date;
  lastUpdated: Date;
}
