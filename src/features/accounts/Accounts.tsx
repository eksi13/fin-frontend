// React
import { useEffect, useState } from 'react';

// Types
import type { Account } from './types/accountTypes';
import type { SearchDates, SelectableItem } from '../../types';

// Utilities / Services
import { filterAccounts } from './utils/filterAccounts';
import { fetchAccounts } from './services/accountService';

// Components
import Items from '../../components/content/Items';
import SearchBar from '../../components/layout/SearchBar';
import Title from '../../components/content/Title';

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

  const API_URL = String(import.meta.env.VITE_API_URL + 'accounts');
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [fetchError, setfetchError] = useState<string>('');

  useEffect(() => {
    fetchAccounts(API_URL)
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
      <Title title={'Accounts'} />
      <Items
        items={filterAccounts(
          accounts,
          typeSearch,
          currencySearch,
          searchDates
        )}
        errorMessage={fetchError}
      />
      <SearchBar
        name={'Accounts'}
        setSearchDates={[setSearchDates]}
        optionsSelectors={[
          { options: typeSearch, setter: setTypeSearch },
          { options: currencySearch, setter: setCurrencySearch },
        ]}
        subject={'Amount'}
      />
    </>
  );
}

export default Accounts;
