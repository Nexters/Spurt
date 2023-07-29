const QuestionCard = () => {
  return (
    <div className="flex flex-col">
      <div className="text-heading2 text-gray-700 h-[169px] py-[22px] px-[20px] flex items-center bg-gray-100 border border-gray_line rounded-t-2xl">
        <p className="line-clamp-4">
          {
            "FGI와 IDI 방법론 개념에 대해 설명하고 사용해야 하는 이유를 설명하시오오오오/35자"
          }
        </p>
      </div>
      <button className="h-[71px] text-body5 text-gray-500 text-center gap-6 self-stretch bg-gray-100 border-x border-b border-gray_line rounded-b-2xl">
        답변쓰기 +
      </button>
    </div>
  );
};

export default QuestionCard;
