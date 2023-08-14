import fetchQuestion, {
  QuestionResponse,
} from '@/apis/Questions/fetchQuestion';
import CTA3Black from '@/components/pc/Keywords/Buttons/CTA3-black';
import CTA4 from '@/components/pc/Keywords/Buttons/CTA4';
import ButtonS from '@/components/pc/Keywords/Buttons/button-s';
import VisibleBtn from '@/components/pc/Keywords/Buttons/visibleBtn';
import Carousel from '@/components/pc/Keywords/Carousel/Carousel';
import Keyword from '@/components/pc/Keywords/Keyword';
import TenMinuteCard from '@/components/pc/Keywords/Questions/TenMintueCard';
import Header from '@/components/pc/Keywords/header';
import { noteCategory } from '@/const/categories';
import Illust from '@/img/Illust_summaryNote.png';
import EditIcon from '@/img/edit-16.svg';
import Pin from '@/img/pc-pin-red-24.svg';
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
import { useRecoilState } from 'recoil';
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
        jobGroup: 'DEVELOPER',
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

  const handleEdit = ({
    paramQuestionId,
    paramTitle,
    paramContent,
    paramCategories,
  }: EditParam) => {
    router.push({
      pathname: '/post',
      query: { paramQuestionId, paramTitle, paramContent, paramCategories },
    });
  };

  return (
    <>
      <div className="absolute top-[0px] left-0 bottom-0 bg-main-100 w-full h-[580px]"></div>
      <div className="absolute w-[1000px]">
        <Header />
        <div className="text-title1 flex justify-between mt-[60px]">
          <div>
            <p>내가 저장한</p>

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
        <div className="mt-[12px] mb-[100px]">
          <Image src={Illust} alt="SummaryNote"></Image>
        </div>
        <div className="mt-[46px]">
          <div className="flex items-center">
            <Pin></Pin>
            <span className="text-title2 ml-[10px]">요약 노트</span>
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
                <div className="flex flex-col px-[30px] py-[30px] rounded-[20px] bg-white mt-[20px]">
                  <div className="flex flex-col items-center justify-center rounded-[16px] border border-gray-100 h-[380px] ">
                    <div className="text-body7 text-gray-500 mb-[6px]">
                      예상 질문을 만들고 답하러 가볼까요?
                    </div>
                    <div className="text-heading1 mb-[24px]">
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
                <div className="flex flex-col pt-[30px] pl-[30px] pb-[30px] rounded-[20px] bg-white mt-[20px]">
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
                            : 'whitespace-pre-line blur'
                        }
                      >
                        {myNotes.questions[selectedCardIndex]
                          ? myNotes.questions[selectedCardIndex].mainText
                          : ''}
                      </div>
                    </div>
                  </div>
                  <div className="flex mt-[50px] justify-end mr-[30px]">
                    <CTA4
                      onClick={() =>
                        handleEdit({
                          paramQuestionId:
                            myNotes.questions[selectedCardIndex].questionId,
                          paramTitle:
                            myNotes.questions[selectedCardIndex].subject,
                          paramContent:
                            myNotes.questions[selectedCardIndex].mainText,
                          paramCategories:
                            myNotes.questions[selectedCardIndex].categoryList,
                        })
                      }
                    >
                      수정하기<EditIcon></EditIcon>
                    </CTA4>
                  </div>
                </div>
              </>
            )}
          </>
        ) : (
          <>
            <div className="flex flex-col px-[30px] py-[30px] rounded-[20px] bg-white mt-[20px]">
              <div className="flex flex-col items-center justify-center rounded-[16px] border border-gray-100 h-[380px] ">
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
