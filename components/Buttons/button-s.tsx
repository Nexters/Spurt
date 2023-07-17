const ButtonS = ({ ...props }) => {
  return (
    <button
      className="body4 bg-gray-700 text-white px-8 py-3 flex justify-center items-center"
      {...props}
      style={{
        borderRadius: "9px",
        gap: "10px",
      }}
    ></button>
  );
};

export default ButtonS;
