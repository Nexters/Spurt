import ButtonXl from '../Buttons/button-xl';
import Guide from '@/img/pinGuide.svg';

const PinGuide = () => {
  return (
    <>
      <div className="flex items-center flex-col w-[580px] h-[506px] rounded-t-[40px] bg-main-100">
        <div className="mt-[60px] text-title2 text-gray-700 text-center">
          <p>방금 내가 누른 핀은</p>
          <p>요약 노트에서 (형용사/부사) 볼 수 있어요!</p>
        </div>
        <Guide />
      </div>
      <div className="flex justify-center items-center w-[580px] h-[144px] bg-white rounded-b-[40px]">
        <ButtonXl>내 요약노트 보러가기</ButtonXl>
      </div>
    </>
  );
};

export default PinGuide;
