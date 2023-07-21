interface JobBtnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  index: number;
}

const JobBtn = ({ index, ...props }: JobBtnProps) => {
  let styles =
    "w-[245px] h-40 px-[59px] py-[69px] text-body1 flex justify-center items-center gap-[10px] bg-white rounded-3xl border border-gray_line hover:bg-main-100 hover:border-main_lines";

  if (index % 2 == 0) {
    styles += " mr-[10px]";
  }

  if (index < 2) {
    styles += " mb-[10px]";
  }

  return <button className={styles} {...props}></button>;
};

export default JobBtn;
