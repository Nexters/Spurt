interface ButtonProps {
  name: string;
  isSelected: boolean;
}

const ButtonXs = ({ name, isSelected }: ButtonProps) => {
  return (
    <>
      {isSelected ? (
        <button
          className="text-body4 bg-gray-700 text-white py-2 px-[18px] flex justify-center items-center rounded-[30px] mr-2"
          style={{
            height: '38px',
            gap: '8px',
          }}
        >
          {name}
        </button>
      ) : (
        <button
          className="text-body6 bg-white py-2 px-[18px] flex justify-center items-center rounded-[30px] mr-2 border-gray-500 border"
          style={{
            height: '38px',
            gap: '8px',
          }}
        >
          {name}
        </button>
      )}
    </>
  );
};

export default ButtonXs;
