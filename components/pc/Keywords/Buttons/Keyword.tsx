import DeleteIcon from '@/img/delete-16.svg';
import { keywordState } from '@/status/PostStatus';
import { ChangeEvent, useState } from 'react';
import { useRecoilState } from 'recoil';

interface KeywordProps {
  defaultKeywordName: string;
  fixInput: (index: number) => void;
  deleteInput: (index: number) => void;
  index: number;
}

const SumKeyWord = ({
  defaultKeywordName,
  fixInput,
  deleteInput,
  index,
}: KeywordProps) => {
  const [focus, setFocus] = useState(defaultKeywordName ? false : true);
  const [inputValue, setInputValue] = useState(defaultKeywordName);
  const [keyword, setKeyword] = useRecoilState(keywordState);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setKeyword(e.target.value);
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
          maxLength={30}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
              fixInput(index);
              setKeyword('');
              setFocus(false);
            }
          }}
        ></input>
      ) : (
        <div className="flex items-center text-body6 text-gray-600 bg-main-100 border border-keyword_border rounded-lg py-2 px-[14px] h-[38px] min-w-[42px] w-auto">
          {inputValue}
          <button
            className="text-main-400 ml-[6px]"
            onClick={() => deleteInput(index)}
          >
            <DeleteIcon />
          </button>
        </div>
      )}
    </div>
  );
};

export default SumKeyWord;
