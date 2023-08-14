import { RandomQuestion } from '@/apis/Questions/fetchQuestionByJob';
import PlusIcon from '@/img/plus-20.svg';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

const QuestionCard = ({ subject }: RandomQuestion) => {
  const router = useRouter();
  const { data: session } = useSession();

  return (
    <div className="flex flex-col">
      <div className="text-heading2 text-gray-700 w-[226px] h-[169px] py-[22px] px-[20px] flex bg-gray-100 border border-gray_line rounded-t-2xl">
        <p className="line-clamp-4">{subject}</p>
      </div>
      <button
        className="flex justify-center items-center h-[71px] text-body5 text-gray-500 text-center gap-1 self-stretch bg-gray-100 border-x border-b border-gray_line rounded-b-2xl"
        onClick={() => {
          router.push({
            pathname: session ? '/post' : '/signin',
            query: session ? { subject } : {},
          });
        }}
      >
        답변 쓰기 <PlusIcon />
      </button>
    </div>
  );
};

export default QuestionCard;
