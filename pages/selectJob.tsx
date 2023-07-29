import ButtonXl from "@/components/pc/Keywords/Buttons/button-xl";
import JobBtn from "@/components/pc/Keywords/Buttons/jobBtn";
import { useState } from "react";

const SelectJob = () => {
  const jobValue = ["개발", "디자인", "마케팅", "그 외 직군"];
  const [job, setJob] = useState(false);
  const handleClick = () => {
    setJob(true);
    return;
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="text-title1 text-center mb-[80px]">
        <p>{"꽁지"}님은 어떤 직군 면접을</p>
        <p>준비하나요?</p>
      </div>
      <div className="flex-col gap-[10px] mb-[40px] grid grid-cols-2">
        {jobValue.map((item) => {
          return (
            <JobBtn key={item} onClick={handleClick}>
              {item}
            </JobBtn>
          );
        })}
      </div>
      <div>
        {job ? (
          <ButtonXl styles="bg-gray-700">이 직군으로 지원하기</ButtonXl>
        ) : (
          <ButtonXl styles="bg-gray-200">이 직군으로 지원하기</ButtonXl>
        )}
      </div>
    </div>
  );
};

export default SelectJob;
