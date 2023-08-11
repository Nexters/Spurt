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
  code: 'PERSANDCONS',
};

const conflict: Category = {
  name: '실패경험',
  code: 'CONFLICT',
};

const practical: Category = {
  name: '직무경험',
  code: 'PRACTICAL',
};

const undertanding: Category = {
  name: '직무이해도',
  code: 'UNDERSTANIDNG',
};

const major: Category = {
  name: '직무지식',
  code: 'MAJOR',
};

export const mainOtherCategory = [
  all,
  major,
  practical,
  collaboration,
  conflict,
];

export const mainMyCategory = [all, major, practical, collaboration, conflict];

export const noteCategory = [
  all,
  major,
  practical,
  collaboration,
  persandcons,
  conflict,
];

export const postCategory = [
  major,
  practical,
  collaboration,
  persandcons,
  conflict,
];
