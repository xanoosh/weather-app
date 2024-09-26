export const getUvIndexHealthConcern = (code: number) => {
  if (code >= 0 && code <= 2)
    return { name: 'Low', degrees: 'rotate-[270deg]' };
  if (code >= 3 && code <= 5)
    return { name: 'Moderate', degrees: 'rotate-[315deg]' };
  if (code >= 6 && code <= 7) return { name: 'High', degrees: 'rotate-[0deg]' };
  if (code >= 8 && code <= 10)
    return { name: 'Very High', degrees: 'rotate-[45deg]' };
  if (code >= 11) return { name: 'Extreme', degrees: 'rotate-[90deg]' };
};
