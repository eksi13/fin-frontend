import { useState } from 'react';

import type { SearchDates, SelectableItem } from '../../types';

import { filterAccounts } from './utils/filterAccounts';

import Items from '../../components/Items';
import SearchSection from '../../components/search/SearchSection';
import type { Account } from './types/accountTypes';

type Props = {
  accounts: Account[];
  errorMessage: string;
};

function Accounts({ accounts, errorMessage }: Props) {
  const [searchDates, setSearchDates] = useState<SearchDates>({
    min: 0,
    max: Date.now(),
  });

  const [currencySearch, setCurrencySearch] = useState<SelectableItem[]>([
    { id: 0, name: 'EUR (0)', status: true },
    { id: 1, name: 'USD (1)', status: true },
  ]);

  const [typeSearch, setTypeSearch] = useState<SelectableItem[]>([
    { id: 0, name: 'Checking (0)', status: true },
    { id: 1, name: 'Savings (1)', status: true },
    { id: 2, name: 'Cash (2)', status: true },
    { id: 3, name: 'Investment (3)', status: true },
  ]);

  return (
    <>
      <Items
        title={'Accounts'}
        items={filterAccounts(
          accounts,
          typeSearch,
          currencySearch,
          searchDates
        )}
        errorMessage={errorMessage}
      />
      <SearchSection
        setSearchDates={[setSearchDates]}
        optionsSelectors={[
          { options: typeSearch, setter: setTypeSearch },
          { options: currencySearch, setter: setCurrencySearch },
        ]}
      />
    </>
  );
}

export default Accounts;
