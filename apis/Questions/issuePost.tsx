import ApiClient from '../client';

interface PostProps {
  subject: string;
  mainText: string;
  keyWordList: string[];
  categoryList: string[];
  experienceId?: number;
}
const issuePost = async ({
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
    console.log(result);
    if (result && result.data && result.data.code === 0) {
      return true;
    }
  } catch (e) {
    console.log(e);
    return false;
  }
  return false;
};

export default issuePost;
