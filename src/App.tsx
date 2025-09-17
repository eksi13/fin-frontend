// Global styles
import './styles/index.css';

// React / Router libraries
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Layout components
import Header from './components/layout/Header';
import Nav from './components/layout/Nav';

// Page components
import Home from './components/Home';
import Transactions from './features/transactions/Transactions';
import Accounts from './features/accounts/Accounts';
import Categories from './features/categories/Categories';
import Dashboard from './components/Dashboard';

// Types

// Services

function App() {
  return (
    <div>
      <Header title=" " />
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/transactions" element={<Transactions />} />
          <>
            <Route path="/accounts" element={<Accounts />} />
          </>
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
