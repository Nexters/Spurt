import fetchQuestion from '@/apis/Questions/fetchQuestion';
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
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function TenMinuteNote() {
  const [isKeywordVisible, setKeywordVisibility] =
    useRecoilState(keywordVisibleState);
  const [isAnswerVisible, setAnswerVisibility] =
    useRecoilState(answerVisibleState);
  const [selectedCardIndex, setSelectedCardIndex] =
    useRecoilState(selectedCardState);
  const [selectedCategory, setSelectedCategory] = useRecoilState(
    selectedNoteCategoriesState,
  );
  const [myNotes, setMyNotes] = useRecoilState(myNotesState);
  const { data: session } = useSession();

  useEffect(() => {
    async function call() {
      const result = await fetchQuestion(
        {
          jobGroup: 'DEVELOPER',
          myQuestionIndicator: true,
          size: 20,
        },
        session?.user,
      );
      console.log(result);
      setMyNotes(result);
    }
    call();
  }, [session]);

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
          <ButtonS>질문-답변 만들기</ButtonS>
        </div>
      </div>
      <div className="mt-[46px]">
        <div className="flex items-center">
          <Pin></Pin>
          <span className="text-title2 ml-[10px]">10분 노트</span>
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
          <p className="text-body2">총 20개</p>
        </div>
        <div className="flex mt-[20px]">
          <Swiper
            spaceBetween={12}
            slidesPerView={4}
            slidesOffsetAfter={1100}
            breakpoints={{
              766: {
                slidesOffsetAfter: 880,
              },
              1025: {
                slidesOffsetAfter: 470,
              },
            }}
          >
            <SwiperSlide>
              <TenMinuteCard
                index={0}
                selectedIndex={selectedCardIndex}
                text="UX와 UI의 차이점을 말해주세요."
                onClick={setSelectedCardIndex}
                isPc={true}
              ></TenMinuteCard>
            </SwiperSlide>
            <SwiperSlide>
              <TenMinuteCard
                index={1}
                selectedIndex={selectedCardIndex}
                text="UX와 UI의 차이점을 말해주세요."
                onClick={setSelectedCardIndex}
                isPc={true}
              ></TenMinuteCard>
            </SwiperSlide>
            <SwiperSlide>
              <TenMinuteCard
                index={2}
                selectedIndex={selectedCardIndex}
                text="UX와 UI의 차이점을 말해주세요."
                onClick={setSelectedCardIndex}
                isPc={true}
              ></TenMinuteCard>
            </SwiperSlide>
            <SwiperSlide>
              <TenMinuteCard
                index={3}
                selectedIndex={selectedCardIndex}
                text="UX와 UI의 차이점을 말해주세요."
                onClick={setSelectedCardIndex}
                isPc={true}
              ></TenMinuteCard>
            </SwiperSlide>
            <SwiperSlide>
              <TenMinuteCard
                index={4}
                selectedIndex={selectedCardIndex}
                text="UX와 UI의 차이점을 말해주세요."
                onClick={setSelectedCardIndex}
                isPc={true}
              ></TenMinuteCard>
            </SwiperSlide>
            <SwiperSlide>
              <TenMinuteCard
                index={5}
                selectedIndex={selectedCardIndex}
                text="UX와 UI의 차이점을 말해주세요."
                onClick={setSelectedCardIndex}
                isPc={true}
              ></TenMinuteCard>
            </SwiperSlide>
            <SwiperSlide>
              <TenMinuteCard
                index={6}
                selectedIndex={selectedCardIndex}
                text="UX와 UI의 차이점을 말해주세요."
                onClick={setSelectedCardIndex}
                isPc={true}
              ></TenMinuteCard>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="flex mt-[30px]">
          <div className="flex mb-[13px] flex-col max-w-[390px]">
            <div className="flex justify-between">
              <div>답변 키워드</div>
              <VisibleBtn
                isVisible={isKeywordVisible}
                setVisibility={setKeywordVisibility}
              ></VisibleBtn>
            </div>
            <div className="mt-[20px]">
              <Keyword
                text="개발자 협업 : 넥스터즈"
                isVisible={isKeywordVisible}
                isPc={true}
              ></Keyword>
              <Keyword
                text="면접을 준비하는 취업준비생을 위한 서비스"
                isVisible={isKeywordVisible}
                isPc={true}
              ></Keyword>
              <Keyword
                text="개발자와 협업하며 프론트엔드에 매력"
                isVisible={isKeywordVisible}
                isPc={true}
              ></Keyword>
              <Keyword
                text="독학으로 개발을 공부해 6개월 만에 포트폴리오 홈페이지 홈페이지"
                isVisible={isKeywordVisible}
                isPc={true}
              ></Keyword>
              <Keyword
                text="이후 개발자로서 커리어를 쌓기 위해"
                isVisible={isKeywordVisible}
                isPc={true}
              ></Keyword>
            </div>
          </div>
          <div className="flex">
            <div className="bg-[#989898] w-[0.7px] mx-[30px]"></div>
          </div>
          <div className="flex flex-col mr-[30px] max-w-[520px]">
            <div className="flex justify-between mb-[20px]">
              <div>전체 답변</div>
              <VisibleBtn
                isVisible={isAnswerVisible}
                setVisibility={setAnswerVisibility}
              ></VisibleBtn>
            </div>
            <div className={isAnswerVisible ? '' : 'blur'}>
              본문 내용 <br></br>
              어쩌고 저쩌고 어쩌고 저쩌고어쩌고 저쩌고어쩌고 저쩌고어쩌고
              저쩌고어쩌고 저쩌고어쩌고 저쩌고어쩌고 저쩌고어쩌고 저쩌고어쩌고
              저쩌고어쩌고 저쩌고어쩌고 저쩌고어쩌고 저쩌고어쩌고 저쩌고어쩌고
              저쩌고어쩌고 저쩌고어쩌고 저쩌고어쩌고 저쩌고어쩌고 저쩌고어쩌고
              저쩌고어쩌고 저쩌고어쩌고 저쩌고어쩌고 저쩌고어쩌고 저쩌고어쩌고
              저쩌고어쩌고 저쩌고어쩌고 저쩌고어쩌고 저쩌고어쩌고 저쩌고어쩌고
              저쩌고어쩌고 저쩌고어쩌고 저쩌고어쩌고 저쩌고어쩌고 저쩌고어쩌고
              저쩌고어쩌고 저쩌고어쩌고 저쩌고어쩌고 저쩌고어쩌고 저쩌고어쩌고
              저쩌고어쩌고 저쩌고어쩌고 저쩌고어쩌고 저쩌고어쩌고 저쩌고어쩌고
              저쩌고어쩌고 저쩌고어쩌고 저쩌고어쩌고 저쩌고어쩌고 저쩌고어쩌고
              저쩌고어쩌고 저쩌고어쩌고 저쩌고어쩌고 저쩌고
              <br></br>
              <br></br>
              본문 내용 <br></br>
              어쩌고 저쩌고 어쩌고 저쩌고어쩌고 저쩌고어쩌고 저쩌고어쩌고
              저쩌고어쩌고 저쩌고어쩌고 저쩌고어쩌고 저쩌고어쩌고 저쩌고어쩌고
              저쩌고어쩌고 저쩌고어쩌고 저쩌고어쩌고 저쩌고어쩌고 저쩌고어쩌고
              저쩌고어쩌고 저쩌고어쩌고 저쩌고어쩌고 저쩌고어쩌고 저쩌고어쩌고
              저쩌고어쩌고 저쩌고어쩌고 저쩌고어쩌고 저쩌고어쩌고 저쩌고어쩌고
              저쩌고어쩌고 저쩌고어쩌고 저쩌고어쩌고 저쩌고어쩌고 저쩌고어쩌고
              저쩌고어쩌고 저쩌고어쩌고 저쩌고어쩌고 저쩌고어쩌고 저쩌고어쩌고
              저쩌고어쩌고 저쩌고어쩌고 저쩌고어쩌고 저쩌고어쩌고 저쩌고어쩌고
              저쩌고어쩌고 저쩌고어쩌고 저쩌고어쩌고 저쩌고어쩌고 저쩌고어쩌고
              저쩌고어쩌고 저쩌고어쩌고 저쩌고어쩌고 저쩌고어쩌고 저쩌고어쩌고
              저쩌고어쩌고 저쩌고어쩌고 저쩌고어쩌고 저쩌고
              <br></br>
              <br></br>
              본문 내용 <br></br>
              어쩌고 저쩌고 어쩌고 저쩌고어쩌고 저쩌고어쩌고 저쩌고어쩌고
              저쩌고어쩌고 저쩌고어쩌고 저쩌고어쩌고 저쩌고어쩌고 저쩌고어쩌고
              저쩌고어쩌고 저쩌고어쩌고 저쩌고어쩌고 저쩌고어쩌고 저쩌고어쩌고
              저쩌고어쩌고 저쩌고어쩌고 저쩌고어쩌고 저쩌고어쩌고 저쩌고어쩌고
              저쩌고어쩌고 저쩌고어쩌고 저쩌고어쩌고 저쩌고어쩌고 저쩌고어쩌고
              저쩌고어쩌고 저쩌고어쩌고 저쩌고어쩌고 저쩌고어쩌고 저쩌고어쩌고
              저쩌고어쩌고 저쩌고어쩌고 저쩌고어쩌고 저쩌고어쩌고 저쩌고어쩌고
              저쩌고어쩌고 저쩌고어쩌고 저쩌고어쩌고 저쩌고어쩌고 저쩌고어쩌고
              저쩌고어쩌고 저쩌고어쩌고 저쩌고어쩌고 저쩌고어쩌고 저쩌고어쩌고
              저쩌고어쩌고 저쩌고어쩌고 저쩌고어쩌고 저쩌고어쩌고 저쩌고어쩌고
              저쩌고어쩌고 저쩌고어쩌고 저쩌고어쩌고 저쩌고
            </div>
          </div>
        </div>
        <div className="flex mt-[50px] justify-end mr-[30px]">
          <CTA4>
            수정하기<EditIcon></EditIcon>
          </CTA4>
        </div>
      </div>
      <div className="h-[100px]"></div>
    </>
  );
}
