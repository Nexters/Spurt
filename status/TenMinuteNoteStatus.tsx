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

export const mobileContentToggle = atom({
   key: 'contentToggle',
   default: true,
});
