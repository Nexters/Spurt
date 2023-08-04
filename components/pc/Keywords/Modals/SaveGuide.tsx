import { ModalProps } from './PinGuide';

const SaveGuide = ({ setShow }: ModalProps) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-700 bg-opacity-70 flex flex-col justify-center items-center">
      <div className="w-[460px] h-[163px] rounded-t-[20px] bg-white"></div>
      <div className="flex w-[460px] h-[83px] rounded-b-[20px] border-t-[1px] bg-white">
        <button
          className="flex justify-center items-center w-[230px] border-r-[1px] text-heading1 text-gray-600"
          onClick={() => setShow()}
        >
          페이지 유지하기
        </button>
        <button
          className="flex justify-center items-center w-[230px] text-heading1 text-red"
          onClick={() => setShow()}
        >
          나가기
        </button>
      </div>
    </div>
  );
};

export default SaveGuide;
