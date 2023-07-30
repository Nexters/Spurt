interface AnswerCardProps {
  category: string;
  question: string;
  answer: string;
  date: Date;
  pinned: boolean;
}

const AnswerCard = () => {
  return (
    <div className="flex flex-col border border-gray_line rounded-[20px] mb-2">
      <div className="flex flex-1 p-4 max-w-[464px] h-[135px]  bg-main-100 rounded-t-[20px]">
        <div className="flex flex-col w-[366px] px-1 pt-2 pb-1">
          <div className="text-heading5 mb-[10px] text-main-500">
            직무지식 ・ 직무경험
          </div>
          <p className="text-heading2 text-gray-700 line-clamp-2 ">
            FGI와 IDI 방법론을 활용한다면 그 개념에 대해 설명하고 사용해야하는
            이유를 설명하시오.
          </p>
        </div>
        <div className="h-[103px] w-[42px] ml-6">핀</div>
      </div>
      <div className="flex flex-1 flex-col maw-w-[464px] h-[82px] p-5">
        <p className="text-body3 text-gray-600 mb-[10px] min-h-[52px] line-clamp-3">
          아직 생각중이라 못적었숑!! 으아 졸려 어디까지 보여줄까... 세줄까지는
          괜찮겠다. 괜찮겠다. 아직 생각중이라 ・
        </p>
        <p className="text-caption3 text-gray-400">2023.07.14</p>
      </div>
    </div>
  );
};

export default AnswerCard;
