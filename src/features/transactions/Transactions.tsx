// React
import { useEffect, useState } from 'react';

// Types
import type { Transaction } from './types/transactionTypes';
import type { SearchAmounts, SearchDates, SelectableItem } from '../../types';

// Utilities / Services
import { filterTransactions } from './utils/filterTransactions';
import { fetchTransactions } from './services/transactionService';

// Components
import Items from '../../components/content/Items';
import SearchBar from '../../components/layout/SearchBar';
import Title from '../../components/content/Title';

type Props = {};

function Transactions({}: Props) {
  const [categorySearch, setCategorySearch] = useState<SelectableItem[]>([
    { id: 0, name: 'Category 0', status: true },
    { id: 1, name: 'Category 1', status: true },
    { id: 2, name: 'Category 2', status: true },
  ]);

  const [accountSearch, setAccountSearch] = useState<SelectableItem[]>([
    { id: 0, name: 'Account 0', status: true },
    { id: 1, name: 'Account 1', status: true },
    { id: 2, name: 'Account 2', status: true },
  ]);

  const [transactionTypeSearch, setTransactionTypeSearch] = useState<
    SelectableItem[]
  >([
    { id: 0, name: 'Income 0', status: true },
    { id: 1, name: 'Expense 1', status: true },
  ]);

  const [searchAmounts, setSearchAmounts] = useState<SearchAmounts>({
    min: null,
    max: null,
  });

  const [searchDates, setSearchDates] = useState<SearchDates>({
    min: 0,
    max: Date.now(),
  });

  const [searchLastUpdated, setSearchUpdated] = useState<SearchDates>({
    min: 0,
    max: Date.now(),
  });

  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [fetchError, setfetchError] = useState<string>('');

  const API_URL = String(import.meta.env.VITE_API_URL + 'transactions');

  useEffect(() => {
    fetchTransactions(API_URL)
      .then((transactions) => {
        setTransactions(transactions || []);
      })
      .catch((err: unknown) => {
        err instanceof Error
          ? setfetchError(err.message)
          : setfetchError('unknown error');
      });
  }, []);

  return (
    <>
      <Title title={'Transactions'}/>
      <Items
        items={filterTransactions(
          transactions,
          searchAmounts,
          searchDates,
          searchLastUpdated,
          categorySearch,
          transactionTypeSearch,
          accountSearch
        )}
        errorMessage={fetchError}
      />
      <SearchBar
        name={'Transactions'}
        setSearchDates={[setSearchDates, setSearchUpdated]}
        setSearchAmounts={setSearchAmounts}
        optionsSelectors={[
          { options: categorySearch, setter: setCategorySearch },
          { options: accountSearch, setter: setAccountSearch },
          { options: transactionTypeSearch, setter: setTransactionTypeSearch },
        ]}
        subject={'Amount'}
      />
    </>
  );
}

export default Transactions;
