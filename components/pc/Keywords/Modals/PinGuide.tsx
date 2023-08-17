import ButtonXl from '../Buttons/button-xl';
import Guide from '@/img/pinGuide.png';
import CloseIcon from '@/img/delete-32.svg';
import Image from 'next/image';
import { useRouter } from 'next/router';

export interface ModalProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  setShow: () => void;
}

const PinGuide = ({ setShow }: ModalProps) => {
  const router = useRouter();
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-700 bg-opacity-70 flex flex-col justify-center items-center">
      <div className="flex flex-col w-[580px] h-[518px] rounded-t-[40px] bg-main-100">
        <button
          className="flex justify-end mt-[30px] mr-[30px]"
          onClick={() => setShow()}
        >
          <CloseIcon />
        </button>
        <div className="flex flex-col items-center mt-[10px] text-title2 text-gray-700 text-center">
          <p>방금 내가 누른 핀은</p>
          <p>요약 노트에서 볼 수 있어요!</p>
        </div>
        <div className="flex justify-center mt-[24px]">
          <Image src={Guide} alt="pinGuide" width={491} height={340} />
        </div>
      </div>
      <div className="flex justify-center items-center w-[580px] h-[144px] bg-white rounded-b-[40px]">
        <ButtonXl
          onClick={() => {
            setShow();
            router.push('/note');
          }}
        >
          내 요약노트 보러가기
        </ButtonXl>
      </div>
    </div>
  );
};

export default PinGuide;
