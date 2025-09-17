export interface RawAccount {
  id: number;
  name: string;
  balance: number;
  type: number;
  currency: number;
  lastUpdated: string;
}

export interface Account extends Omit<RawAccount, 'lastUpdated'> {
  lastUpdated: Date;
}
