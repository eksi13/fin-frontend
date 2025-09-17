import { useEffect, useState } from 'react';

import type { SearchDates, SelectableItem } from '../../types';

import { filterAccounts } from './utils/filterAccounts';

import Items from '../../components/Items';
import SearchSection from '../../components/search/SearchSection';
import type { Account } from './types/accountTypes';
import { fetchAccounts } from './services/accountService';

type Props = {};

function Accounts({}: Props) {
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

  const API_URL = String(import.meta.env.VITE_API_URL);
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [fetchError, setfetchError] = useState<string>('');

  useEffect(() => {
    console.log('accounts component');
    fetchAccounts(API_URL + 'accounts')
      .then((accounts) => {
        setAccounts(accounts || []);
      })
      .catch((err: unknown) => {
        err instanceof Error
          ? setfetchError(err.message)
          : setfetchError('unknown error');
      });
  }, []);

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
        errorMessage={fetchError}
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
