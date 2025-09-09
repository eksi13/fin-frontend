import Row from "./Row";
import type { hasID } from "../../types";
import Cell from "./Cell";

type Props<T extends hasID> = {
  items: T[];
};

function Table<T extends hasID>({ items }: Props<T>) {
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
