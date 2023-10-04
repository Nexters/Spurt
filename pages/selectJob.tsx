import signup from '@/apis/Questions/signup';
import ButtonXl from '@/components/pc/Buttons/button-xl';
import JobBtn from '@/components/pc/Buttons/jobBtn';
import {
  allJobGroupList,
  allJobGroupMap,
  allJobGroupMapEn,
} from '@/const/jobGroups';
import { jobState } from '@/status/JobStatus';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';

const SelectJob = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const [job, setJob] = useRecoilState(jobState);

  const handleClick = (type: string) => {
    setJob(allJobGroupMap.get(type)?.name as string);
  };
  const handleSignUp = (job: string) => {
    signup(job).then(() => {
      router.push({ pathname: '/' });
    });
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="text-title1 text-center mb-[40px]">
        <p>{session?.user?.name}님은 어떤 직군 면접을</p>
        <p>준비하나요?</p>
      </div>
      <div className="flex-col gap-[10px] mb-[80px] grid grid-cols-2">
        {allJobGroupList.map((item) => {
          return (
            <JobBtn
              key={item}
              onClick={() => {
                handleClick(item);
              }}
              style={
                item === allJobGroupMapEn.get(job)?.code
                  ? {
                      backgroundColor: '#FFF4CE',
                      border: '1px solid #FEC20C',
                    }
                  : { backgroundColor: 'white' }
              }
            >
              {item}
            </JobBtn>
          );
        })}
      </div>
      <div>
        {job ? (
          <ButtonXl
            onClick={() => handleSignUp(job)}
            style={{ backgroundColor: '#302e2e' }}
          >
            이 직군으로 저장하기
          </ButtonXl>
        ) : (
          <ButtonXl style={{ backgroundColor: '#e9e9e9' }}>
            이 직군으로 저장하기
          </ButtonXl>
        )}
      </div>
    </div>
  );
};

export default SelectJob;
