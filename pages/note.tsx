import ButtonS from '@/components/Buttons/button-s';
import Pin from '../img/Group 2609558.svg';
import Carousel from '@/components/Carousel/Carousel';

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
            <Carousel></Carousel>
         </div>
         <div className="flex flex-col w-[560px] pt-[20px] pl-[20px] pb-[30px] rounded-[20px] bg-white">
            <div className="flex">
               <p className="text-body2">총 20개</p>
            </div>
            <div className="flex mt-[20px] h-[40px]">슬라이드 들어갈 자리</div>
            <div className="flex mt-[20px] h-[100px]">키워드 들어갈 자리</div>
         </div>
         <div className="h-[100px]"></div>
      </>
   );
}
