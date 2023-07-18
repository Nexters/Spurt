const ButtonXs = ({ ...props }) => {
  return (
    <button
      className="text-body4 bg-gray-700 text-white py-3 px-[18px] flex justify-center items-center rounded-[30px]"
      {...props}
      style={{
        height: "38px",
        gap: "10px",
      }}
    ></button>
  );
};

export default ButtonXs;
