import ApiClient from '@/apis/client';
import { Question } from '../Questions/fetchQuestion';

interface ExperienceResponse {
  experienceList: Experience[];
}

export interface Experience {
  experienceId: number;
  title: string;
  content: string;
  startDate: string;
  endDate: string;
  link: string;
  questionList: Question[];
}

const fetchProject = async () => {
  try {
    const res = await ApiClient.get(`/v1/experience`);
    if (res.data.code === 2000) {
      console.log(res.data);
    } else {
      console.log(res.data.data);
    }
    return res.data.data as ExperienceResponse;
  } catch (error) {
    console.log('fetchQuestion 에러 ', error);
    return {
      experienceList: [],
    } as ExperienceResponse;
  }
};

export default fetchProject;
