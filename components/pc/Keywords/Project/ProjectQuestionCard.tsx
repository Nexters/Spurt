interface ProjectQuestionCardProps {
  index: number;
  title: string;
}

const ProjectQuestionCard = ({
  index,
  title,
}: ProjectQuestionCardProps) => {
  return (
    <div
      className={`flex flex-col p-[16px] bg-main-100 rounded-[16px] cursor-pointer min-w-[226px] max-w-[226px]`}
      //   onClick={() => onClickCard(index)}
    >
      <div className="text-title8 h-[58px]">{title}</div>
    </div>
  );
};

export default ProjectQuestionCard;
