import ButtonS from '@/components/Buttons/button-s';
import Pin from '../img/Group 2609558.svg';
import Carousel from '@/components/Carousel/Carousel';
import TenMinuteCard from '@/components/Questions/TenMintueCard';
import Keyword from '@/components/Keywords/Keyword';

export default function TenMinuteNote() {
   return (
      <>
         <div className="text-title1 flex justify-between mt-[42px]">
            <div>
               <p>내가 저장한</p>

               <span className="underline underline-offset-8 decoration-4 decoration-main-400">질문과 답변</span>
               <span>을 확인해요</span>
            </div>
            <div className="flex items-end">
               <ButtonS>질문 만들기</ButtonS>
            </div>
         </div>
         <div className="mt-[46px]">
            <div className="flex">
               <Pin></Pin>
               <span className="text-title3 ml-[10px]">10분 노트</span>
            </div>
            <div className="mt-[20px]">
               <Carousel></Carousel>
            </div>
         </div>
         <div className="flex flex-col pt-[30px] pl-[30px] pb-[30px] rounded-[20px] bg-white mt-[20px]">
            <div className="flex justify-end mr-[30px]">
               <p className="text-body2">총 20개</p>
            </div>
            <div className="flex">
               <TenMinuteCard text="UX와 UI의 차이점을 말해주세요."></TenMinuteCard>
               <TenMinuteCard text="UX와 UI의 차이점을 말해주세요."></TenMinuteCard>
               <TenMinuteCard text="UX와 UI의 차이점을 말해주세요."></TenMinuteCard>
            </div>

            <div className="flex mt-[30px]">
               <div className="flex mb-[13px] flex-col w-[390px]">
                  <div className="flex justify-between">
                     <div>답변 키워드</div>
                     <div>눈까리 버튼</div>
                  </div>
                  <Keyword text="독학으로 개발을 공부해 6개월 만에 포트폴리오 홈페이지 홈페이지"></Keyword>
                  <Keyword text="독학으로 개발을 공부해 6개월 만에 포트폴리오 홈페이지 홈페이지"></Keyword>
                  <Keyword text="독학으로 개발을 공부해 6개월 만에 포트폴리오 홈페이지 홈페이지"></Keyword>
                  <Keyword text="독학으로 개발을 공부해 6개월 만에 포트폴리오 홈페이지 홈페이지"></Keyword>
               </div>
               <div className="flex">
                  <div></div>
               </div>
               <div className="flex">acv</div>
            </div>
         </div>
         <div className="h-[100px]"></div>
      </>
   );
}
