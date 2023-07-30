import Pin from 'img/Group 2609558.svg';
import Carousel from '@/components/pc/Keywords/Carousel/Carousel';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import TenMinuteCard from '../pc/Keywords/Questions/TenMintueCard';
import { useRecoilState } from 'recoil';
import {
  selectedCardState,
  selectedNoteCategoriesState,
} from '@/status/NoteStatus';
import Toggle from './toggle';
import Keyword from '../pc/Keywords/Keyword';
import {
  contentToggleState,
  selectedMobileNoteCategoriesState,
} from '@/status/MobileStatus';
import { noteCategory } from '@/const/categories';

export default function MobileHome() {
  const [selectedCardIndex, setSelectedCardIndex] =
    useRecoilState(selectedCardState);
  const [isKeyword, setIsKeyword] = useRecoilState(contentToggleState);
  const [selectedCategory, setSelectedCategory] = useRecoilState(
    selectedMobileNoteCategoriesState,
  );

  return (
    <div>
      <div className="mt-[40px] text-title8">
        <p>꽁지님! 내가 저장한</p>
        <span className="underline underline-offset-8 decoration-4 decoration-main-400">
          질문과 답변
        </span>
        <span>을 확인해요</span>
      </div>
      <p className="mt-[15px] text-caption6 text-gray-500">
        질문 모음, 나의 프로젝트를 보고 싶다면 pc 버전으로 가주세요
      </p>
      <div className="mt-[46px]">
        <div className="flex items-center">
          <Pin></Pin>
          <span className="text-heading1 ml-[10px]">요약 노트</span>
        </div>
        <div className="flex mt-[20px]">
          <Carousel
            categories={noteCategory}
            isPc={false}
            selectedCateogry={selectedCategory}
            setCategory={setSelectedCategory}
          ></Carousel>
        </div>
      </div>
      <div className="flex flex-col pt-[20px] pl-[16px] pb-[20px] rounded-[20px] bg-white mt-[20px] mb-[18px]">
        <div className="flex">
          <span className="text-caption5">총&nbsp;</span>
          <span className="text-caption4">20</span>
          <span className="text-caption5">개</span>
        </div>
        <div className="flex mt-[20px]">
          <Swiper spaceBetween={12} slidesPerView={2} slidesOffsetAfter={20}>
            <SwiperSlide>
              <TenMinuteCard
                index={0}
                selectedIndex={selectedCardIndex}
                text="UX와 UI의 차이점을 말해주세요."
                onClick={setSelectedCardIndex}
                isPc={false}
              ></TenMinuteCard>
            </SwiperSlide>
            <SwiperSlide>
              <TenMinuteCard
                index={1}
                selectedIndex={selectedCardIndex}
                text="UX와 UI의 차이점을 말해주세요."
                onClick={setSelectedCardIndex}
                isPc={false}
              ></TenMinuteCard>
            </SwiperSlide>
            <SwiperSlide>
              <TenMinuteCard
                index={2}
                selectedIndex={selectedCardIndex}
                text="UX와 UI의 차이점을 말해주세요."
                onClick={setSelectedCardIndex}
                isPc={false}
              ></TenMinuteCard>
            </SwiperSlide>
            <SwiperSlide>
              <TenMinuteCard
                index={3}
                selectedIndex={selectedCardIndex}
                text="UX와 UI의 차이점을 말해주세요."
                onClick={setSelectedCardIndex}
                isPc={false}
              ></TenMinuteCard>
            </SwiperSlide>
            <SwiperSlide>
              <TenMinuteCard
                index={4}
                selectedIndex={selectedCardIndex}
                text="UX와 UI의 차이점을 말해주세요."
                onClick={setSelectedCardIndex}
                isPc={false}
              ></TenMinuteCard>
            </SwiperSlide>
            <SwiperSlide>
              <TenMinuteCard
                index={5}
                selectedIndex={selectedCardIndex}
                text="UX와 UI의 차이점을 말해주세요."
                onClick={setSelectedCardIndex}
                isPc={false}
              ></TenMinuteCard>
            </SwiperSlide>
            <SwiperSlide>
              <TenMinuteCard
                index={6}
                selectedIndex={selectedCardIndex}
                text="UX와 UI의 차이점을 말해주세요."
                onClick={setSelectedCardIndex}
                isPc={false}
              ></TenMinuteCard>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="mb-[18px]">
        <Toggle isToggle={isKeyword} setToggle={setIsKeyword}></Toggle>
      </div>
      <div className="mt-[20px]">
        {isKeyword ? (
          <>
            <Keyword
              text="개발자 협업 : 넥스터즈"
              isVisible={true}
              isPc={false}
            ></Keyword>
            <Keyword
              text="면접을 준비하는 취업준비생을 위한 서비스"
              isVisible={true}
              isPc={false}
            ></Keyword>
            <Keyword
              text="개발자와 협업하며 프론트엔드에 매력"
              isVisible={true}
              isPc={false}
            ></Keyword>
            <Keyword
              text="독학으로 개발을 공부해 6개월 만에 포트폴리오 홈페이지 홈페이지"
              isVisible={true}
              isPc={false}
            ></Keyword>
            <Keyword
              text="이후 개발자로서 커리어를 쌓기 위해"
              isVisible={true}
              isPc={false}
            ></Keyword>
          </>
        ) : (
          <>
            <p className="text-content_body2">
              UX와 UI(User Interface) 디자인 모두 사용자를 위한 최상의 최종
              제품을 제공하기 위함이라는 공통분모가 있지만 두 분야 사이에는
              분명한 차이가 존재합니다.
              <br></br>
              <br></br>
              UX Design
              <br></br>
              UX 디자인에는 사용자 조사 및 프로토타이핑에서부터 제품 마케팅에
              이르기까지 제품 디자인 및 출시를 아울러 고려해야 하는 분석적
              프로세스가 포함됩니다. 사용자의 니즈와 비즈니스 또는 브랜드의 니즈
              사이의 간극 을 메우는 것 이 UX 디자이너의 일이라 할 수 있습니다.
              <br></br>
              <br></br>
              UI Design
              <br></br>
              UX가 전체 경험을 구성하는 것이라면 UI(사용자 인터페이스)는
              사용자가 상호 작용할 시각적이면서 유형적 요소를 만들어 나가는 데
              중점을 둡니다. UX UI 디자인의 조화로운 협력을 통해 제품이
              개발되어야 하며, 이 두 영역의 역할은 제품의 성공에 있어 모두
              동일하게 중요합니다.
            </p>
          </>
        )}
      </div>
    </div>
  );
}
