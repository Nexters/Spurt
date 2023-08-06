import { useState, ChangeEvent } from 'react';
import DeleteIcon from '@/img/delete-16.svg';

export interface InputItem {
  id: number;
  title: string;
}

interface KeywordProps {
  deleteInput: (id: number) => void;
  id: number;
}

const SumKeyWord = ({ deleteInput, id }: KeywordProps) => {
  const [focus, setFocus] = useState(true);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      {focus ? (
        <input
          className="inline-block bg-main-100 border border-main-100 rounded-lg py-2 px-[14px] h-[38px] focus:bg-white focus:border-main-400 fucus:border focus:outline-none"
          onChange={handleInputChange}
          style={{ width: `${inputValue.length * 15 + 42}px` }}
          value={inputValue}
          autoFocus
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
              setFocus(false);
            }
          }}
        ></input>
      ) : (
        <div className="flex items-center text-body6 text-gray-600 bg-main-100 border border-keyword_border rounded-lg py-2 px-[14px] h-[38px] min-w-[42px] w-auto">
          {inputValue}
          <button
            className="text-main-400 ml-[6px]"
            onClick={() => deleteInput(id)}
          >
            <DeleteIcon />
          </button>
        </div>
      )}
    </div>
  );
};

export default SumKeyWord;
