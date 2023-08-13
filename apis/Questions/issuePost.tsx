import ApiClient from '../client';

interface PostProps {
  subject: string;
  mainText: string;
  keyWordList: string[];
  categoryList: string[];
  experienceId?: string;
}
export default function issuePost({
  subject,
  mainText,
  keyWordList,
  categoryList,
  experienceId,
}: PostProps) {
  return new Promise((resolve) => {
    ApiClient.post<PostProps>(`/v1/question`, {
      subject,
      mainText,
      keyWordList,
      categoryList,
      experienceId,
    })
      .then((res) => {
        resolve(res);
        console.log(res);
        console.log('성공');
      })
      .catch((error) => {
        console.log('issuePost 에러 ', error);
      });
  });
}
