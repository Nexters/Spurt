import { atom } from 'recoil';

export const selectedMainMyCategoriesState = atom({
  key: 'selectedMainMyCateogries',
  default: 0,
});

export const selectedMainOthersCategoriesState = atom({
  key: 'selectedMainOthersCateogries',
  default: 0,
});

export const PageState = atom({
  key: 'pageState',
  default: 0,
});
