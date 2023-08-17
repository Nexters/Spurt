interface Cta3Props {
  text: string;
}

const CTA3 = ({ text }: Cta3Props) => {
  return (
    <button className="gap-[10px]  bg-main-400 text-white py-[6px] px-[6px] flex justify-center items-center rounded-[12px] border border-main-500 h-[32px]">
      <p className="text-body8">{text}</p>
    </button>
  );
};

export default CTA3;
