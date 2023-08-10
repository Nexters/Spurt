import ButtonS from '@/components/pc/Keywords/Buttons/button-s';
import Link from 'next/link';
import LinkIcon from '@/img/link-yellow-18.svg';
import ModifyIcon from '@/img/edit-16.svg';
import PlusIcon from '@/img/plus-20.svg';
import CTA4 from '@/components/pc/Keywords/Buttons/CTA4';
import { useState } from 'react';
import { useRouter } from 'next/router';

const Project = () => {
  const router = useRouter();

  const [exp, setExp] = useState(
    '기업적 디자인 스튜디오 : 언어재활 환자를 위한 홈 Iot 네이티브 앱 서비스',
  );

  const [content, setContent] = useState(
    '애플이 iOS 17 베타 버전을 공개했습니다. iOS 17 정식 버전 업데이트는 올 가을입니다. 이번 배포에는 iMessage, 암호 공유 기능 등이 포함됩니다.암호 공유 기능 등 애플이 iOS 17 베타 버전을 공개했습니다. iOS 17 정식 버전 업데이트는 올 가을입니다. 이번 배포에는 iMessage, 암호 공유 기능 등이 포함됩니다.암호 공유 기능 등 애플이 iOS 17 베타 버전을 공개했습니다. iOS 17 정식 버전 업데이트는 올 가을입니다. 이번 배포에는 iMessage, 암호 공유 기능 등이 포함됩니다.암호 공유 기능 등(300)',
  );

  const handleEdit = () => {
    router.push({
      pathname: '/experience',
      query: { content },
    });
  };

  const handleQuestion = () => {
    router.push({
      pathname: '/post',
      query: { exp },
    });
  };

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
          <Link href={'/experience'}>
            <ButtonS>경험 정리하기</ButtonS>
          </Link>
        </div>
      </div>
      <div className="h-[360px] border border-red mb-[100px]">쀼루븅</div>
      <div>
        <p className="text-title2 text-gray-700 mb-[20px]">나의 경험 정리</p>
        <div className="h-[98px] border border-red mb-[20px]">캐러셀</div>
      </div>
      <div className="p-[30px] rounded-[20px] bg-white mb-[150px]">
        <div className="flex justify-between items-center mb-[20px]">
          <p className="text-heading2 text-gray-600 border-l-2 border-l-main-300 pl-[10px]">
            경험 소개
          </p>
          <p className="text-body6 text-gray-400">2023.8 - 진행중</p>
        </div>
        <div className="text-content_body1 text-gray-600 mb-[20px]">
          {content}
        </div>
        <div className="flex items-center gap-[10px] text-body7 text-gray-500 mb-[20px]">
          <LinkIcon />
          <a
            href="https://www.pinterest.co.kr/pin/122793527321162632/"
            target="_blank"
          >
            https://www.pinterest.co.kr/pin/122793527321162632/
          </a>
        </div>
        <div className="flex justify-end mb-[30px]">
          <CTA4 onClick={handleEdit}>
            수정하기
            <ModifyIcon />
          </CTA4>
        </div>
        <hr />
        <div className="flex justify-between items-center my-[20px]">
          <p className="text-heading1 text-gray-700">예상질문</p>
          <p className="text-body2 text-gray700">총 {'10'}개</p>
        </div>
        <div className="flex gap-3">
          <button
            className="flex items-center py-[70px] px-[30px] bg-gray-100 rounded-2xl h-[244px]"
            onClick={handleQuestion}
          >
            <PlusIcon />
          </button>
          <div className="h-[244px] w-[226px] bg-main-100 rounded-2xl">
            캐러셀 들어갈 곳
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
