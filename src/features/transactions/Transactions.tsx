import { useState } from "react";

import type {
  SearchAmounts,
  SearchDates,
  SelectableItem,
} from "../../types";
import type { TransactionData } from "./types/dummyTransactions";

import { filterTransactions } from "../accounts/utils/filterTransactions";

import Items from "../../components/Items";
import SearchSection from "../../components/search/SearchSection";

type Props = {
  transactions: TransactionData[];
};

function Transactions({ transactions }: Props) {
  const [categorySearch, setCategorySearch] = useState<SelectableItem[]>([
    { id: 0, name: "Category 1", status: true },
    { id: 1, name: "Category 2", status: true },
    { id: 2, name: "Category 3", status: true },
  ]);

  const [accountSearch, setAccountSearch] = useState<SelectableItem[]>([
    { id: 0, name: "Checking (1)", status: true },
    { id: 1, name: "Savings (2)", status: true },
    { id: 2, name: "Credit (3)", status: true },
  ]);

  const [transactionTypeSearch, setTransactionTypeSearch] = useState<
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
        title={"Transactions"}
        items={filterTransactions(
          transactions,
          searchAmounts,
          searchDates,
          categorySearch,
          transactionTypeSearch,
          accountSearch
        )}
      />
      <SearchSection
        setSearchAmounts={setSearchAmounts}
        setSearchDates={setSearchDates}
        optionsSelectors={[
          { options: categorySearch, setter: setCategorySearch },
          { options: accountSearch, setter: setAccountSearch },
          { options: transactionTypeSearch, setter: setTransactionTypeSearch },
        ]}
      />
    </>
  );
}

export default Transactions;
