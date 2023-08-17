interface ButtonProps {
  name: string;
  isSelected: boolean;
}

const MobileButtonXs = ({ name, isSelected }: ButtonProps) => {
  return (
    <>
      {isSelected ? (
        <button className="text-body8 border border-gray-700 bg-gray-700 text-white py-[6px] px-[16px] flex justify-center items-center rounded-[30px] mr-2">
          {name}
        </button>
      ) : (
        <button className="text-body9 text-black py-[6px] px-[16px] flex justify-center items-center rounded-[30px] mr-2 border-gray-500 border">
          {name}
        </button>
      )}
    </>
  );
};

export default MobileButtonXs;
