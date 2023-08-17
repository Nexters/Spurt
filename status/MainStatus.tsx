import { atom } from 'recoil';
import { v1 } from 'uuid';

export const selectedMainMyCategoriesState = atom({
  key: `selectedMainMyCateogries/${v1()}`,
  default: 0,
});

export const selectedMainOthersCategoriesState = atom({
  key: `selectedMainOthersCateogries/${v1()}`,
  default: 0,
});

export const PageState = atom({
  key: `pageState/${v1()}`,
  default: 1,
});
