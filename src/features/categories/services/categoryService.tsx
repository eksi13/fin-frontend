import type { Category } from '../types/categoryTypes';
import { mapCategoryData } from '../utils/mapCategoryData';
import { fetchItems } from '../../../services/utils';

export async function fetchCategories(
  API_URL: string
): Promise<Category[] | undefined> {
  try {
    const rawCategories = await fetchItems(API_URL);
    return rawCategories
      ? Object.values(rawCategories).map(mapCategoryData)
      : [];
  } catch (err: unknown) {
    throw err;
  }
}
