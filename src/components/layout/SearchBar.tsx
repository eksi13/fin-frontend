import '../../styles/searchbar.css';
import '../../styles/index.css';
import type {
  SearchDates,
  OptionSelectorConfig,
  SearchAmounts,
} from '../../types';
import NewSearchComponent from '../search/NewSearchComponent';

// Types

type Props = {
  name: string;
  buttonClicked: boolean;
  setButtonClicked: React.Dispatch<React.SetStateAction<boolean>>;
  setSearchDates: React.Dispatch<React.SetStateAction<SearchDates>>[];
  setSearchAmounts?: React.Dispatch<React.SetStateAction<SearchAmounts>>;
  optionsSelectors: OptionSelectorConfig[];
};

function SearchBar({
  name,
  buttonClicked,
  setButtonClicked,
  setSearchDates,
  setSearchAmounts,
  optionsSelectors,
}: Props) {
  return (
    <nav className={buttonClicked ? 'searchbar-on' : 'searchbar-off'}>
      {name}
      <button
        className={buttonClicked ? 'button-searchbar' : 'button'}
        onClick={() => {
          setButtonClicked(!buttonClicked);
        }}
      >
        {buttonClicked ? "Hide Search Bar" : "Show Search Bar"}
      </button>

      {buttonClicked ? (
        <NewSearchComponent
          setSearchDates={setSearchDates}
          setSearchAmounts={setSearchAmounts}
          optionsSelectors={optionsSelectors}
        />
      ) : (
        <p>nothing --- search bar</p>
      )}
    </nav>
  );
}

export default SearchBar;
