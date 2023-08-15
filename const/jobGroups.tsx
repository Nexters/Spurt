export interface JobGroup {
  name: string;
  code: string;
}

const developer: JobGroup = {
  name: 'DEVELOPER',
  code: '개발',
};
const designer: JobGroup = {
  name: 'DESIGNER',
  code: '디자인',
};
const marketer: JobGroup = {
  name: 'MARTEKER',
  code: '마케팅',
};
const etc: JobGroup = {
  name: 'ETC',
  code: '그 외 직군',
};

export const allJobGroupMap = new Map<string, JobGroup>([
  [developer.code, developer],
  [designer.code, designer],
  [marketer.code, marketer],
  [etc.code, etc],
]);

export const allJobGroupList = ['개발', '디자인', '마케팅', '그 외 직군'];
