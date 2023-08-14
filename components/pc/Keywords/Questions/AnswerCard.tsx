import fetchQuestion, {
  QuestionResponse,
} from '@/apis/Questions/fetchQuestion';
import updatePost, { UpdatePostParam } from '@/apis/Questions/updatePost';
import { allCategoryMaps, mainMyCategory } from '@/const/categories';
import PinFill from '@/img/pin-fill-42.svg';
import PinStroke from '@/img/pin-stroke-42.svg';
import CircleIcon from '@/img/question-circle-4.svg';
import { selectedMainMyCategoriesState } from '@/status/MainStatus';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';

interface AnswerCardProps {
  questionId: number;
  subject: string;
  mainText: string;
  categoryList: string[];
  createTimestamp: string;
  isPinned: boolean;
  onClickPin: (response: QuestionResponse) => void;
}

const AnswerCard = ({
  questionId,
  subject,
  mainText,
  categoryList,
  createTimestamp,
  isPinned,
  onClickPin,
}: AnswerCardProps) => {
  const router = useRouter();
  const [selectedMyCategory, setSelectedMyCategory] = useRecoilState(
    selectedMainMyCategoriesState,
  );

  const handlePin = async () => {
    await updatePost({
      questionId: questionId,
      pinIndicator: !isPinned,
    } as UpdatePostParam);

    const result = await fetchQuestion({
      category: mainMyCategory[selectedMyCategory].code,
      jobGroup: 'DEVELOPER',
      myQuestionIndicator: true,
      size: 20,
    });
    onClickPin(result);
  };

  return (
    <div className="flex flex-col border border-gray_line rounded-[20px] mb-2">
      <div className="flex flex-1 p-4 max-w-[464px] h-[135px]  bg-main-100 rounded-t-[20px]">
        <div
          className="flex flex-col w-[366px] px-1 pt-2 pb-1 cursor-pointer"
          onClick={() => {
            router.push({
              pathname: '/read',
              query: { questionId },
            });
          }}
        >
          <div className="text-heading5 mb-[10px] text-main-500">
            {categoryList.length === 2 ? (
              <div className="flex flex-row items-center gap-2">
                {categoryList[0] && categoryList[1]
                  ? allCategoryMaps.get(categoryList[0])?.name
                  : '없음'}
                <CircleIcon /> {allCategoryMaps.get(categoryList[1])?.name}
              </div>
            ) : (
              <>
                {categoryList[0] ? (
                  allCategoryMaps.get(categoryList[0])?.name
                ) : (
                  <></>
                )}
              </>
            )}
          </div>
          <p className="text-heading2 text-gray-700 line-clamp-2 ">{subject}</p>
        </div>
        <div className="h-[103px] w-[42px] ml-6">
          <button onClick={handlePin}>
            {isPinned ? <PinFill></PinFill> : <PinStroke></PinStroke>}
          </button>
        </div>
      </div>
      <div
        className="flex flex-1 flex-col maw-w-[464px] h-[82px] p-5 cursor-pointer"
        onClick={() => {
          router.push({
            pathname: '/read',
            query: { questionId },
          });
        }}
      >
        <p className="text-body3 text-gray-600 mb-[10px] min-h-[52px] line-clamp-3">
          {mainText}
        </p>
        <p className="text-caption3 text-gray-400">
          {createTimestamp.slice(0, 10)}
        </p>
      </div>
    </div>
  );
};

export default AnswerCard;
