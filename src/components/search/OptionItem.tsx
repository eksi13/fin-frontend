import '../../styles/index.css'

type Props = {
  index: number;
  name: string;
  status: boolean;
  handleCheck: React.ChangeEventHandler<HTMLInputElement>;
};

function OptionItem({ index, name, status, handleCheck }: Props) {
  return (
    <div className='option-item'>
      <input
        type="checkbox"
        id={index.toString()}
        name={name}
        checked={status}
        onChange={handleCheck}
        className="custom-checkbox"
      />
      <label htmlFor={name} className="checkbox-label">
        {name}
      </label>
    </div>
  );
}

export default OptionItem;
