interface Cta3Props {
  text: string;
}

const CTA3 = ({ text }: Cta3Props) => {
  return (
    <button className="text-body8 w-[67px] h-[36px] bg-main-400 text-white py-[8px] px-[14px] flex justify-center items-center rounded-[10px] border border-main-500 ">
      <p className="">{text}</p>
    </button>
  );
};

export default CTA3;
