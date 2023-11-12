interface ButtonProps {
  name: string;
  isSelected: boolean;
}

const MobileButtonXs = ({ name, isSelected }: ButtonProps) => {
  return (
    <>
      {isSelected ? (
        <button className="text-body9 border h-[32px] border-gray-700 bg-gray-700 text-white py-[6px] px-[16px] rounded-[30px] mr-[6px]">
          {name}
        </button>
      ) : (
        <button className="h-[32px] text-body10 text-gray-700 py-[6px] px-[16px] rounded-[30px] mr-[6px] border-gray-500 border">
          {name}
        </button>
      )}
    </>
  );
};

export default MobileButtonXs;
