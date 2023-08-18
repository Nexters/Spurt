import { useRouter } from 'next/router';

export interface DeleteModalProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  setShow: () => void;
  option: () => void;
}

const DeleteGuide = ({ setShow, option }: DeleteModalProps) => {
  const router = useRouter();
  return (
    <div className="fixed z-50 top-0 left-0 w-full h-full bg-gray-700 bg-opacity-70 flex flex-col justify-center items-center">
      <div className="text-center w-[460px] h-[161px] rounded-t-[30px] bg-white">
        <p className="mt-[50px] mb-1 text-title4 text-gray-600 select-none">
          정말로 삭제하시겠어요?
        </p>
        <p className="text-heading3 text-gray-500 mb-[66px] select-none">
          이 글에 함께 작성된 예상 질문들도 지워져요.
        </p>
      </div>
      <div className="flex w-[460px] h-[89px] border-t-[0.8px] rounded-b-[30px] bg-white">
        <button
          className="flex justify-center items-center border-r-[0.8px] w-[230px] text-heading2 text-gray-500 select-none"
          onClick={() => setShow()}
        >
          취소하기
        </button>
        <button
          className="flex justify-center items-center w-[230px] text-heading1 text-red select-none"
          onClick={() => option()}
        >
          삭제하기
        </button>
      </div>
    </div>
  );
};

export default DeleteGuide;
