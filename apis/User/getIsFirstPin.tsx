import ApiClient from '@/apis/client';

const getIsFirstPin = async () => {
  try {
    const result = await ApiClient.get(`/v1/user/pin`);
    if (result && result.data && result.data.code === 0) {
      return result.data.data.hasPined as boolean;
    }
  } catch (e) {
    console.log(e);
  }
};

export default getIsFirstPin;
