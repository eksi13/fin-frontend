
import type { CategoryData } from "../types/dummyCategories";
import type {
  SearchDates, 
  SelectableItem,
  SearchAmounts,
} from "../../../types";

export function filterCategories(
  categories: CategoryData[],
  type: SelectableItem[],
  searchDates: SearchDates,
  searchAmounts: SearchAmounts,
) {
  return categories.filter((cat) =>
    (searchDates.min === null || +cat.lastUpdated >= searchDates.min) && 
    (searchDates.max === null || +cat.lastUpdated <= searchDates.max) && 
    type[cat.type].status &&
    (searchAmounts.min === null || (cat.budget !== null && cat.budget >= searchAmounts.min)) &&
    (searchAmounts.max === null || (cat.budget !== null && cat.budget <= searchAmounts.max))
  );
}
