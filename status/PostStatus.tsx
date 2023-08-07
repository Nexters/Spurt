import { atom } from 'recoil';

export const selectedPostCategoriesState = atom({
  key: 'selectedPostCateogries',
  default: 0,
});

export const selectedMultiplePostCategoriesState = atom({
  key: 'selectedMultiplePostCateogries',
  default: [],
});
