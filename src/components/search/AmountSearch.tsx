// Styles
import '../../styles/index.css';

// Page Components
import type { SearchAmounts } from '../../types';

// Types
import type { AddItemFormElement } from '../../types/forms';

type Props = {
  setSearchAmounts: React.Dispatch<React.SetStateAction<SearchAmounts>>;
};

function AmountSearch({ setSearchAmounts }: Props) {
  const handleAmountSearch = (
    e: React.FormEvent<AddItemFormElement>,
    setAmounts: React.Dispatch<React.SetStateAction<SearchAmounts>>
  ) => {
    e.preventDefault();
    const valueMin = Number.parseFloat(
      e.currentTarget.elements.amountSearchMin.value
    );
    const valueMax = Number.parseFloat(
      e.currentTarget.elements.amountSearchMax.value
    );

    setAmounts({
      min: Number.isNaN(valueMin) ? null : valueMin,
      max: Number.isNaN(valueMax) ? null : valueMax,
    });
  };

  const handleSubmit = (e: React.FormEvent<AddItemFormElement>) => {
    handleAmountSearch(e, setSearchAmounts);
  };

  return (
    <form className="searchItem" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="search" />
        <input
          id="amountSearchMin"
          type="text"
          role="searchbox"
          placeholder={`Search Min Amount`}
        />
        <input
          id="amountSearchMax"
          type="text"
          role="searchbox"
          placeholder={`Search Max Amount`}
        />
        <button className='button' type="submit">Submit</button>
      </div>
    </form>
  );
}

export default AmountSearch;
