import AmountSearch from "./AmountSearch";
import DateSearch from "./DateSearch";
import OptionSelector from "./OptionSelector";
import type {
  SearchAmounts,
  SearchDates,
  OptionSelectorConfig,
} from "../../types";

type Props = {
  setSearchAmounts?: React.Dispatch<React.SetStateAction<SearchAmounts>>;
  setSearchDates: React.Dispatch<React.SetStateAction<SearchDates>>;
  optionsSelectors: OptionSelectorConfig[];
};

function SearchSection({
  setSearchAmounts,
  setSearchDates,
  optionsSelectors,
}: Props) {
  return (
    <>
      {setSearchAmounts && <AmountSearch setSearchAmounts={setSearchAmounts} />}
      <DateSearch setSearchDates={setSearchDates} />

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

export default SearchSection;
