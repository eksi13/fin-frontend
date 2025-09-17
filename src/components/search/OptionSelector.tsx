// Styles
import '../../styles/index.css';

// React / Router Components
import { useState, type ChangeEvent } from 'react';

// Types
import type { SelectableItem } from '../../types';

// Search Components
import OptionItem from './OptionItem';

type Props = {
  options: SelectableItem[];
  setter: React.Dispatch<React.SetStateAction<SelectableItem[]>>;
};

function OptionSelector({ options, setter }: Props) {
  const [checks, setChecks] = useState<SelectableItem[]>(options);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setter(checks);
  };

  const handleCheck = (e: ChangeEvent<HTMLInputElement>) => {
    const optionID = Number.parseInt(e.currentTarget.id);
    const newElements = checks.map((item) =>
      item.id === optionID ? { ...item, status: !item.status } : item
    );
    setChecks(newElements);
  };

  return (
    <form className="option-select" onSubmit={handleSubmit}>
      <fieldset id="optionsChecked">
        <legend>Select:</legend>
        {checks.map((item, index) => (
          <OptionItem
            key={index}
            index={index}
            name={item.name}
            status={item.status}
            handleCheck={handleCheck}
          />
        ))}
        <button type="submit">Submit</button>
      </fieldset>
    </form>
  );
}

export default OptionSelector;
