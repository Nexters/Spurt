import { Category, postCategory } from '@/const/categories';
import { atom } from 'recoil';

export const selectedPostCategoryState = atom({
  key: 'selectedPostCategory',
  default: 0,
});

interface IPostCategory {
  category: Category;
  isSelected: boolean;
}

export class PostCategory implements IPostCategory {
  constructor(
    public category: Category,
    public isSelected: boolean,
  ) {}
}

export const postCategoriesState = atom({
  key: 'postCateogries',
  default: postCategory.map((category) => {
    return new PostCategory(category, false);
  }),
});
