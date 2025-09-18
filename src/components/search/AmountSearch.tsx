// Styles
import '../../styles/index.css';

// Page Components
import type { SearchAmounts } from '../../types';

// Types
import type { AddItemFormElement } from '../../types/forms';

type Props = {
  setSearchAmounts: React.Dispatch<React.SetStateAction<SearchAmounts>>;
  subject: string;
};

function AmountSearch({ setSearchAmounts, subject }: Props) {
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
        <input className='searchbox'
          id="amountSearchMin"
          type="text"
          role="searchbox"
          placeholder={`Search Min ${subject}`}
        />
        <input className='searchbox'
          id="amountSearchMax"
          type="text"
          role="searchbox"
          placeholder={`Search Max ${subject}`}
        />
        <button className='button' type="submit">Submit</button>
      </div>
    </form>
  );
}

export default AmountSearch;
