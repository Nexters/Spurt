import CloseIcon from '@/img/delete-32.svg';
import EditGuideImage from '@/img/editGuide.png';
import Image from 'next/image';
import { ModalProps } from './PinGuide';

const EditGuide = ({ setShow }: ModalProps) => {
  return (
    <div className="fixed z-[50] top-0 left-0 w-full h-full bg-gray-700 bg-opacity-70 flex flex-col justify-center items-center">
      <div className="flex flex-col text-center w-[1000px] h-[650px] bg-[#F9F6F5] rounded-[40px]">
        <div className="flex flex-col">
          <button
            className="flex justify-end mt-[30px] mr-[30px]"
            onClick={() => setShow()}
          >
            <CloseIcon />
          </button>
          <div className="text-title1">
            <p>텍스트를 드래그하면</p>
            <p>에디팅을 할 수 있어요</p>
          </div>
        </div>
        <div className="flex rounded-br-[40px] w-[1000px] h-[500px]">
          <Image
            src={EditGuideImage}
            alt="editGuide"
            className="rounded-br-[40px]"
          />
        </div>
      </div>
    </div>
  );
};

export default EditGuide;
