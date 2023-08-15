import { useRouter } from 'next/router';
import { ModalProps } from './PinGuide';

const BackGuide = ({ setShow }: ModalProps) => {
  const router = useRouter();
  return (
    <div className="z-50 fixed top-0 left-0 w-full h-full bg-gray-700 bg-opacity-70 flex flex-col justify-center items-center">
      <div className="text-center w-[460px] h-[161px] rounded-t-[30px] bg-white">
        <p className="mt-[50px] mb-1 text-title4 text-gray-600">
          작성 중인 글을 취소하실건가요?
        </p>
        <p className="text-heading3 text-gray-500 mb-[66px]">
          페이지를 나가면, 작성된 글은 저장되지 않아요
        </p>
      </div>
      <div className="flex w-[460px] h-[89px] border-t-[1px] rounded-b-[30px] bg-white">
        <button
          className="flex justify-center items-center border-r-[1px] w-[230px] text-heading2 text-gray-500"
          onClick={() => setShow()}
        >
          페이지 유지하기
        </button>
        <button
          className="flex justify-center items-center w-[230px] text-heading1 text-red"
          onClick={() => router.back()}
        >
          나가기
        </button>
      </div>
    </div>
  );
};

export default BackGuide;
