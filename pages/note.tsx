import fetchQuestion, {
  QuestionResponse,
} from '@/apis/Questions/fetchQuestion';
import CTA3Black from '@/components/pc/Buttons/CTA3-black';
import CTA4 from '@/components/pc/Buttons/CTA4';
import ButtonS from '@/components/pc/Buttons/button-s';
import VisibleBtn from '@/components/pc/Buttons/visibleBtn';
import Carousel from '@/components/pc/Carousel/Carousel';
import Keyword from '@/components/pc/Keyword';
import TenMinuteCard from '@/components/pc/Questions/TenMintueCard';
import Header from '@/components/pc/header';
import { noteCategory } from '@/const/categories';
import Illust from '@/img/Illust_summaryNote.png';
import EditIcon from '@/img/edit-16.svg';
import Pin from '@/img/pc-pin-red-24.svg';
import Pin2 from '@/img/pc-pin-red-border-24.svg';
import {
  answerVisibleState,
  keywordVisibleState,
  myNotesState,
  selectedCardState,
  selectedNoteCategoriesState,
} from '@/status/NoteStatus';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

interface EditParam {
  paramQuestionId: number;
  paramTitle: string;
  paramContent: string;
  paramCategories: string[];
}

export default function SummaryNoteHome() {
  const router = useRouter();
  const [isKeywordVisible, setKeywordVisibility] =
    useRecoilState(keywordVisibleState);
  const [isAnswerVisible, setAnswerVisibility] =
    useRecoilState(answerVisibleState);
  const [selectedCardIndex, setSelectedCardIndex] =
    useRecoilState(selectedCardState);
  const [selectedCategory, setSelectedCategory] = useRecoilState(
    selectedNoteCategoriesState,
  );
  const [myNotes, setMyNotes] = useRecoilState<QuestionResponse>(myNotesState);
  const { data: session } = useSession();

  useEffect(() => {
    async function call() {
      const result = await fetchQuestion({
        category: noteCategory[selectedCategory].code,
        myQuestionIndicator: true,
        size: 20,
        pinIndicator: true,
      });
      setMyNotes(result);
      setSelectedCardIndex(0);
    }
    if (session?.user) {
      call();
    }
  }, [session, selectedCategory]);

  const handleEdit = () => {
    router.push({
      pathname: session ? '/post' : '/signin',
      query: {
        paramQuestionId: myNotes.questions[selectedCardIndex].questionId,
      },
    });
  };

  return (
    <>
      <div className="absolute top-[0px] left-0 bottom-0 bg-main-100 w-full h-[580px]"></div>
      <div className="absolute w-[1000px]">
        <Header />
        <div className="text-title1 text-gray-700 flex justify-between mt-[60px]">
          <div>
            <p>면접 직전, 핀으로 고정한</p>

            <span className="underline underline-offset-8 decoration-4 decoration-main-400">
              질문과 답변
            </span>
            <span>을 확인해요</span>
          </div>
          <div className="flex items-end">
            <Link href={'/post'}>
              <ButtonS>질문-답변 만들기</ButtonS>
            </Link>
          </div>
        </div>
        <div className="mt-[12px] mb-[80px]">
          <Image src={Illust} alt="SummaryNote"></Image>
        </div>
        <div className="mt-[40px]">
          <div className="flex items-center gap-2">
            <Pin2></Pin2>
            <span className="text-gray-700 text-title2">요약 노트</span>
          </div>
        </div>
        {session ? (
          <>
            <div className="mt-[20px]">
              <Carousel
                categories={noteCategory}
                isPc={true}
                selectedCateogry={selectedCategory}
                setCategory={setSelectedCategory}
              ></Carousel>
            </div>

            {myNotes.questions.length === 0 ? (
              <>
                <div className="flex flex-col px-[30px] py-[30px] rounded-[20px] bg-white mt-[20px] shadow-sm">
                  <div className="flex flex-col items-center justify-center rounded-[16px] border-[0.7px] border-gray_line h-[380px] ">
                    <div className="text-body7 text-gray-500 mb-[6px]">
                      예상 질문을 만들고 답하러 가볼까요?
                    </div>
                    <div className="text-heading1 text-gray-600 mb-[24px]">
                      아직 등록한 질문-답변이 없어요
                    </div>
                    <Link href={'/post'}>
                      <CTA3Black text="첫 질문-답변 만들기"></CTA3Black>
                    </Link>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="flex flex-col pt-[30px] pl-[30px] pb-[30px] rounded-[20px] bg-white mt-[20px] shadow-sm">
                  <div className="flex justify-end mr-[30px]">
                    <p className="text-body2">
                      총 {myNotes.questions.length}개
                    </p>
                  </div>
                  <div className="mt-[20px]">
                    <Swiper
                      spaceBetween={12}
                      slidesPerView={2}
                      breakpoints={{
                        750: {
                          slidesPerView: 2,
                        },
                        1025: {
                          slidesPerView: 3,
                        },
                      }}
                    >
                      {myNotes.questions.map((value, index) => {
                        return (
                          <SwiperSlide key={index}>
                            <TenMinuteCard
                              index={index}
                              selectedIndex={selectedCardIndex}
                              text={value.subject}
                              onClick={setSelectedCardIndex}
                              isPc={true}
                              questionId={value.questionId}
                              isPinned={value.pinIndicator}
                            ></TenMinuteCard>
                          </SwiperSlide>
                        );
                      })}
                    </Swiper>
                  </div>

                  <div className="flex mt-[30px]">
                    <div className="flex mb-[13px] flex-col w-[70%]">
                      <div className="flex justify-between">
                        <div>답변 키워드</div>
                        <VisibleBtn
                          isVisible={isKeywordVisible}
                          setVisibility={setKeywordVisibility}
                        ></VisibleBtn>
                      </div>
                      <div className="mt-[20px]">
                        {!myNotes.questions[selectedCardIndex] ||
                        myNotes.questions[selectedCardIndex].keyWordList
                          .length === 0 ? (
                          <></>
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
                        )}
                      </div>
                    </div>
                    <div className="flex">
                      <div className="bg-[#989898] w-[0.7px] mx-[30px]"></div>
                    </div>
                    <div className="flex flex-col mr-[30px] w-[100%]">
                      <div className="flex justify-between mb-[20px]">
                        <div>전체 답변</div>
                        <VisibleBtn
                          isVisible={isAnswerVisible}
                          setVisibility={setAnswerVisibility}
                        ></VisibleBtn>
                      </div>
                      <div
                        className={
                          isAnswerVisible
                            ? 'whitespace-pre-line'
                            : 'whitespace-pre-line blur-[3px]'
                        }
                        dangerouslySetInnerHTML={{
                          __html:
                            myNotes?.questions[selectedCardIndex]?.mainText,
                        }}
                      ></div>
                    </div>
                  </div>
                  <div className="flex mt-[50px] justify-end mr-[30px]">
                    <CTA4 onClick={handleEdit}>
                      수정하기<EditIcon></EditIcon>
                    </CTA4>
                  </div>
                </div>
              </>
            )}
          </>
        ) : (
          <>
            <div className="flex flex-col px-[30px] py-[30px] rounded-[20px] bg-white mt-[20px] shadow-sm">
              <div className="flex flex-col items-center justify-center rounded-[16px] border-[0.7px] border-gray_line h-[380px] ">
                <div className="text-body7 text-gray-500 mb-[6px]">
                  예상 질문을 만들고 답하러 가볼까요?
                </div>
                <div className="text-heading1 mb-[24px]">
                  아직 등록한 질문-답변이 없어요
                </div>
                <Link href={'/signin'}>
                  <CTA3Black text="첫 질문-답변 만들기"></CTA3Black>
                </Link>
              </div>
            </div>
          </>
        )}
        <div className="h-[100px]"></div>
      </div>
    </>
  );
}
