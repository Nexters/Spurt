const ButtonXs = ({ ...props }) => {
   return (
      <button
         className="text-body4 bg-gray-700 text-white py-2 px-[18px] flex justify-center items-center rounded-[30px] mr-2"
         {...props}
         style={{
            height: '38px',
            gap: '8px',
         }}></button>
   );
};

export default ButtonXs;
