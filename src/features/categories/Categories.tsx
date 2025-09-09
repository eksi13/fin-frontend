import { useState } from "react";

import type {
  SearchAmounts,
  SearchDates,
  SelectableItem,
} from "../../types";

import Items from "../../components/Items";
import SearchSection from "../../components/search/SearchSection";
import type { CategoryData } from "./types/dummyCategories";
import { filterCategories } from "./utils/filterCategories";

type Props = {
  categories: CategoryData[];
};

function Categories({ categories }: Props) {
  const [categoryTypeSearch, setCategoryTypeSearch] = useState<
    SelectableItem[]
  >([
    { id: 0, name: "Income (0)", status: true },
    { id: 1, name: "Expense (1)", status: true },
  ]);

  const [searchAmounts, setSearchAmounts] = useState<SearchAmounts>({
    min: null,
    max: null,
  });

  const [searchDates, setSearchDates] = useState<SearchDates>({
    min: 0,
    max: Date.now(),
  });

  return (
    <>
      <Items
        title={"Categories"}
        items={filterCategories(
          categories,
          categoryTypeSearch,
          searchDates,
          searchAmounts
        )}
      />
      <SearchSection
        setSearchDates={setSearchDates}
        setSearchAmounts={setSearchAmounts}
        optionsSelectors={[
          { options: categoryTypeSearch, setter: setCategoryTypeSearch },
        ]}
      />
    </>
  );
}

export default Categories;
