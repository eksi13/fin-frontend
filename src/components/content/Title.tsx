import '../../styles/items.css'

type Props = {
  title: string;
};

function Title({ title }: Props) {
  return <h2 className="title">{title}</h2>;
}

export default Title;
