interface KeywordProps {
  text: string;
  isVisible: boolean;
  isPc: boolean;
}

const Keyword = ({ text, isVisible, isPc }: KeywordProps) => {
  return (
    <>
      {isPc ? (
        <div className="flex mb-[12px]">
          <div className="w-[2px] rounded-[30px] bg-[#FFD66C] mr-[8px]"></div>
          <div className="px-[14px] py-[8px] bg-main-100 rounded-[8px] border border-main-400 text-body6 break-keep max-w-[352px]">
            <p className={isVisible ? '' : 'blur-[3px]'}>{text}</p>
          </div>
        </div>
      ) : (
        <div className="flex mb-[8px]">
          <div className="w-[2px] rounded-[30px] bg-[#FFD66C] mr-[8px]"></div>
          <div className="px-[12px] py-[6px] bg-main-100 rounded-[8px] border border-main-400 text-caption2 break-keep max-w-[316px]">
            <p className={isVisible ? '' : 'blur-[3px]'}>{text}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Keyword;
