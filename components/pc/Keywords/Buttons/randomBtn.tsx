const RandomBtn = ({ ...props }) => {
  return (
    <button
      className="w-[300px] h-[68px] py-5 pl-[30px] pr-6 text-heading2 flex justify-center items-start border border-gray_line rounded-[90px]"
      {...props}
    ></button>
  );
};

export default RandomBtn;
