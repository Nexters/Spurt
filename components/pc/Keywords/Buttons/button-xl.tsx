interface ButtonXlProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  styles: string;
}

const ButtonXl = ({ styles, ...props }: ButtonXlProps) => {
  return (
    <button
      className={
        "h-16 w-[500px] text-white text-heading1 rounded-[50px] " + styles
      }
      {...props}
    ></button>
  );
};

export default ButtonXl;
