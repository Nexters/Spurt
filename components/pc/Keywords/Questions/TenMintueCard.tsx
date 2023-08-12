import PinFill from '@/img/pin-fill-42.svg';
import PinStroke from '@/img/pin-stroke-42.svg';

interface CardProp {
  index: number;
  selectedIndex: number;
  text: string;
  onClick: (value: number) => void;
  isPc: boolean;
  isPinned: boolean;
}

const TenMinuteCard = ({
  index,
  selectedIndex,
  text,
  onClick,
  isPc,
  isPinned,
}: CardProp) => {
  return (
    <>
      {isPc ? (
        <div
          className={
            index == selectedIndex
              ? `flex flex-col p-[20px] bg-main-200 rounded-[20px] cursor-pointer min-w-[300px] max-w-[300px]`
              : `flex flex-col p-[20px] bg-gray-100 rounded-[20px] cursor-pointer min-w-[300px] max-w-[300px]`
          }
          onClick={() => onClick(index)}
        >
          <div className="text-heading2 h-[152px]">{text}</div>
          <div className="flex justify-end mt-[14px]">
            <button>
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
