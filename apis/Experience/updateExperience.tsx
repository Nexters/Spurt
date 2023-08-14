import ApiClient from '@/apis/client';

interface UpdateExperienceParam {
  experienceId: number;
  title: string;
  content: string;
  startDate: string;
  endDate: string | null;
  link: string;
}

const updateExperience = async (param: UpdateExperienceParam) => {
  try {
    const res = await ApiClient.put(`/v1/experience`, param);
    if (res.data.code === 2000) {
      console.log(res.data);
    }
    console.log(res);
    if (res && res.data && res.data.code === 0) {
      return true;
    }
  } catch (error) {
    console.log('createProject 에러 ', error);
    return false;
  }
  return false;
};

export default updateExperience;
