export const getMinMaxTemp = (arr: Array<number>, variant: 'min' | 'max') => {
  switch (variant) {
    case 'min':
      return arr.sort((a, b) => a - b)[0] - 5;
    case 'max':
      return arr.sort((a, b) => b - a)[0] + 5;
  }
};
