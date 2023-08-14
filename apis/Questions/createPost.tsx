import ApiClient from '../client';

interface PostProps {
  subject: string;
  mainText: string;
  keyWordList: string[];
  categoryList: string[];
  experienceId?: number;
}
const createPost = async ({
  subject,
  mainText,
  keyWordList,
  categoryList,
  experienceId,
}: PostProps) => {
  try {
    const result = await ApiClient.post(`/v1/question`, {
      subject,
      mainText,
      keyWordList,
      categoryList,
      experienceId,
    });
    if (result && result.data && result.data.code === 0) {
      if (result.data.data.questionId) {
        return result.data.data.questionId;
      } else {
        return result.data.data.experienceId;
      }
      console.log(result.data.data);
    }
  } catch (e) {
    console.log(e);
    return false;
  }
  return false;
};

export default createPost;
