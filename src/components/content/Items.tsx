// Styles
import '../../styles/index.css'
import '../../styles/Table.css';

// Table Components
import Table from '../table/Table';

// Types
import type { HasID } from '../../types';

type Props<T extends HasID> = {
  items: Array<T>;
  errorMessage: string;
};

function Items<T extends HasID>({ items, errorMessage }: Props<T>) {
  return (
    <>
      <div className="items">
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
