import ApiClient from '@/apis/client';
import { Experience } from './fetchExperience';

const getExperience = async (experienceId: number) => {
  try {
    const res = await ApiClient.get(`/v1/experience/${experienceId}`);
    if (res.data.code === 2000) {
      console.log(res.data);
    } else {
      console.log(res.data.data);
    }
    return res.data.data as Experience;
  } catch (error) {
    console.log('fetchQuestion 에러 ', error);
    return {} as Experience;
  }
};

export default getExperience;
