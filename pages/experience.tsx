import BackIcon from '@/img/arrow-right-circle-54.svg';
import CheckIcon from '@/img/check box-on-yellow - 24.svg';
import { useRouter } from 'next/router';
import { useState } from 'react';

const Experience = () => {
  const router = useRouter();

  const [title, setTitle] = useState('');

  const onChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const goBack = () => {
    router.back();
  };
  return (
    <>
      <button className="mt-[24px] mb-[82px]" onClick={goBack}>
        <BackIcon />
      </button>
      <p className="text-title1 text-gray-700 mb-[20px]">경험 정리</p>

      <div className="border border-gray-300 flex flex-col items-start rounded-2xl bg-white px-6 pt-[14px] pb-4 mb-3">
        <input
          className="text-heading3 text-gray-600 w-full  placeholder:text-heading3 mb-[14px] placeholder:text-gray-300 outline-none"
          placeholder="제목은 30자 이내로 작성해주세요"
          maxLength={30}
          onChange={onChangeTitle}
        ></input>

        <div className="flex items-center gap-[10px] pt-4">
          <input
            className="border border-gray-300 py-[10px] px-4 rounded-xl w-[140px] focus:outline-main-400"
            placeholder="시작년도"
          ></input>
          <input
            className="border border-gray-300 py-[10px] px-4 rounded-xl w-[140px] focus:outline-main-400"
            placeholder="월"
          ></input>
          <p className="mx-[10px]">-</p>
          <input
            className="border border-gray-300 py-[10px] px-4 rounded-xl w-[140px] focus:outline-main-400"
            placeholder="종료년도"
          ></input>
          <input
            className="border border-gray-300 py-[10px] px-4 rounded-xl w-[140px] focus:outline-main-400"
            placeholder="월"
          ></input>
          <p className="text-body2 text-gray-400 ml-[10px] mr-[3px]">진행중</p>
          <CheckIcon />
        </div>
      </div>
    </>
  );
};

export default Experience;
