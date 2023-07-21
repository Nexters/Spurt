const ButtonS = ({ ...props }) => {
  return (
    <button
      className="text-body4 bg-gray-700 text-white w-[198px] h-[52px] rounded-xl py-3 px-8 flex justify-center items-center gap-[10px]"
      {...props}
    ></button>
  );
};

export default ButtonS;
