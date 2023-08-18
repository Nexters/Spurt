import ApiClient from '@/apis/client';

const getIsFirstEdit = async () => {
  try {
    const result = await ApiClient.post(`/v1/user/posting`);
    if (result && result.data && result.data.code === 0) {
      console.log(result);
    }
  } catch (e) {
    console.log(e);
    return false;
  }
  return false;
};

export default getIsFirstEdit;
