interface CardProp {
   text: string;
}

const TenMinuteCard = ({ text }: CardProp) => {
   return (
      <div className="flex p-[20px] w-[240px] h-[160px] bg-gray-100 rounded-[20px] ml-[12px]">
         <div className="text-heading2">{text}</div>
      </div>
   );
};

export default TenMinuteCard;
