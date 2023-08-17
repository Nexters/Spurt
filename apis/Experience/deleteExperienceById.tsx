import ApiClient from '@/apis/client';

const deleteExperienceById = async (experienceId: string) => {
  try {
    const res = await ApiClient.delete(`/v1/experience`, {
      data: {
        experienceId: experienceId,
      },
    });
    if (res.data.code === 2000) {
      console.log(res.data);
    }
    console.log(res.data.code);
  } catch (error) {
    console.log('deleteExperienceById 에러 ', error);
  }
};

export default deleteExperienceById;
