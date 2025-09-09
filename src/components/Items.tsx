import "../styles/Items.css";
import "../styles/Table.css";
import Table from "./table/Table";
import type { hasID } from "../types";

type Props<T extends hasID> = {
  items: Array<T>;
  title: string;
};

function Items<T extends hasID>({ title, items }: Props<T>) {
  return (
    <div className="items">
      {items.length ? (
        <>
          <h2 className="title">{title}</h2>
          <div className="table-container">
            <Table items={items} />
          </div>
        </>
      ) : (
        <p>{`no ${title.toLowerCase()} found`}</p>
      )}
    </div>
  );
}

export default Items;
