import fetchQuestion, {
  QuestionResponse,
} from '@/apis/Questions/fetchQuestion';
import updatePost, { UpdatePostParam } from '@/apis/Questions/updatePost';
import { noteCategory } from '@/const/categories';
import PinFill from '@/img/pin-fill-42.svg';
import PinStroke from '@/img/pin-stroke-42.svg';
import { jobState } from '@/status/JobStatus';
import { myNotesState, selectedNoteCategoriesState } from '@/status/NoteStatus';
import { useRecoilState, useRecoilValue } from 'recoil';

interface CardProp {
  index: number;
  selectedIndex: number;
  text: string;
  onClick: (value: number) => void;
  isPc: boolean;
  questionId: number;
  isPinned: boolean;
}

const TenMinuteCard = ({
  index,
  selectedIndex,
  text,
  onClick,
  isPc,
  questionId,
  isPinned,
}: CardProp) => {
  const [myNotes, setMyNotes] = useRecoilState<QuestionResponse>(myNotesState);
  const [selectedCategory, setSelectedCategory] = useRecoilState(
    selectedNoteCategoriesState,
  );
  const myJob = useRecoilValue(jobState);

  const handlePin = async () => {
    await updatePost({
      questionId: questionId,
      pinIndicator: !isPinned,
    } as UpdatePostParam);

    const result = await fetchQuestion({
      category: noteCategory[selectedCategory].code,
      jobGroup: myJob,
      myQuestionIndicator: true,
      pinIndicator: true,
      size: 20,
    });
    setMyNotes(result);
  };

  return (
    <>
      {isPc ? (
        <div
          className={
            index == selectedIndex
              ? `flex flex-col p-[20px] bg-main-200 rounded-[20px] cursor-pointer min-w-[226px] max-w-[226px]`
              : `flex flex-col p-[20px] bg-gray-100 rounded-[20px] cursor-pointer min-w-[226px] max-w-[226px]`
          }
          onClick={() => onClick(index)}
        >
          <div className="text-heading2 h-[152px]">{text}</div>
          <div className="flex justify-end mt-[14px]">
            <button onClick={handlePin}>
              {isPinned ? <PinFill></PinFill> : <PinStroke></PinStroke>}
            </button>
          </div>
        </div>
      ) : (
        <div
          className={
            index == selectedIndex
              ? `flex p-[16px] h-[106px] bg-main-200 rounded-[20px] cursor-pointer min-w-[250px] max-w-[250px]`
              : `flex p-[16px] h-[106px] bg-gray-100 rounded-[20px] cursor-pointer min-w-[250px] max-w-[250px]`
          }
          onClick={() => onClick(index)}
        >
          <div className="text-heading6">{text}</div>
        </div>
      )}
    </>
  );
};

export default TenMinuteCard;
