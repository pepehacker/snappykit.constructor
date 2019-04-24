// @flow
export const generateDivision = (
  min: number = 0,
  max: number = 180,
  length: number = 16,
): Array<number> => {
  const result = [];

  const range = Math.abs(min) + Math.abs(max);
  const valueOfDivision = range / length;

  // eslint-disable-next-line
  for (let i = 0; i < length + 1; ++i) {
    result.push(valueOfDivision * i);
  }

  return result;
};
