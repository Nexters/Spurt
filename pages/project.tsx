import ButtonS from '@/components/pc/Keywords/Buttons/button-s';
import Link from 'next/link';

const Project = () => {
  return (
    <>
      <div className="text-title1 text-gray-700 flex justify-between mt-[60px] mb-[30px]">
        <div>
          <span className="underline underline-offset-8 decoration-main-400 decoration-4">
            면접 직전, 핀으로
          </span>
          <span> 고정한</span>
          <p>질문과 답변을 확인해요</p>
        </div>
        <div className="flex items-end">
          <Link href={'/post'}>
            <ButtonS>경험 정리하기</ButtonS>
          </Link>
        </div>
      </div>
      <div className="h-[360px] w-[1000px] border border-red mb-[100px]">
        쀼루븅
      </div>
      <div>
        <p className="text-title2 text-gray-700 mb-[20px]">나의 경험 정리</p>
        <div className="h-[98px] border border-red mb-[20px]">캐러셀</div>
      </div>
      <div className="p-[30px] rounded-[20px] bg-white mb-[150px]">
        <p className="text-heading2 text-gray-600 border-l-2 border-l-main-300 pl-[10px]">
          경험 소개
        </p>
      </div>
    </>
  );
};

export default Project;
