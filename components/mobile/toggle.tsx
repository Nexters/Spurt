export default function Toggle() {
   return (
      <div className="flex bg-gray-200 rounded-[50px] max-w-[160px] pl-[6px] py-[4px] content-center">
         <div className="flex mr-[8px]">
            <div className="bg-white rounded-[50px] px-[10px] py-[4px]">
               <p className="text-caption4">키워드 보기</p>
            </div>
         </div>
         <div className="flex">
            <div className="bg-white rounded-[50px] px-[10px] py-[4px]">
               <p className="text-caption5">줄글 보기</p>
            </div>
         </div>
      </div>
   );
}
