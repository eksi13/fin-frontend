// React
import { useEffect, useState } from 'react';

// Types
import type { Category } from './types/categoryTypes';
import type { SearchAmounts, SearchDates, SelectableItem } from '../../types';

// Utilities / Services
import { filterCategories } from './utils/filterCategories';
import { fetchCategories } from './services/categoryService';

// Components
import Items from '../../components/Items';
import SearchSection from '../../components/search/SearchSection';

type Props = {};

function Categories({}: Props) {
  const [categoryTypeSearch, setCategoryTypeSearch] = useState<
    SelectableItem[]
  >([
    { id: 0, name: 'Income (0)', status: true },
    { id: 1, name: 'Expense (1)', status: true },
  ]);

  const [searchAmounts, setSearchAmounts] = useState<SearchAmounts>({
    min: null,
    max: null,
  });

  const [searchDates, setSearchDates] = useState<SearchDates>({
    min: 0,
    max: Date.now(),
  });

  const [categories, setCategories] = useState<Category[]>([]);
  const [fetchError, setfetchError] = useState<string>('');
  const API_URL = String(import.meta.env.VITE_API_URL + 'categories');

  useEffect(() => {
    fetchCategories(API_URL)
      .then((categories) => {
        setCategories(categories || []);
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
        title={'Categories'}
        items={filterCategories(
          categories,
          categoryTypeSearch,
          searchDates,
          searchAmounts
        )}
        errorMessage={fetchError}
      />
      <SearchSection
        setSearchDates={[setSearchDates]}
        setSearchAmounts={setSearchAmounts}
        optionsSelectors={[
          { options: categoryTypeSearch, setter: setCategoryTypeSearch },
        ]}
      />
    </>
  );
}

export default Categories;
