import { useState } from 'react';

import type { SearchAmounts, SearchDates, SelectableItem } from '../../types';
import type { Transaction } from './types/transactionTypes';

import { filterTransactions } from './utils/filterTransactions';

import Items from '../../components/Items';
import SearchSection from '../../components/search/SearchSection';

type Props = {
  transactions: Transaction[];
  errorMessage: string;
};

function Transactions({ transactions, errorMessage }: Props) {
  const [categorySearch, setCategorySearch] = useState<SelectableItem[]>([
    { id: 0, name: 'Category 1', status: true },
    { id: 1, name: 'Category 2', status: true },
    { id: 2, name: 'Category 3', status: true },
  ]);

  const [accountSearch, setAccountSearch] = useState<SelectableItem[]>([
    { id: 0, name: 'Account 1', status: true },
    { id: 1, name: 'Account 2', status: true },
    { id: 2, name: 'Account 3', status: true },
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

  return (
    <>
      <Items
        title={'Transactions'}
        items={
          // transactions
          filterTransactions(
            transactions,
            searchAmounts,
            searchDates,
            searchLastUpdated,
            categorySearch,
            transactionTypeSearch,
            accountSearch
          )
        }
        errorMessage={errorMessage}
      />
      <SearchSection
        setSearchAmounts={setSearchAmounts}
        setSearchDates={[setSearchDates, setSearchUpdated]}
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
