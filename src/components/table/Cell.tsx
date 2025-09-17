// Styles
import '../../styles/Table.css';

type Props = {
  value: string;
};

function Cell({ value }: Props) {
  return <td>{value}</td>;
}

export default Cell;
