import ApiClient from '@/apis/client';

interface ExperienceParam {
  title: string;
  content: string;
  startDate: string;
  endDate: string | null;
  link: string;
}

const createExperience = async (param: ExperienceParam) => {
  try {
    const res = await ApiClient.post(`/v1/experience`, param);
    if (res.data.code === 2000) {
      console.log(res.data);
    }
    if (res && res.data && res.data.code === 0) {
      return true;
    }
  } catch (error) {
    console.log('createProject 에러 ', error);
    return false;
  }
  return false;
};

export default createExperience;
