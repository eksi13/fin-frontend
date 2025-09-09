import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/layout/Header";
import Nav from "./components/layout/Nav";
import Home from "./components/Home";

import { transactions } from "./features/transactions/types/dummyTransactions";
import { accounts } from "./features/accounts/types/dummyAccounts";
import { categories } from "./features/categories/types/dummyCategories";
import Transactions from "./features/transactions/Transactions";
import Accounts from "./features/accounts/Accounts";
import Categories from "./features/categories/Categories";



function App() {
  const tas = transactions;
  const accs = accounts;
  const cats = categories;

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
          <Route path="/accounts" element={<Accounts accounts={accs} />} />
          <Route
            path="/categories"
            element={<Categories categories={cats}/>}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
