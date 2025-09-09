type Props = {
  title: string;
};

function Header({ title }: Props) {
  return (
    <header className="header">
      <h1>{title}</h1>
    </header>
  );
};

export default Header;
