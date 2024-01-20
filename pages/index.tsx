import fetchQuestion, {
  QuestionResponse,
} from '@/apis/Questions/fetchQuestion';
import fetchQuestionByJob, {
  RandomQuestion,
} from '@/apis/Questions/fetchQuestionByJob';
import CTA3Black from '@/components/pc/Buttons/CTA3-black';
import ButtonS from '@/components/pc/Buttons/button-s';
import RandomBtn from '@/components/pc/Buttons/randomBtn';
import Carousel from '@/components/pc/Carousel/Carousel';
import PinGuide from '@/components/pc/Modals/PinGuide';
import Paging from '@/components/pc/Paging/Paging';
import AnswerCard from '@/components/pc/Questions/AnswerCard';
import QuestionCard from '@/components/pc/Questions/QuestionCard';
import Header from '@/components/pc/header';
import { mainMyCategory, mainOtherCategory } from '@/const/categories';
import Illust from '@/img/Illust_question.png';
import RotateIcon from '@/img/rotate-24.svg';
import { jobState } from '@/status/JobStatus';
import {
  PageState,
  selectedMainMyCategoriesState,
  selectedMainOthersCategoriesState,
} from '@/status/MainStatus';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';

export default function MainHome() {
  const { data: session } = useSession();
  const page = useRecoilValue(PageState);
  const [selectedMyCategory, setSelectedMyCategory] = useRecoilState(
    selectedMainMyCategoriesState,
  );
  const [selectedOthersCategory, setSelectedOthersCategory] = useRecoilState(
    selectedMainOthersCategoriesState,
  );
  const myJob = useRecoilValue(jobState);
  const [myPost, setMyPost] = useState<QuestionResponse>();
  const [random, setRandom] = useState<RandomQuestion[]>([]);
  const [offsetNumber, setOffsetNumber] = useState(4);

  const [isViewingPinGuide, setIsViewingPinGuide] = useState(false);

  const handleData = () => {
    async function getRandomQuestion() {
      const result = await fetchQuestionByJob(
        mainOtherCategory[selectedOthersCategory].code,
        offsetNumber,
      );
      setRandom(result);
    }
    getRandomQuestion();
  };

  const getWindowSize = () => {
    const windowWidth = window.innerWidth;
    if (windowWidth >= 1024) setOffsetNumber(4);
    else if (windowWidth >= 768) setOffsetNumber(3);
    else setOffsetNumber(2);
    console.log(windowWidth);
    handleData();
  };

  useEffect(() => {
    async function getRandomQuestion() {
      const result = await fetchQuestionByJob(
        mainOtherCategory[selectedOthersCategory].code,
        offsetNumber,
      );
      setRandom(result);
    }
    getRandomQuestion();
  }, [offsetNumber, selectedOthersCategory]);

  useEffect(() => {
    async function getMyQuestion() {
      const result = await fetchQuestion({
        category: mainMyCategory[selectedMyCategory].code,
        offset: page,
        myQuestionIndicator: true,
        size: 6,
      });
      setMyPost(result);
    }

    if (session) getMyQuestion();
  }, [selectedMyCategory, page, session, myJob]);

  const handleClickPin = async (post: QuestionResponse) => {
    setMyPost(post);
  };

  return (
    <>
      <div className="absolute top-[0px] left-0 bottom-0 bg-main-100 w-full h-[580px]"></div>
      <div className="absolute w-[1000px]">
        <Header />
        <div className="text-title1 text-gray-700 flex justify-between mt-[60px] mb-[12px]">
          <div>
            {!session ? (
              <p className="decoration-main-400 decoration-4">안녕하세요</p>
            ) : (
              <>
                <p className="underline underline-offset-8 decoration-main-400 decoration-4">
                  {session?.user?.name}님 안녕하세요
                </p>
              </>
            )}
            <p>오늘도 마지막까지 화이팅!</p>
          </div>
          <div className="flex items-end">
            <Link href={session ? '/post' : '/signin'}>
              <ButtonS>질문-답변 만들기</ButtonS>
            </Link>
          </div>
        </div>

        <Image src={Illust} alt="Questions" />
      </div>
      <div className="h-[559px] mb-[100px]"></div>
      <div className="text-title2 text-gray-700 mb-[20px] mt-[80px]">
        <p>나의 질문 모음</p>
      </div>

      {!session ? (
        <></>
      ) : (
        <Carousel
          categories={mainMyCategory}
          isPc={true}
          selectedCateogry={selectedMyCategory}
          setCategory={setSelectedMyCategory}
        ></Carousel>
      )}

      <div className="flex flex-col bg-white mb-[100px] mt-5 px-[30px] pt-[30px] pb-[30px] rounded-[20px] shadow-sm ">
        {!session ? (
          <>
            <div className="flex flex-col justify-center items-center h-[227px] border-[0.7px] border-gray_line rounded-2xl">
              <div className="flex flex-col mb-6 items-center">
                <p className="text-body7 text-gray-600 mb-[6px]">
                  예상 질문을 만들고 답하러 가볼까요?
                </p>
                <p className="text-heading1 text-gray-700">
                  아직 등록한 질문-답변이 없어요
                </p>
              </div>

              <Link href={session ? '/post' : '/signin'}>
                <CTA3Black text={'첫 질문-답변 만들기'}></CTA3Black>
              </Link>
            </div>
          </>
        ) : (
          <>
            <div className="flex mb-5 items-center justify-between">
              <p className="text-body2 w-full text-right text-gray-700">
                총 {myPost?.meta.totalCount}개
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {myPost?.questions.map((item) => {
                return (
                  <AnswerCard
                    key={item.questionId}
                    questionId={item.questionId}
                    subject={item.subject}
                    mainText={item.mainText}
                    categoryList={item.categoryList}
                    createTimestamp={item.createTime}
                    isPinned={item.pinIndicator}
                    onClickPin={handleClickPin}
                    setIsViewingPinGuide={setIsViewingPinGuide}
                  />
                );
              })}
            </div>
            <div className="">
              <Paging
                totalCount={myPost?.meta.totalCount}
                totalPage={myPost?.meta.totalPage}
              />
            </div>
          </>
        )}
      </div>

      <div className="text-title2 text-gray-700 mb-5">
        <p>
          <span>{session ? '같은 직군의' : ''} 사람들</span>
          <span>이</span>
        </p>
        <p>최근에 올린 질문</p>
      </div>
      <Carousel
        categories={mainOtherCategory}
        isPc={true}
        selectedCateogry={selectedOthersCategory}
        setCategory={setSelectedOthersCategory}
      />

      <div className="flex flex-col mt-5 bg-white rounded-[20px] pt-[30px] mb-[100px] shadow-sm">
        <div className="flex flex-row gap-3 px-[30px]">
          {random.map((item, index) => {
            return <QuestionCard key={index} subject={item.subject} />;
          })}
        </div>
        <div className="flex justify-center my-[30px]">
          <RandomBtn onClick={getWindowSize}>
            다른 질문 더보기
            <RotateIcon />
          </RandomBtn>
        </div>
      </div>

      {isViewingPinGuide && (
        <PinGuide
          setShow={() => {
            setIsViewingPinGuide(!isViewingPinGuide);
          }}
        ></PinGuide>
      )}
    </>
  );
}
