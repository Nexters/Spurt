interface Cta3Props {
  text: string;
}

const CTA3 = ({ text }: Cta3Props) => {
  return (
    <button className="gap-[10px]  bg-main-400 text-white py-[12px] px-[18px] flex justify-center items-center rounded-[12px] border border-main-500 h-[46px]">
      <p className="text-body4">{text}</p>
    </button>
  );
};

export default CTA3;
