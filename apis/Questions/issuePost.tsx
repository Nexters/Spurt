import { InputItem } from '@/components/pc/Keywords/Buttons/Keyword';
import ApiClient from '../client';

interface PostProps {
  subject: string;
  mainText: string;
  keyWordList: string[];
  categoryList: string[];
  jobGroup: string;
}
export default function issuePost({
  subject,
  mainText,
  keyWordList,
  categoryList,
  jobGroup,
}: PostProps) {
  return new Promise((resolve) => {
    ApiClient.post<PostProps>(`/v1/question`, {
      subject,
      mainText,
      keyWordList,
      categoryList,
      jobGroup, //jobGroup: jobGroup
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
