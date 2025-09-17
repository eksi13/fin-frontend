// Styles
import '../styles/Items.css';
import '../styles/Table.css';

// Table Components
import Table from './table/Table';

// Types
import type { HasID } from '../types';

type Props<T extends HasID> = {
  items: Array<T>;
  title: string;
  errorMessage: string;
};

function Items<T extends HasID>({ title, items, errorMessage }: Props<T>) {
  return (
    <>
      <div className="items">
        <h2 className="title">{title}</h2>
        {/* <div className="search-bar"></div> */}
        {items.length ? (
          <>
            <div className="table-container">
              <Table items={items} />
            </div>
          </>
        ) : (
          <p className="error">{errorMessage}</p>
        )}
      </div>
    </>
  );
}

export default Items;
