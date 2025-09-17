// React / Router libraries
import { Link } from 'react-router';

// Styles
import '../../styles/Nav.css';

type Props = {};

function Nav({}: Props) {
  return (
    <nav className="nav">
      <div className="nav-title">Finance App Placeholder</div>
      <ul className="nav-ul">
        <li className="nav-li">
          {' '}
          <Link to="/dashboard"> Dashboard </Link>
        </li>
        <li className="nav-li">
          {' '}
          <Link to="/transactions"> Transactions </Link>
        </li>
        <li className="nav-li">
          {' '}
          <Link to="/accounts"> Accounts </Link>
        </li>
        <li className="nav-li">
          {' '}
          <Link to="/categories"> Categories </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
