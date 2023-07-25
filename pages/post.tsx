import SumKeyWord from "@/components/pc/Keywords/Buttons/Keyword";
import AddKeyWordBtn from "@/components/pc/Keywords/Buttons/addKeyword";
import ButtonS from "@/components/pc/Keywords/Buttons/button-s";
import ButtonXs from "@/components/pc/Keywords/Buttons/button-xs";

const Post = () => {
  const qCategory = [
    "직무지식",
    "직무경험",
    "협업경험",
    "프로젝트소개",
    "장단점",
    "실패경험",
    "기타",
  ];
  return (
    <>
      <div className="flex justify-end h-[100px]">
        <button>X</button>
      </div>
      <hr />
      <p className="mt-[60px] mb-5 text-title1">질문-답변 만들기</p>
      <input
        className="text-heading1 text-gray-600 w-full px-6 py-[18px] mb-5 border border-gray-300 rounded-2xl placeholder:text-heading3 placeholder:text-gray-300"
        placeholder="질문은 35자 이내로 작성해주세요"
        maxLength={35}
      ></input>
      <div className="flex mb-5">
        {qCategory.map((category) => {
          return <ButtonXs key={category}>{category}</ButtonXs>;
        })}
      </div>
      <div className="p-[30px] min-h-[476px] w-full border border-gray-300 rounded-[20px] bg-white">
        <textarea
          className="min-h-[360px] w-full text-body3 text-gray-600 resize-none placeholder:text-body3 placeholder:text-gray-300"
          placeholder="답변을 입력해주세요"
        ></textarea>
        <hr />
        <div className="flex items-center mt-[30px] mb-[20px] gap-[10px]">
          <p className="text-body1 text-gray-600">요약 키워드</p>
          <p className="text-caption2 text-gray-300">
            요약 키워드는 최대 20개까지 가능해요
          </p>
        </div>
        <div className="flex mb-[12px] gap-[6px] flex-wrap">
          <SumKeyWord></SumKeyWord>
          <SumKeyWord></SumKeyWord>
          <SumKeyWord></SumKeyWord>
          <SumKeyWord></SumKeyWord>
          <SumKeyWord></SumKeyWord>
          <SumKeyWord></SumKeyWord>
          <SumKeyWord></SumKeyWord>
          <SumKeyWord></SumKeyWord>
        </div>
        <div>
          <AddKeyWordBtn> 키워드 추가 + </AddKeyWordBtn>
        </div>
      </div>
      <div className="flex justify-end mt-[30px] mb-[150px]">
        <ButtonS>저장하기</ButtonS>
      </div>
    </>
  );
};

export default Post;
