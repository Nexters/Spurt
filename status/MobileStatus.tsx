import { atom } from 'recoil';

export const contentToggleState = atom({
  key: 'contentToggle',
  default: true,
});

export const selectedMobileNoteCategoriesState = atom({
  key: 'selectedMobileNoteCateogries',
  default: 0,
});
