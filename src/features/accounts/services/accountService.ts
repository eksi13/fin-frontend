import type { Account } from '../types/accountTypes';
import { mapAccountData } from '../utils/mapAccountData';
import { fetchItems } from '../../../services/utils';

export async function fetchAccounts(
  API_URL: string
): Promise<Account[] | undefined> {
  try {
    const rawAccounts = await fetchItems(API_URL);
    return rawAccounts ? Object.values(rawAccounts).map(mapAccountData) : [];
  } catch (err: unknown) {
    throw err;
  }
}
