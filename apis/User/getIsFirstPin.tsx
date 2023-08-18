import ApiClient from '@/apis/client';

const getIsFirstPin = async () => {
  try {
    const result = await ApiClient.post(`/v1/user/pin`);
    if (result && result.data && result.data.code === 0) {
      console.log(result);
    }
  } catch (e) {
    console.log(e);
    return false;
  }
  return false;
};

export default getIsFirstPin;
