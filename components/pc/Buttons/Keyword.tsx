import DeleteIcon from '@/img/delete-16.svg';
import { keywordState } from '@/status/PostStatus';
import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { useRecoilState } from 'recoil';
import { text } from 'stream/consumers';

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

  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setKeyword(e.target.value);
  };

  useEffect(() => {
    if (inputRef.current) {
      const textWidth = measureTextWidth(inputValue);
      const newWidth = Math.max(42, textWidth + 30);
      console.log(`textWidth : ${textWidth}, newWidth : ${newWidth}`);
      inputRef.current.style.width = `${newWidth}px`;
    }
  }, [inputValue]);

  const measureTextWidth = (text: string): number => {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    if (context) {
      context.font = getComputedStyle(inputRef.current!).font || '16px Arial';
      const metrics = context.measureText(text);
      return metrics.width;
    }
    return 0;
  };

  return (
    <>
      {focus ? (
        <div>
          <input
            ref={inputRef}
            className="flex text-center w-[42px] bg-main-100 border border-main-100 rounded-lg py-2 px-[14px] h-[38px] focus:bg-white focus:border-main-400 fucus:border focus:outline-none"
            onChange={handleInputChange}
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
        </div>
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
    </>
  );
};

export default SumKeyWord;
