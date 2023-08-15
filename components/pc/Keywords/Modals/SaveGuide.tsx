import { useRouter } from 'next/router';
import { ModalProps } from './PinGuide';

const SaveGuide = ({ setShow }: ModalProps) => {
  const router = useRouter();
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-700 bg-opacity-70 flex flex-col justify-center items-center">
      <div className="text-center w-[460px] h-[161px] rounded-t-[30px] bg-white">
        <p className="mt-[50px] mb-1 text-title4 text-gray-600">
          질문-답변이 저장되었어요!
        </p>
        <p className="text-heading3 text-gray-500 mb-[66px]">
          질문모음 화면에서 나의 답변을 확인해보세요
        </p>
      </div>
      <button
        className="flex justify-center items-center border-t-[1px] w-[460px] text-heading2 text-gray-500 bg-white rounded-b-[30px] h-[89px]"
        onClick={() => {
          setShow();
          router.back();
        }}
      >
        확인하기
      </button>
    </div>
  );
};

export default SaveGuide;
