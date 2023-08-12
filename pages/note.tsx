import fetchQuestion, { Question } from '@/apis/Questions/fetchQuestion';
import CTA4 from '@/components/pc/Keywords/Buttons/CTA4';
import ButtonS from '@/components/pc/Keywords/Buttons/button-s';
import VisibleBtn from '@/components/pc/Keywords/Buttons/visibleBtn';
import Carousel from '@/components/pc/Keywords/Carousel/Carousel';
import Keyword from '@/components/pc/Keywords/Keyword';
import TenMinuteCard from '@/components/pc/Keywords/Questions/TenMintueCard';
import { noteCategory } from '@/const/categories';
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
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

interface EditParam {
  paramTitle: string;
  paramContent: string;
}

export default function TenMinuteNote() {
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
  const [myNotes, setMyNotes] = useRecoilState<Question[]>(myNotesState);
  const { data: session } = useSession();

  useEffect(() => {
    async function call() {
      if (noteCategory[selectedCategory].code == 'ALL') {
        const result = await fetchQuestion({
          jobGroup: 'DEVELOPER',
          myQuestionIndicator: true,
          size: 20,
        });
        setMyNotes(result);
        setSelectedCardIndex(0);
      } else {
        const result = await fetchQuestion({
          category: noteCategory[selectedCategory].code,
          jobGroup: 'DEVELOPER',
          myQuestionIndicator: true,
          size: 20,
        });
        setMyNotes(result);
        setSelectedCardIndex(0);
      }
    }
    if (session?.user) {
      call();
    }
  }, [session, selectedCategory]);

  const handleEdit = ({ paramTitle, paramContent }: EditParam) => {
    router.push({
      pathname: '/post',
      query: { paramTitle, paramContent },
    });
  };

  return (
    <>
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
      <div className="mt-[46px]">
        <div className="flex items-center">
          <Pin></Pin>
          <span className="text-title2 ml-[10px]">요약 노트</span>
        </div>
        <div className="mt-[20px]">
          <Carousel
            categories={noteCategory}
            isPc={true}
            selectedCateogry={selectedCategory}
            setCategory={setSelectedCategory}
          ></Carousel>
        </div>
      </div>
      <div className="flex flex-col pt-[30px] pl-[30px] pb-[30px] rounded-[20px] bg-white mt-[20px]">
        <div className="flex justify-end mr-[30px]">
          <p className="text-body2">총 {myNotes.length}개</p>
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
            {myNotes.length === 0 ? (
              <>아무것도 없지롱</>
            ) : (
              myNotes.map((value, index) => {
                return (
                  <SwiperSlide key={index}>
                    <TenMinuteCard
                      index={index}
                      selectedIndex={selectedCardIndex}
                      text={value.subject}
                      onClick={setSelectedCardIndex}
                      isPc={true}
                    ></TenMinuteCard>
                  </SwiperSlide>
                );
              })
            )}
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
              {myNotes[selectedCardIndex].keyWordList.length === 0 ? (
                <Keyword
                  text="작성된 키워드가 없어요."
                  isVisible={isKeywordVisible}
                  isPc={true}
                ></Keyword>
              ) : (
                myNotes[selectedCardIndex].keyWordList.map((value, index) => {
                  return (
                    <Keyword
                      key={index}
                      text={value}
                      isVisible={isKeywordVisible}
                      isPc={true}
                    ></Keyword>
                  );
                })
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
              {myNotes[selectedCardIndex]
                ? myNotes[selectedCardIndex].mainText
                : ''}
            </div>
          </div>
        </div>
        <div className="flex mt-[50px] justify-end mr-[30px]">
          <CTA4
            onClick={() =>
              handleEdit({
                paramTitle: myNotes[selectedCardIndex].subject,
                paramContent: myNotes[selectedCardIndex].mainText,
              })
            }
          >
            수정하기<EditIcon></EditIcon>
          </CTA4>
        </div>
      </div>
      <div className="h-[100px]"></div>
    </>
  );
}
