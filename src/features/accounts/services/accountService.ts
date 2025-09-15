import type { Account } from '../types/accountTypes';
import { mapAccount } from '../utils/mapAccountData';

export async function fetchAccounts(
  API_URL: string
): Promise<Account[] | undefined> {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error(
      `Failed to fetch accounts: ${response.status} ${response.statusText}`
    );
  }
  const rawAccounts = await response.json();
  return Object.values(rawAccounts).map((rawAccount) => mapAccount(rawAccount));
  // setFetchError('');
}