type Props = {
  index: number;
  name: string;
  status: boolean;
  handleCheck: React.ChangeEventHandler<HTMLInputElement>;
};

function OptionItem({ index, name, status, handleCheck }: Props) {
  return (
    <div>
      <input
        type="checkbox"
        id={index.toString()}
        name={name}
        checked={status}
        onChange={handleCheck}
      />
      <label htmlFor={name}>{name}</label>
    </div>
  );
}

export default OptionItem;
