import { useState, ChangeEvent } from "react";

export interface InputItem {
  id: number;
  title: string;
}

interface KeywordProps {
  deleteInput: (index: number) => void;
  id: number;
}

const SumKeyWord = ({ deleteInput, id }: KeywordProps) => {
  const [focus, setFocus] = useState(true);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  return (
    <div>
      {focus ? (
        <input
          className="bg-main-100 border border-main-100 rounded-lg py-2 px-[14px] w-auto focus:bg-white focus:border-main400 fucus:border focus:outline-none"
          onChange={handleInputChange}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              setFocus(false);
            }
          }}
        ></input>
      ) : (
        <div className="flex items-center text-body6 text-gray-600 bg-main-100 border border-main-100 rounded-lg py-2 px-[14px] h-[38px] min-w-[42px] w-auto">
          {inputValue}
          <button
            className="text-main-400 ml-[6px]"
            onClick={() => deleteInput(id)}
          >
            X
          </button>
        </div>
      )}
    </div>
  );
};

export default SumKeyWord;
