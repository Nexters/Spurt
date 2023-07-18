const ButtonS = ({ ...props }) => {
  return (
    <button
      className="text-body4 bg-gray-700 text-white py-3 flex justify-center items-center"
      {...props}
      style={{
        width: "120px",
        height: "50px",
        borderRadius: "12px",
        gap: "10px",
      }}
    ></button>
  );
};

export default ButtonS;
