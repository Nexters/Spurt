interface Cta3Props {
  text: string;
}

const CTA3Black = ({ text }: Cta3Props) => {
  return (
    <button className="gap-[10px]  bg-black text-white py-[12px] px-[18px] flex justify-center items-center rounded-[12px] border h-[46px]">
      <p className="text-body4">{text}</p>
    </button>
  );
};

export default CTA3Black;
