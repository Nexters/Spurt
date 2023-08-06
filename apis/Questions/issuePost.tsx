import { InputItem } from '@/components/pc/Keywords/Buttons/Keyword';
import ApiClient from '../client';

interface PostProps {
  subject: string;
  mainText: string;
  keyWordList: InputItem[];
  categoryList: string[];
  jobGroup: string;
}
export default function issuePost({
  subject,
  mainText,
  keyWordList,
  categoryList, //jobGroup,
}: PostProps) {
  return new Promise((resolve) => {
    ApiClient.post<PostProps>(`/v1/question`, {
      params: {
        subject: subject,
        mainText: mainText,
        keyWordList: keyWordList,
        categoryList: categoryList,
        jobGroup: 'DEVELOPER', //jobGroup: jobGroup
      },
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
