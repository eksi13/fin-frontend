// Types
import type { Account } from '../types/accountTypes';

export function mapAccountData(rawAccount: any): Account {
  return {
    ...rawAccount,
    lastUpdated: new Date((rawAccount.lastUpdated as string).replace(' ', 'T')),
  };
}
