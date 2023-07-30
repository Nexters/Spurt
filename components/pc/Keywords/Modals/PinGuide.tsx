import ButtonXl from '../Buttons/button-xl';
import Guide from '@/img/pinGuide.svg';

export interface ModalProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  setShow: () => void;
}

const PinGuide = ({ setShow }: ModalProps) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-700 bg-opacity-70 flex flex-col justify-center items-center">
      <div className="flex items-center flex-col w-[580px] h-[506px] rounded-t-[40px] bg-main-100">
        <div className="mt-[60px] text-title2 text-gray-700 text-center">
          <p>방금 내가 누른 핀은</p>
          <p>요약 노트에서 (형용사/부사) 볼 수 있어요!</p>
        </div>
        <Guide />
      </div>
      <div className="flex justify-center items-center w-[580px] h-[144px] bg-white rounded-b-[40px]">
        <ButtonXl onClick={() => setShow()}>내 요약노트 보러가기</ButtonXl>
      </div>
    </div>
  );
};

export default PinGuide;
