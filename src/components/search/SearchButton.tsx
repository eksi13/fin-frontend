type Props = {
  buttonClass: string;
  buttonText: string;
  handleClick: () => void;
};

function SearchButton({
  buttonClass,
  buttonText,
  handleClick,
}: Props) {
  return (
    <>
      <button
        className={buttonClass}
        onClick={handleClick}
      >
        {buttonText}
      </button>
    </>
  );
}

export default SearchButton;
