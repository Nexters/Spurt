const SelectJob = () => {
  return (
    <div className="flex flex-col">
      <div className="text-title1 text-center mb-[100px]">
        {" "}
        {/** mt 안넣음 */}
        <p>서영님은 어떤 직군 면접을</p>
        <p>준비하나요?</p>
      </div>
      <div className="flex flex-row justify-center">
        <div className="w-[245px] h-40 px-[59px] py-[69px] mr-[10px] mb-[10px] text-body1 flex justify-center items-center gap-[10px] bg-white rounded-3xl border border-gray_line hover:bg-main-100 hover:border-main_line">
          개발
        </div>
        <div className="w-[245px] h-40 px-[59px] py-[69px] text-body1 flex justify-center items-center gap-[10px] bg-white rounded-3xl border border-gray_line hover:bg-main-100 hover:border-main_line">
          디자인
        </div>
      </div>
      <div className="flex flex-row justify-center">
        <div className="w-[245px] h-40 px-[59px] py-[69px] mr-[10px] text-body1 flex justify-center items-center gap-[10px] bg-white rounded-3xl border border-gray_line hover:bg-main-100 hover:border-main_line">
          마케팅
        </div>
        <div className="w-[245px] h-40 px-[59px] py-[69px] text-body1 flex justify-center items-center gap-[10px] bg-white rounded-3xl border border-gray_line hover:bg-main-100 hover:border-main_line">
          그 외 직군
        </div>
      </div>
    </div>
  );
};

export default SelectJob;
