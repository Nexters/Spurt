// interface ButtonXlProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
//   styles: string;
// }

const ButtonXl = ({ ...props }) => {
  return (
    <button
      className={
        'h-16 w-[500px] text-white text-heading1 rounded-[50px] bg-gray-700'
      }
      {...props}
    ></button>
  );
};

export default ButtonXl;
