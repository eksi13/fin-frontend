// Table Components
import Row from './Row';
import Cell from './Cell';

// Types
import type { HasID } from '../../types';

type Props<T extends HasID> = {
  items: T[];
};

function Table<T extends HasID>({ items }: Props<T>) {
  const keys = Object.keys(items[0]);
  return (
    <table>
      <tbody>
        <tr>
          {keys.map((key) => (
            <Cell key={key} value={key} />
          ))}
        </tr>
        {items.map((item) => (
          <Row key={item.id} item={item} />
        ))}
      </tbody>
    </table>
  );
}

export default Table;
