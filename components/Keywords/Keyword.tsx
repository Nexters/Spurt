interface KeywordProps {
   text: string;
}

const Keyword = ({ text }: KeywordProps) => {
   return (
      <div className="flex mb-[12px]">
         <div className="w-[2px] rounded-[30px] bg-[#FFD66C] mr-[8px]"></div>
         <div className="px-[14px] py-[8px] bg-main-100 rounded-[5px] border border-main-400 text-body6 break-keep max-w-[352px]">
            {text}
         </div>
      </div>
   );
};

export default Keyword;
