interface JobBtnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  job?: boolean;
  //handleClick: (e: any) => void;
  //select: string;
}

const JobBtn = ({ job, ...props }: JobBtnProps) => {
  return (
    <>
      <button
        className="w-[245px] h-40 px-[59px] py-[69px] text-body1 flex justify-center items-center gap-[10px] bg-white rounded-3xl border border-gray_line hover:bg-main-100 hover:border-main_lines"
        {...props}
      ></button>
    </>
  );
};

export default JobBtn;
