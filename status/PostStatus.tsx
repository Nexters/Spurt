import { Category, postCategory } from '@/const/categories';
import { atom } from 'recoil';

export const selectedPostCategoryState = atom({
  key: 'selectedPostCategory',
  default: 0,
});

export const keywordState = atom({
  key: 'keyword',
  default: '',
});
