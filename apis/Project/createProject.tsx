import ApiClient from '@/apis/client';

interface ProjectParam {
  title: string;
  content: string;
  startDate: string;
  endDate: string | null;
  link: string;
}

const createProject = async (param: ProjectParam) => {
  try {
    const res = await ApiClient.post(`/v1/experience`, param);
    if (res.data.code === 2000) {
      console.log(res.data);
    }
    console.log(res.data.code);
  } catch (error) {
    console.log('fetchQuestion 에러 ', error);
  }
};

export default createProject;
