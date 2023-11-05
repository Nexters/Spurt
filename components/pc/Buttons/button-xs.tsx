interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  name?: string;
  isSelected?: boolean;
}

const ButtonXs = ({ name, isSelected }: ButtonProps) => {
  return (
    <>
      {isSelected ? (
        <button className="text-body5 h-[38px] bg-gray-700 mr-[8px] text-white py-2 px-[18px] rounded-[30px] border border-gray-700">
          {name}
        </button>
      ) : (
        <button className="text-body6 h-[38px] py-2 px-[18px] rounded-[30px] mr-[8px] border-gray-500 border">
          {name}
        </button>
      )}
    </>
  );
};

export default ButtonXs;
