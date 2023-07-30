import ButtonXl from '@/components/pc/Keywords/Buttons/button-xl';
import JobBtn from '@/components/pc/Keywords/Buttons/jobBtn';
import { useState } from 'react';

const SelectJob = () => {
  const jobValue = ['개발', '디자인', '마케팅', '그 외 직군'];
  const [job, setJob] = useState('');
  const handleClick = (type: string) => {
    setJob(type);
    //console.log(job);
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="text-title1 text-center mb-[40px]">
        <p>{'꽁지'}님은 어떤 직군 면접을</p>
        <p>준비하나요?</p>
      </div>
      <div className="flex-col gap-[10px] mb-[80px] grid grid-cols-2">
        {jobValue.map((item) => {
          //console.log(item);
          return (
            <JobBtn
              key={item}
              onClick={() => {
                handleClick(item);
              }}
              style={
                item === job
                  ? {
                      backgroundColor:
                        'rgb(255 244 206 / var(--tw-bg-opacity))',
                    }
                  : { backgroundColor: 'white' }
              }
            >
              {item}
            </JobBtn>
          );
        })}
      </div>
      <div>
        {job ? (
          <ButtonXl style={{ backgroundColor: '#302e2e' }}>
            이 직군으로 지원하기
          </ButtonXl>
        ) : (
          <ButtonXl style={{ backgroundColor: '#e9e9e9' }}>
            이 직군으로 지원하기
          </ButtonXl>
        )}
      </div>
    </div>
  );
};

export default SelectJob;
