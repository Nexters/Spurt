import fetchQuestion, {
  QuestionResponse,
} from '@/apis/Questions/fetchQuestion';
import Carousel from '@/components/pc/Carousel/Carousel';
import { noteCategory } from '@/const/categories';
import Pin from '@/img/mobile-pin-red-24.svg';
import Ill1 from '@/img/온보딩 1.png';
import Ill2 from '@/img/온보딩 2.png';
import Ill3 from '@/img/온보딩 3.png';
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
import { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import VisibleBtn from '../pc/Buttons/visibleBtn';
import Keyword from '../pc/Keyword';
import TenMinuteCard from '../pc/Questions/TenMintueCard';
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

  const [guideActiveIndex, setGuideActiveIndex] = useState(0);

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

  const guide = (index: number) => {
    if (index === 0) {
      return (
        <div className="flex flex-col text-center">
          <p className="text-body4 text-main-500">SPURT TIP 01</p>
          <div className="text-title8 mt-[10px]">
            <p className="text-gray-700">들어가기 직전,</p>
            <p className="text-gray-700">요약노트를 보며 면접을 준비해요</p>
          </div>
        </div>
      );
    } else if (index === 1) {
      return (
        <div className="flex flex-col text-center">
          <p className="text-body4 text-main-500">SPURT TIP 02</p>
          <div className="text-title8 mt-[10px]">
            <p className="text-gray-700">PC에서 질문을 핀 고정하면</p>
            <p className="text-gray-700">
              요약노트에서 빠르게 모아볼 수 있어요
            </p>
          </div>
        </div>
      );
    } else {
      return (
        <div className="flex flex-col text-center">
          <p className="text-body4 text-main-500">SPURT TIP 03</p>
          <div className="text-title8 mt-[10px]">
            <p className="text-gray-700">예상 질문 및 경험은</p>
            <p className="text-gray-700">PC에서만 작성 가능해요</p>
          </div>
        </div>
      );
    }
  };

  return (
    <>
      <div className="bg-main-100 pt-[40px]">
        <div className="px-[16px]">
          <div className="mb-[14px] text-title9 text-gray-700">
            {session ? (
              <p>{session.user?.name}님! 내가 저장한</p>
            ) : (
              <p>내가 저장한</p>
            )}
            <span className="underline underline-offset-4 decoration-4 decoration-main-400">
              질문과 답변
            </span>
            <span>을 확인해요</span>
          </div>
        </div>
        <p className="text-caption3 text-gray-500 px-[16px] pb-[20px]">
          {session ? (
            '질문 모음, 나의 프로젝트를 보고 싶다면 pc 버전으로 가주세요'
          ) : (
            <div className="h-[20px]"></div>
          )}
        </p>
      </div>

      <div className="px-[16px]">
        {session ? (
          <>
            <div className="flex flex-row mt-[20px]">
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
            {myNotes.questions.length === 0 ? (
              <div className="bg-white h-[344px] rounded-[20px] mt-[20px] gap-[6px] flex flex-col justify-center items-center">
                <p className="text-body1 text-gray-600">
                  아직 등록한 질문-답변이 없어요
                </p>
                <p className="text-body7 text-gray-500">
                  PC에서 예상질문과 답변을 만들어 주세요
                </p>
              </div>
            ) : (
              <div className="flex flex-col py-[20px] pl-[16px]  rounded-[20px] bg-white mt-[20px] mb-[18px]">
                <div className="flex">
                  <span className="text-caption2">총&nbsp;</span>
                  <span className="text-caption1">
                    {myNotes.questions.length}
                  </span>
                  <span className="text-caption2">개</span>
                </div>
                <div className="mt-[20px]">
                  <Swiper
                    spaceBetween={12}
                    slidesPerView={1.3}
                    slidesOffsetAfter={40}
                  >
                    {myNotes.questions.map((value, index) => {
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
                    })}
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
                      <div
                        className={
                          isKeywordVisible
                            ? 'text-content_body2 whitespace-pre-line'
                            : 'blur text-content_body2 whitespace-pre-line'
                        }
                        dangerouslySetInnerHTML={{
                          __html:
                            myNotes?.questions[selectedCardIndex]?.mainText,
                        }}
                      ></div>
                    </>
                  )}
                </div>
              </div>
            )}
          </>
        ) : (
          <>
            <div className="bg-white rounded-[20px] mt-[30px] pt-[30px] pb-[32px] px-[23px] select-none">
              {guide(guideActiveIndex)}
              <Swiper
                style={{ width: '300px', height: '400px' }}
                pagination={true}
                modules={[Pagination]}
                onActiveIndexChange={(swiper) =>
                  setGuideActiveIndex(swiper.activeIndex)
                }
                speed={500}
              >
                <SwiperSlide
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Image src={Ill1} alt="onBoarding" width={300} height={300} />
                </SwiperSlide>
                <SwiperSlide
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Image src={Ill2} alt="onBoarding" width={300} height={300} />
                </SwiperSlide>
                <SwiperSlide
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Image src={Ill3} alt="onBoarding" width={300} height={300} />
                </SwiperSlide>
              </Swiper>
            </div>
          </>
        )}
      </div>
      <div className="mb-[100px]"></div>
    </>
  );
}
