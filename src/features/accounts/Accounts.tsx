import { useState } from "react";

import type { SearchDates, SelectableItem } from "../../types";

import { filterAccounts } from "../transactions/utils/filterAccounts";

import Items from "../../components/Items";
import SearchSection from "../../components/search/SearchSection";
import type { AccountData } from "./types/dummyAccounts";

type Props = {
  accounts: AccountData[];
};

function Accounts({ accounts }: Props) {
  const [searchDates, setSearchDates] = useState<SearchDates>({
    min: 0,
    max: Date.now(),
  });

  const [currencySearch, setCurrencySearch] = useState<SelectableItem[]>([
    { id: 0, name: "USD (1)", status: true },
    { id: 1, name: "Savings (2)", status: true },
  ]);
  const [typeSearch, setTypeSearch] = useState<SelectableItem[]>([
    { id: 0, name: "Checking (1)", status: true },
    { id: 1, name: "Savings (2)", status: true },
    { id: 2, name: "Credit (3)", status: true },
  ]);

  return (
    <>
      <Items
        title={"Accounts"}
        items={filterAccounts(
          accounts,
          typeSearch,
          currencySearch,
          searchDates
        )}
      />
      <SearchSection
        setSearchDates={setSearchDates}
        optionsSelectors={[
          { options: typeSearch, setter: setTypeSearch },
          { options: currencySearch, setter: setCurrencySearch },
        ]}
      />
    </>
  );
}

export default Accounts;
