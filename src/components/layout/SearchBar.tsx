import '../../styles/index.css';
import '../../styles/searchbar.css';
import type {
  SearchDates,
  OptionSelectorConfig,
  SearchAmounts,
} from '../../types';
import NewSearchComponent from '../search/SearchComponent';
import SearchButton from '../search/SearchButton';
import useToggle from '../search/hooks/useToggle';

// Types

type Props = {
  name: string;
  setSearchDates: React.Dispatch<React.SetStateAction<SearchDates>>[];
  setSearchAmounts?: React.Dispatch<React.SetStateAction<SearchAmounts>>;
  optionsSelectors: OptionSelectorConfig[];
  subject: string;
};

function SearchBar({
  name,
  setSearchDates,
  setSearchAmounts,
  optionsSelectors,
  subject,
}: Props) {
  const { isOn, toggle } = useToggle(false);

  return (
    <nav className={isOn ? 'searchbar-on' : 'searchbar-off'}>
      {name}
      <SearchButton
        buttonClass={isOn ? 'button-searchbar' : 'button'}
        buttonText={isOn ? 'Hide Search Bar' : 'Show Search Bar'}
        handleClick={toggle}
      />

      {isOn && (
        <NewSearchComponent
          setSearchDates={setSearchDates}
          setSearchAmounts={setSearchAmounts}
          optionsSelectors={optionsSelectors}
          subject={subject}
        />
      )}
    </nav>
  );
}

export default SearchBar;
