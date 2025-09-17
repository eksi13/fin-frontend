// Styles
import '../../styles/index.css';

type Props = {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  handleSearch: React.FormEventHandler<HTMLFormElement>;
  subject: string;
};

function SearchItem({ search, subject, setSearch, handleSearch }: Props) {
  return (
    <form
      className="searchItem"
      onChange={(e) => {
        e.preventDefault();
      }}
      onSubmit={handleSearch}
    >
      <label htmlFor="search" />
      <input
        id="searchItem"
        type="text"
        role="searchbox"
        placeholder={`Search ${subject}`}
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
    </form>
  );
}

export default SearchItem;
