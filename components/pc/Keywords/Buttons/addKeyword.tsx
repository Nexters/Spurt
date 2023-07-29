interface AddBtnProps {
  addInput: () => void;
  value: string;
}
const AddKeyWordBtn = ({ addInput, value }: AddBtnProps) => {
  return (
    <button
      className="bg-main-400 text-body5 py-2 px-[14px] rounded-lg border border-gray_line"
      onClick={() => addInput()}
    >
      {value}
    </button>
  );
};

export default AddKeyWordBtn;
