import ApiClient from '@/apis/client';

const getIsFirstEdit = async () => {
  try {
    const result = await ApiClient.get(`/v1/user/posting`);
    if (result && result.data && result.data.code === 0) {
      return result.data.data.hasPosted as boolean;
    }
  } catch (e) {
    console.log(e);
  }
};

export default getIsFirstEdit;
