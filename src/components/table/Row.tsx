// Table Components
import Cell from './Cell';

type Props<T extends { [key: string]: any }> = {
  item: T;
};

function Row<T extends Object>({ item }: Props<T>) {
  return (
    <tr>
      {Object.entries(item).map(([key, value]) => (
        <Cell key={key} value={value != null ? value.toString() : 'null'} />
      ))}
    </tr>
  );
}

export default Row;
