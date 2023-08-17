import fetchQuestion, {
  QuestionResponse,
} from '@/apis/Questions/fetchQuestion';
import Carousel from '@/components/pc/Keywords/Carousel/Carousel';
import { noteCategory } from '@/const/categories';
import Illust from '@/img/Illust_mobileOnBoarding.png';
import Pin from '@/img/mobile-pin-red-24.svg';
import { jobState } from '@/status/JobStatus';
import {
  contentToggleState,
  selectedMobileNoteCategoriesState,
} from '@/status/MobileStatus';
import {
  keywordVisibleState,
  myNotesState,
  selectedCardState,
} from '@/status/NoteStatus';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import VisibleBtn from '../pc/Keywords/Buttons/visibleBtn';
import Keyword from '../pc/Keywords/Keyword';
import TenMinuteCard from '../pc/Keywords/Questions/TenMintueCard';
import SigninBtn from './SigninBtn';
import Toggle from './toggle';

export default function MobileHome() {
  const [selectedCardIndex, setSelectedCardIndex] =
    useRecoilState(selectedCardState);
  const [isKeyword, setIsKeyword] = useRecoilState(contentToggleState);
  const [selectedCategory, setSelectedCategory] = useRecoilState(
    selectedMobileNoteCategoriesState,
  );
  const [isKeywordVisible, setKeywordVisibility] =
    useRecoilState(keywordVisibleState);

  const { data: session } = useSession();

  const [myNotes, setMyNotes] = useRecoilState<QuestionResponse>(myNotesState);
  const myJob = useRecoilValue(jobState);
  useEffect(() => {
    async function call() {
      const result = await fetchQuestion({
        category: noteCategory[selectedCategory].code,
        jobGroup: myJob,
        myQuestionIndicator: true,
        pinIndicator: true,
        size: 20,
      });
      setMyNotes(result);
      setSelectedCardIndex(0);
    }
    if (session?.user) {
      call();
    }
  }, [session, selectedCategory]);

  return (
    <div className="mb-[100px]">
      <div className="mt-[40px] mb-[15px] text-title8">
        {session ? (
          <p>{session.user?.name}님! 내가 저장한</p>
        ) : (
          <p>내가 저장한</p>
        )}
        <span className="underline underline-offset-8 decoration-4 decoration-main-400">
          질문과 답변
        </span>
        <span>을 확인해요</span>
      </div>
      <p className="text-caption3 text-gray-500">
        {session &&
          '질문 모음, 나의 프로젝트를 보고 싶다면 pc 버전으로 가주세요'}
      </p>

      {session ? (
        <>
          <div className="flex flex-row mt-[40px]">
            <div className="flex items-center">
              <Pin></Pin>
              <span className="text-heading1 ml-[10px]">요약 노트</span>
            </div>
          </div>
          <div className="flex mt-[20px]">
            <Carousel
              categories={noteCategory}
              isPc={false}
              selectedCateogry={selectedCategory}
              setCategory={setSelectedCategory}
            ></Carousel>
          </div>

          <div className="flex flex-col py-[20px] pl-[16px]  rounded-[20px] bg-white mt-[20px] mb-[18px]">
            <div className="flex">
              <span className="text-caption5">총&nbsp;</span>
              <span className="text-caption4">{myNotes.questions.length}</span>
              <span className="text-caption5">개</span>
            </div>
            <div className="flex mt-[20px]">
              <Swiper
                spaceBetween={12}
                slidesPerView={1.3}
                slidesOffsetAfter={40}
              >
                {myNotes.questions.length === 0 ? (
                  <>아무것도 없지롱</>
                ) : (
                  myNotes.questions.map((value, index) => {
                    return (
                      <SwiperSlide key={index}>
                        <TenMinuteCard
                          index={index}
                          selectedIndex={selectedCardIndex}
                          text={value.subject}
                          onClick={setSelectedCardIndex}
                          isPc={false}
                          questionId={value.questionId}
                          isPinned={true}
                        ></TenMinuteCard>
                      </SwiperSlide>
                    );
                  })
                )}
              </Swiper>
            </div>

            <div className="flex flex-row justify-between my-[18px] pr-[16px]">
              <Toggle isToggle={isKeyword} setToggle={setIsKeyword} />
              <VisibleBtn
                isVisible={isKeywordVisible}
                setVisibility={setKeywordVisibility}
              ></VisibleBtn>
            </div>
            <div className="mt-[20px] pr-[16px]">
              {isKeyword ? (
                !myNotes.questions[selectedCardIndex] ||
                myNotes.questions[selectedCardIndex].keyWordList.length ===
                  0 ? (
                  <Keyword
                    text="작성된 키워드가 없어요."
                    isVisible={isKeywordVisible}
                    isPc={true}
                  ></Keyword>
                ) : (
                  myNotes.questions[selectedCardIndex].keyWordList.map(
                    (value, index) => {
                      return (
                        <Keyword
                          key={index}
                          text={value}
                          isVisible={isKeywordVisible}
                          isPc={true}
                        ></Keyword>
                      );
                    },
                  )
                )
              ) : (
                <>
                  <p
                    className={
                      isKeywordVisible
                        ? 'text-content_body2 whitespace-pre-line'
                        : 'blur text-content_body2 whitespace-pre-line'
                    }
                  >
                    {myNotes.questions[selectedCardIndex]
                      ? myNotes.questions[selectedCardIndex].mainText
                      : ''}
                  </p>
                </>
              )}
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="bg-white h-[468px] rounded-[20px] mt-[79px] py-[40px] px-[20px]">
            <div className="flex flex-col text-center">
              <p className="text-body1 text-gray-700">예상 질문 및 경험은</p>
              <p className="text-body1">
                <span className="text-red">PC버전</span>
                <span className="text-gray-700">에서만 작성 가능해요</span>
              </p>
            </div>
            <div className="flex justify-center">
              <Image src={Illust} alt="onBoarding" />
            </div>
            <div className="flex justify-center">
              <SigninBtn />
            </div>
          </div>
        </>
      )}
    </div>
  );
}
