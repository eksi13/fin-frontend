// Types
import type { Category } from '../types/categoryTypes';
import type {
  SearchDates,
  SelectableItem,
  SearchAmounts,
} from '../../../types';

export function filterCategories(
  categories: Category[],
  type: SelectableItem[],
  searchDates: SearchDates,
  searchAmounts: SearchAmounts
) {
  return categories.filter(
    (cat) =>
      (searchDates.min === null || +cat.lastUpdated >= searchDates.min) &&
      (searchDates.max === null || +cat.lastUpdated <= searchDates.max) &&
      // && type[cat.type].status // TODO add when backend is adjusted
      (searchAmounts.min === null ||
        (cat.budget !== null && cat.budget >= searchAmounts.min)) &&
      (searchAmounts.max === null ||
        (cat.budget !== null && cat.budget <= searchAmounts.max))
  );
}
