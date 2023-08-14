interface ToggleProps {
  isToggle: boolean;
  setToggle: (value: boolean) => void;
}

export default function Toggle({ isToggle, setToggle }: ToggleProps) {
  return (
    <div
      className="flex cursor-pointer select-none"
      onClick={() => setToggle(!isToggle)}
    >
      {isToggle ? (
        <div className="flex bg-gray-200 rounded-[50px] px-[4px] py-[4px] content-center">
          <div className="bg-white rounded-[50px] px-[10px] py-[6px]">
            <p className="text-caption1">키워드 보기</p>
          </div>

          <div className="px-[10px] py-[6px]">
            <p className="text-caption2">줄글 보기</p>
          </div>
        </div>
      ) : (
        <div className="flex bg-gray-200 rounded-[50px] px-[4px] py-[4px] content-center">
          <div className="px-[10px] py-[6px]">
            <p className="text-caption2">키워드 보기</p>
          </div>

          <div className="bg-white rounded-[50px] px-[10px] py-[6px]">
            <p className="text-caption1">줄글 보기</p>
          </div>
        </div>
      )}
    </div>
  );
}
