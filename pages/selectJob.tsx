import JobBtn from '@/components/pc/Keywords/Buttons/jobBtn';

const SelectJob = () => {
   return (
      <div className="flex flex-col items-center justify-center h-screen">
         <div className="text-title1 text-center mb-[80px]">
            <p>{'서영'}님은 어떤 직군 면접을</p>
            <p>준비하나요?</p>
         </div>
         <div className="flex flex-row justify-center">
            <JobBtn index={0}>개발</JobBtn>
            <JobBtn index={1}>디자인</JobBtn>
         </div>
         <div className="flex flex-row justify-center">
            <JobBtn index={2}>마케팅</JobBtn>
            <JobBtn index={3}>그 외 직군</JobBtn>
         </div>
      </div>
   );
};

export default SelectJob;
