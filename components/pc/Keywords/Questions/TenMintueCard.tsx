interface CardProp {
  index: number;
  selectedIndex: number;
  text: string;
  onClick: (value: number) => void;
  isPc: boolean;
}

const TenMinuteCard = ({
  index,
  selectedIndex,
  text,
  onClick,
  isPc,
}: CardProp) => {
  return (
    <>
      {isPc ? (
        <div
          className={
            index == selectedIndex
              ? `flex p-[20px] h-[160px] bg-main-200 rounded-[20px] cursor-pointer min-w-[300px] max-w-[300px]`
              : `flex p-[20px] h-[160px] bg-gray-100 rounded-[20px] cursor-pointer min-w-[300px] max-w-[300px]`
          }
          onClick={() => onClick(index)}
        >
          <div className="text-heading2">{text}</div>
        </div>
      ) : (
        <div
          className={
            index == selectedIndex
              ? `flex p-[16px] h-[106px] bg-main-200 rounded-[20px] cursor-pointer`
              : `flex p-[16px] h-[106px] bg-gray-100 rounded-[20px] cursor-pointer`
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
