const ButtonM = ({ ...props }) => {
  return (
    <button
      className="body1 bg-gray-700 text-white px-6 inline-flex justify-center items-center"
      {...props}
      style={{
        paddingTop: "14px",
        paddingBottom: "14px",
        borderRadius: "30px",
        gap: "10px",
      }}
    ></button>
  );
};

export default ButtonM;
