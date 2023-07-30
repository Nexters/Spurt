import ButtonS from '@/components/pc/Keywords/Buttons/button-s';
import ButtonXs from '@/components/pc/Keywords/Buttons/button-xs';
import RandomBtn from '@/components/pc/Keywords/Buttons/randomBtn';
import Carousel from '@/components/pc/Keywords/Carousel/Carousel';
import AnswerCard from '@/components/pc/Keywords/Questions/AnswerCard';
import QuestionCard from '@/components/pc/Keywords/Questions/QuestionCard';
import { mainMyCategory, mainOtherCategory } from '@/const/categories';
import {
  selectedMainMyCategoriesState,
  selectedMainOthersCategoriesState,
} from '@/status/MainStatus';
import { useState } from 'react';
import { useRecoilState } from 'recoil';

export default function Home() {
  const [selectedMyCategory, setSelectedMyCategory] = useRecoilState(
    selectedMainMyCategoriesState,
  );

  const [selectedOtherCategory, setSelectedOtherCategory] = useRecoilState(
    selectedMainOthersCategoriesState,
  );

  const [recent, setRecent] = useState(true);

  return (
    <>
      <div className="text-title1 text-gray-700 flex justify-between mt-[42px]">
        <div>
          <p className="underline underline-offset-8 decoration-main-400 decoration-4">
            꽁지님 안녕하세요
          </p>
          <p>오늘도 마지막까지 화이팅!</p>
        </div>
        <div className="flex items-end">
          <ButtonS>질문-답변 만들기</ButtonS>
        </div>
      </div>

      <div className="text-title4 text-gray-700 mt-[54px] mb-5">
        <p>
          <b>같은 직군의 사람들</b>이
        </p>
        <p>최근에 올린 질문이에요</p>
      </div>

      <Carousel
        categories={mainOtherCategory}
        isPc={true}
        selectedCateogry={selectedOtherCategory}
        setCategory={setSelectedOtherCategory}
      ></Carousel>

      <div className="flex flex-col mt-5 bg-white rounded-[20px] pt-[30px] px-[30px] mb-[100px]">
        <div className="flex justify-around gap-3">
          <QuestionCard />
          <QuestionCard />
          <QuestionCard />
          <QuestionCard />
        </div>
        <div className="flex justify-center my-[30px]">
          <RandomBtn>다른 질문 더보기 1/3</RandomBtn>
        </div>
      </div>

      <div className="text-title3 text-gray-700 mb-5">
        <p>나의 질문 모아보기</p>
      </div>

      <Carousel
        categories={mainMyCategory}
        isPc={true}
        selectedCateogry={selectedMyCategory}
        setCategory={setSelectedMyCategory}
      ></Carousel>

      <div className="flex flex-col bg-white mt-5 mb-[150px] px-[30px] pt-[30px] pb-[50px] rounded-[20px] ">
        <div className="flex mb-5 items-center justify-between">
          <div>
            <button
              className={`${
                recent
                  ? 'text-body1 text-gray-700 mr-5'
                  : 'text-body2 text-gray-300 mr-5'
              }`}
              onClick={() => setRecent(true)}
            >
              최신순
            </button>
            <button
              className={`${
                recent ? 'text-body2 text-gray-300' : 'text-body1 text-gray-700'
              }`}
              onClick={() => setRecent(false)}
            >
              핀 고정순
            </button>
          </div>
          <p className="text-body2 text-right text-gray-700">총 0개</p>
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
            <div>
              <ButtonS>첫 질문-답변 만들기</ButtonS>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-3">
            <AnswerCard />
            <AnswerCard />
            <AnswerCard />
          </div>
        )}
      </div>
    </>
  );
}
