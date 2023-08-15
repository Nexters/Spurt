import { ReactNode } from 'react';

export interface Category {
  name: string;
  code: string;
}

const all: Category = {
  name: '전체',
  code: 'ALL',
};

const collaboration: Category = {
  name: '협업경험',
  code: 'COLLABORATION',
};

const persandcons: Category = {
  name: '장단점',
  code: 'PROSANDCONS',
};

const conflict: Category = {
  name: '실패경험',
  code: 'CONFLICT',
};

const practical: Category = {
  name: '직무경험',
  code: 'PRACTICAL',
};

const etc: Category = {
  name: '기타',
  code: 'ETC',
};

const major: Category = {
  name: '직무지식',
  code: 'MAJOR',
};

export const allCategoryMaps = new Map<string, Category>([
  [collaboration.code, collaboration],
  [persandcons.code, persandcons],
  [conflict.code, conflict],
  [practical.code, practical],
  [etc.code, etc],
  [major.code, major],
]);

export const allCategoryList = [
  collaboration,
  persandcons,
  conflict,
  practical,
  etc,
  major,
];

export const mainOtherCategory = [
  major,
  practical,
  collaboration,
  persandcons,
  conflict,
  etc,
];

export const mainMyCategory = [
  all,
  major,
  practical,
  collaboration,
  conflict,
  etc,
];

export const noteCategory = [
  all,
  major,
  practical,
  collaboration,
  persandcons,
  conflict,
  etc,
];

export const postCategory = [
  major,
  practical,
  collaboration,
  persandcons,
  conflict,
];
