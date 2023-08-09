interface InputDateProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  proceeding?: boolean;
  value?: string;
}

const InputDate = ({
  placeholder,
  proceeding,
  value,
  ...props
}: InputDateProps) => {
  return (
    <>
      <input
        className="text-body3 text-gray-600 border border-gray-300 py-[10px] px-4 rounded-xl w-[140px] focus:outline-main-400 read-only:focus:outline-none read-only:bg-gray-100 read-only:border-gray-300 placeholder:text-gray-300"
        placeholder={placeholder}
        value={value}
        readOnly={proceeding}
        {...props}
      ></input>
    </>
  );
};

export default InputDate;
