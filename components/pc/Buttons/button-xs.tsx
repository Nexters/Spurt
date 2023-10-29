interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  name?: string;
  isSelected?: boolean;
}

const ButtonXs = ({ name, isSelected }: ButtonProps) => {
  return (
    <>
      {isSelected ? (
        <button className="text-body5 h-[38px] bg-gray-700 gap-[8px] text-white py-2 px-[18px] rounded-[30px] mr-2 border border-gray-700">
          {name}
        </button>
      ) : (
        <button className="text-body6 h-[38px] py-2 px-[18px] gap-[8px] rounded-[30px] mr-2 border-gray-500 border">
          {name}
        </button>
      )}
    </>
  );
};

export default ButtonXs;
