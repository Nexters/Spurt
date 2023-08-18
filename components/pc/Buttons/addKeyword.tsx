interface AddBtnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  addInput: () => void;
  value: string;
}
const AddKeyWordBtn = ({ addInput, value, ...props }: AddBtnProps) => {
  return (
    <button
      className="flex items-center gap-1 bg-main-400 text-body5 py-2 px-[14px] rounded-lg border border-gray_line"
      onClick={() => addInput()}
      {...props}
    ></button>
  );
};

export default AddKeyWordBtn;
