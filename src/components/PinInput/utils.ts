export type DialPadKeyType = number | string;
export type RenderItemType = {
  item: DialPadKeyType;
  index: number;
};
export const dialPadContent: Array<DialPadKeyType> = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  '',
  0,
  'X',
];

export const matchcode = (code: Array<number | string>) => {
  const halfLength = code.length / 2;
  for (let i = 0; i < halfLength; i++) {
    if (code[i] !== code[i + halfLength]) {
      return false;
    }
  }
  return true;
};

export const setSelected = (
  index: number,
  code: Array<number | string>,
): boolean => {
  let isSelected: boolean = false;
  const item = dialPadContent[index];
  if (typeof item === 'number' && code[index] !== undefined) {
    isSelected = true;
  }
  return isSelected;
};
