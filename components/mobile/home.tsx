import Pin from 'img/Group 2609558.svg';
import Carousel from '@/components/pc/Keywords/Carousel/Carousel';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import TenMinuteCard from '../pc/Keywords/Questions/TenMintueCard';
import { useRecoilState } from 'recoil';
import { selectedCardState } from '@/status/TenMinuteNoteStatus';
import Toggle from './toggle';
import Keyword from '../pc/Keywords/Keyword';

export default function MobileHome() {
   const [selectedCardIndex, setSelectedCardIndex] = useRecoilState(selectedCardState);

   return (
      <div>
         <div className="mt-[40px] text-title8">
            <p>꽁지님! 내가 저장한</p>
            <span className="underline underline-offset-8 decoration-4 decoration-main-400">질문과 답변</span>
            <span>을 확인해요</span>
         </div>
         <p className="mt-[15px] text-caption6 text-gray-500">
            질문 모음, 나의 프로젝트를 보고 싶다면 pc 버전으로 가주세요
         </p>
         <div className="mt-[46px]">
            <div className="flex">
               <Pin></Pin>
               <span className="text-title3 ml-[10px]">10분 노트</span>
            </div>
            <div className="mt-[20px]">
               <Carousel></Carousel>
            </div>
         </div>
         <div className="flex flex-col pt-[20px] pl-[16px] pb-[20px] rounded-[20px] bg-white mt-[20px] mb-[18px]">
            <div className="flex">
               <p className="text-body2">총 20개</p>
            </div>
            <div className="flex mt-[20px]">
               <Swiper spaceBetween={12} slidesPerView={4} slidesOffsetAfter={22}>
                  <SwiperSlide>
                     <TenMinuteCard
                        index={0}
                        selectedIndex={selectedCardIndex}
                        text="UX와 UI의 차이점을 말해주세요."
                        onClick={setSelectedCardIndex}></TenMinuteCard>
                  </SwiperSlide>
                  <SwiperSlide>
                     <TenMinuteCard
                        index={1}
                        selectedIndex={selectedCardIndex}
                        text="UX와 UI의 차이점을 말해주세요."
                        onClick={setSelectedCardIndex}></TenMinuteCard>
                  </SwiperSlide>
                  <SwiperSlide>
                     <TenMinuteCard
                        index={2}
                        selectedIndex={selectedCardIndex}
                        text="UX와 UI의 차이점을 말해주세요."
                        onClick={setSelectedCardIndex}></TenMinuteCard>
                  </SwiperSlide>
                  <SwiperSlide>
                     <TenMinuteCard
                        index={3}
                        selectedIndex={selectedCardIndex}
                        text="UX와 UI의 차이점을 말해주세요."
                        onClick={setSelectedCardIndex}></TenMinuteCard>
                  </SwiperSlide>
                  <SwiperSlide>
                     <TenMinuteCard
                        index={4}
                        selectedIndex={selectedCardIndex}
                        text="UX와 UI의 차이점을 말해주세요."
                        onClick={setSelectedCardIndex}></TenMinuteCard>
                  </SwiperSlide>
                  <SwiperSlide>
                     <TenMinuteCard
                        index={5}
                        selectedIndex={selectedCardIndex}
                        text="UX와 UI의 차이점을 말해주세요."
                        onClick={setSelectedCardIndex}></TenMinuteCard>
                  </SwiperSlide>
                  <SwiperSlide>
                     <TenMinuteCard
                        index={6}
                        selectedIndex={selectedCardIndex}
                        text="UX와 UI의 차이점을 말해주세요."
                        onClick={setSelectedCardIndex}></TenMinuteCard>
                  </SwiperSlide>
               </Swiper>
            </div>
         </div>
         <div className="mb-[18px]">
            <Toggle></Toggle>
         </div>
         <div className="mt-[20px]">
            <Keyword text="개발자 협업 : 넥스터즈" isVisible={true}></Keyword>
            <Keyword text="면접을 준비하는 취업준비생을 위한 서비스" isVisible={true}></Keyword>
            <Keyword text="개발자와 협업하며 프론트엔드에 매력" isVisible={true}></Keyword>
            <Keyword text="독학으로 개발을 공부해 6개월 만에 포트폴리오 홈페이지 홈페이지" isVisible={true}></Keyword>
            <Keyword text="이후 개발자로서 커리어를 쌓기 위해" isVisible={true}></Keyword>
         </div>
      </div>
   );
}
