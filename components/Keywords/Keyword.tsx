interface KeywordProps {
   text: string;
   isVisible: boolean;
}

const Keyword = ({ text, isVisible }: KeywordProps) => {
   return (
      <div className="flex mb-[12px]">
         <div className="w-[2px] rounded-[30px] bg-[#FFD66C] mr-[8px]"></div>
         <div className="px-[14px] py-[8px] bg-main-100 rounded-[5px] border border-main-400 text-body6 break-keep max-w-[352px]">
            <p className={isVisible ? '' : 'blur'}>{text}</p>
         </div>
      </div>
   );
};

export default Keyword;
