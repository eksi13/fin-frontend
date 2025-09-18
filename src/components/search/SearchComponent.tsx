import '../../styles/searchbar.css';
import DateSearch from './DateSearch';
import type { SearchDates, OptionSelectorConfig, SearchAmounts } from '../../types';
import OptionSelector from './OptionSelector';
import AmountSearch from './AmountSearch';

type Props = {
  setSearchDates: React.Dispatch<React.SetStateAction<SearchDates>>[];
  setSearchAmounts?: React.Dispatch<React.SetStateAction<SearchAmounts>>;
  optionsSelectors: OptionSelectorConfig[];
  subject: string;
};

function SearchComponent({ setSearchDates, setSearchAmounts, optionsSelectors, subject }: Props) {
  return (
    <>
      {setSearchAmounts && <AmountSearch setSearchAmounts={setSearchAmounts} subject={subject} />}
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

export default SearchComponent;



  