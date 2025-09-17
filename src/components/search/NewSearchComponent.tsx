import '../../styles/searchbar.css';
import DateSearch from '../search/DateSearch';
import type { SearchDates, OptionSelectorConfig, SearchAmounts } from '../../types';
import OptionSelector from '../search/OptionSelector';
import AmountSearch from './AmountSearch';

type Props = {
  setSearchDates: React.Dispatch<React.SetStateAction<SearchDates>>[];
  setSearchAmounts?: React.Dispatch<React.SetStateAction<SearchAmounts>>;
  optionsSelectors: OptionSelectorConfig[];
};

function NewSearchComponent({ setSearchDates, setSearchAmounts, optionsSelectors }: Props) {
  return (
    <>
      {setSearchAmounts && <AmountSearch setSearchAmounts={setSearchAmounts} />}
      {setSearchDates.map((setter, i) => (
        <DateSearch key={i} setSearchDates={setter} />
      ))}
      {optionsSelectors.map((item, index) => (
        <OptionSelector
          key={index}
          options={item.options}
          setter={item.setter}
        />
      ))}
    </>
  );
}

export default NewSearchComponent;



  