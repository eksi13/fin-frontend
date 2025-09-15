import { useState } from "react";

import type {
  SearchAmounts,
  SearchDates,
  SelectableItem,
} from "../../types";

import Items from "../../components/Items";
import SearchSection from "../../components/search/SearchSection";
import { filterCategories } from "./utils/filterCategories";
import type { Category } from "./types/categoryTypes";

type Props = {
  categories: Category[];
  errorMessage: string;
};

function Categories({ categories, errorMessage }: Props) {
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
        items={categories
        //   filterCategories(
        //   categories,
        //   categoryTypeSearch,
        //   searchDates,
        //   searchAmounts
        // )
      }
        errorMessage={errorMessage}

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
