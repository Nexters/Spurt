import fetchQuestion from '@/apis/Questions/fetchQuestion';
import fetchQuestionByJob from '@/apis/Questions/fetchQuestionByJob';
import ButtonS from '@/components/pc/Keywords/Buttons/button-s';
import RandomBtn from '@/components/pc/Keywords/Buttons/randomBtn';
import Carousel from '@/components/pc/Keywords/Carousel/Carousel';
import AnswerCard from '@/components/pc/Keywords/Questions/AnswerCard';
import QuestionCard from '@/components/pc/Keywords/Questions/QuestionCard';
import { mainMyCategory, mainOtherCategory } from '@/const/categories';
import RotateIcon from '@/img/rotate-24.svg';
import {
  selectedMainMyCategoriesState,
  selectedMainOthersCategoriesState,
} from '@/status/MainStatus';
import Link from 'next/link';
import { useState } from 'react';
import { useRecoilState } from 'recoil';

export default function Home(props: any) {
  const [selectedMyCategory, setSelectedMyCategory] = useRecoilState(
    selectedMainMyCategoriesState,
  );
  const [selectedOthersCategory, setSelectedOthersCategory] = useRecoilState(
    selectedMainOthersCategoriesState,
  );
  const [recent, setRecent] = useState(false); //로그인 여부 확인으로 나의 질문 모아보기 아래 컴포넌트 유무
  const handleData = () => {
    //const data = fetchQuestionByJob();
    fetchQuestion();
    fetchQuestionByJob();
  };
  // useEffect(() => {
  //   fetchQuestionByJob().then((v) => {
  //
  //    })
  //   fetchQuestion().then((v) => {
  //
  //    })
  // }, []);
  return (
    <>
      <div className="text-title1 text-gray-700 flex justify-between mt-[60px]">
        <div>
          <p className="underline underline-offset-8 decoration-main-400 decoration-4">
            꽁지님 안녕하세요
          </p>
          <p>오늘도 마지막까지 화이팅!</p>
        </div>
        <div className="flex items-end">
          <Link href={'/post'}>
            <ButtonS>질문-답변 만들기</ButtonS>
          </Link>
        </div>
      </div>
      <div className="text-title2 text-gray-700 mb-[20px] mt-[80px]">
        <p>나의 질문 모아보기</p>
      </div>
      {recent ? (
        <></>
      ) : (
        <Carousel
          categories={mainMyCategory}
          isPc={true}
          selectedCateogry={selectedMyCategory}
          setCategory={setSelectedMyCategory}
        ></Carousel>
      )}

      <div className="flex flex-col bg-white mt-5 mb-[100px] px-[30px] pt-[30px] pb-[80px] rounded-[20px] ">
        <div className="flex mb-5 items-center justify-between">
          <p className="text-body2 w-full text-right text-gray-700">
            총 {'8'}개
          </p>
        </div>
        {recent ? (
          <div className="flex flex-col justify-center items-center h-[227px] border-[0.7px] border-gray_line rounded-2xl">
            <div className="flex flex-col mb-6 items-center">
              <p className="text-body7 text-gray-600">
                예상 질문을 만들고 답하러 가볼까요?
              </p>
              <p className="text-heading1 text-gray-700">
                아직 등록한 질문-답변이 없어요
              </p>
            </div>
            <Link href={'/post'}>
              <ButtonS>첫 질문-답변 만들기</ButtonS>
            </Link>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-2 gap-3">
              <AnswerCard />
              <AnswerCard />
              <AnswerCard />
              <AnswerCard />
              <AnswerCard />
              <AnswerCard />
              <AnswerCard />
              <AnswerCard />
            </div>
            <div className="flex justify-center mt-[40px]">
              페이지네이션 위치
            </div>
          </>
        )}
      </div>
      <div className="text-gray-700 mb-5">
        <p>
          <span className="text-title2">{'같은 직군의'} 사람들</span>
          <span className="text-title3">이</span>
        </p>
        <p className="text-title3">최근에 올린 질문이에요</p>
      </div>
      <Carousel
        categories={mainOtherCategory}
        isPc={true}
        selectedCateogry={selectedOthersCategory}
        setCategory={setSelectedOthersCategory}
      ></Carousel>

      <div className="flex flex-col mt-5 bg-white rounded-[20px] pt-[30px] px-[30px] mb-[100px]">
        <div className="flex justify-around gap-3">
          <QuestionCard />
          <QuestionCard />
          <QuestionCard />
          <QuestionCard />
        </div>
        <div className="flex justify-center my-[30px]">
          <RandomBtn onClick={handleData}>
            다른 질문 더보기
            <RotateIcon />
          </RandomBtn>
        </div>
      </div>
    </>
  );
}
