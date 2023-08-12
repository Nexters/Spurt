import PinFilledIcon from '@/img/pin-fill-42.svg';
import PinStrokeIcon from '@/img/pin-stroke-42.svg';
interface AnswerCardProps {
  questionId: number;
  subject: string;
  mainText: string;
  categoryList: string[];
  createTimestamp: string;
}

const AnswerCard = ({
  questionId,
  subject,
  mainText,
  categoryList,
  createTimestamp,
}: AnswerCardProps) => {
  return (
    <div className="flex flex-col border border-gray_line rounded-[20px] mb-2">
      <div className="flex flex-1 p-4 max-w-[464px] h-[135px]  bg-main-100 rounded-t-[20px]">
        <div className="flex flex-col w-[366px] px-1 pt-2 pb-1">
          <div className="text-heading5 mb-[10px] text-main-500">
            {categoryList}
          </div>
          <p className="text-heading2 text-gray-700 line-clamp-2 ">{subject}</p>
        </div>
        <div className="h-[103px] w-[42px] ml-6">
          <PinFilledIcon />
        </div>
      </div>
      <div className="flex flex-1 flex-col maw-w-[464px] h-[82px] p-5">
        <p className="text-body3 text-gray-600 mb-[10px] min-h-[52px] line-clamp-3">
          {mainText}
        </p>
        <p className="text-caption3 text-gray-400">{createTimestamp}</p>
      </div>
    </div>
  );
};

export default AnswerCard;
