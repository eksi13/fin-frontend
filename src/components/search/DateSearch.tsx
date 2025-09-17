// Styles
import '../../styles/index.css';

// Types
import type { SearchDates } from '../../types';
import type { AddItemFormElement } from '../../types/forms';

type Props = {
  setSearchDates: React.Dispatch<React.SetStateAction<SearchDates>>;
};

function DateSearch({ setSearchDates }: Props) {
  const handleDateSearch = (
    e: React.FormEvent<AddItemFormElement>,
    setDates: React.Dispatch<React.SetStateAction<SearchDates>>
  ) => {
    e.preventDefault();
    const newDateMin = Date.parse(e.currentTarget.elements.dateSearchMin.value);
    const newDateMax = Date.parse(e.currentTarget.elements.dateSearchMax.value);

    setDates({
      min: Number.isNaN(newDateMin) ? 0 : newDateMin,
      max: Number.isNaN(newDateMax) ? Date.now() : newDateMax,
    });
  };

  const handleSubmit = (e: React.FormEvent<AddItemFormElement>) => {
    handleDateSearch(e, setSearchDates);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="searchItem">
        <label htmlFor="meeting-time"></label>
        <input
          type="date"
          id="dateSearchMin"
          name="meeting-time"
          min="1999-01-01"
          max="2030-12-31"
        />
        <input
          type="date"
          id="dateSearchMax"
          name="meeting-time"
          min="1999-01-01"
          max="2030-12-31"
        />
        <button className="button" type="submit">Submit</button>
      </div>
    </form>
  );
}

export default DateSearch;
