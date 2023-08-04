import { ModalProps } from './PinGuide';
import CloseIcon from '@/img/delete-circle-54.svg';

const EditGuide = ({ setShow }: ModalProps) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-700 bg-opacity-70 flex flex-col justify-center items-center">
      <div className="flex justify-end w-[1000px] mb-[10px]">
        <button onClick={() => setShow()}>
          <CloseIcon />
        </button>
      </div>
      <div className="flex flex-col items-center text-center w-[1000px] h-[650px] bg-white rounded-[40px]">
        <div className="text-title1 mt-[60px]">
          <p>텍스트를 드래그하면</p>
          <p>에디팅을 할 수 있어요</p>
        </div>
      </div>
    </div>
  );
};

export default EditGuide;
