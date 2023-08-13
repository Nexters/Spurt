import ApiClient from '@/apis/client';

const deleteQuestion = async (questionId: string) => {
  try {
    const res = await ApiClient.delete(`/v1/question`, {
      data: {
        questionId: questionId,
      },
    });
    if (res.data.code === 2000) {
      console.log(res.data);
    }
    console.log(res.data.code);
  } catch (error) {
    console.log('deleteQuestion 에러 ', error);
  }
};

export default deleteQuestion;
