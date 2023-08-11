import { Question } from '@/apis/Questions/fetchQuestion';
import { atom } from 'recoil';

export const keywordVisibleState = atom({
  key: 'keywordVisible',
  default: true,
});

export const answerVisibleState = atom({
  key: 'answerVisible',
  default: true,
});

export const selectedCardState = atom({
  key: 'selectedCard',
  default: -1,
});

export const selectedNoteCategoriesState = atom({
  key: 'selectedNoteCateogries',
  default: 0,
});

export const myNotesState = atom({
  key: 'myNotes',
  default: [] as Question[],
});
