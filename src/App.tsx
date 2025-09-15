import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './components/layout/Header';
import Nav from './components/layout/Nav';
import Home from './components/Home';

import { transactions } from './features/transactions/types/dummyTransactions';
import { type Account } from './features/accounts/types/accountTypes';
import Transactions from './features/transactions/Transactions';
import Accounts from './features/accounts/Accounts';
import Categories from './features/categories/Categories';
import { useEffect, useState } from 'react';
import { fetchAccounts } from './features/accounts/services/accountService';
import type { Category } from './features/categories/types/categoryTypes';
import { fetchCategories } from './features/categories/services/categoryService';

function App() {
  const API_URL = 'http://localhost:3000/';

  const tas = transactions;

  const [accounts, setAccounts] = useState<Account[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);

  const [fetchErrorAccount, setfetchErrorAccount] = useState<string>('');
  const [fetchErrorCategory, setfetchErrorCategory] = useState<string>('');

  useEffect(() => {
    fetchAccounts(API_URL + "accounts")
      .then((accounts) => {
        setAccounts(accounts || []);
      })
      .catch((err: unknown) => {
        err instanceof Error
          ? setfetchErrorAccount(err.message)
          : setfetchErrorAccount('unknown error');
      });
    fetchCategories(API_URL + "categories")
      .then((categories) => {
        setCategories(categories || []);
      })
      .catch((err: unknown) => {
        err instanceof Error
          ? setfetchErrorCategory(err.message)
          : setfetchErrorCategory('unknown error');
      });
  }, []);

  return (
    <div>
      <Header title=" " />
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/transactions"
            element={<Transactions transactions={tas} />}
          />
          <>
            <Route
              path="/accounts"
              element={
                <Accounts accounts={accounts} errorMessage={fetchErrorAccount} />
              }
            />
          </>
          <Route
            path="/categories"
            element={<Categories categories={categories} errorMessage={fetchErrorCategory} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
