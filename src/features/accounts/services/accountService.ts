// Types
import type { Account } from '../types/accountTypes';

// Services / Utils
import { fetchItems } from '../../../services/utils';
import { mapAccountData } from '../utils/mapAccountData';

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
