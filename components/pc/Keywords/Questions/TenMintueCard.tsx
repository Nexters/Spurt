interface CardProp {
   index: number;
   selectedIndex: number;
   text: string;
   onClick: (value: number) => void;
}

const TenMinuteCard = ({ index, selectedIndex, text, onClick }: CardProp) => {
   return (
      <div
         className={
            index == selectedIndex
               ? 'flex p-[20px] h-[160px] bg-main-200 rounded-[20px] cursor-pointer'
               : 'flex p-[20px] h-[160px] bg-gray-100 rounded-[20px] cursor-pointer'
         }
         onClick={() => onClick(index)}>
         <div className="text-heading2">{text}</div>
      </div>
   );
};

export default TenMinuteCard;
