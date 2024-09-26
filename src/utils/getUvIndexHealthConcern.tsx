export const getUvIndexHealthConcern = (code: number) => {
  if (code >= 0 && code <= 2) return { name: 'Low', degrees: 270 };
  if (code >= 3 && code <= 5) return { name: 'Moderate', degrees: 315 };
  if (code >= 6 && code <= 7) return { name: 'High', degrees: 0 };
  if (code >= 8 && code <= 10) return { name: 'Very High', degrees: 45 };
  if (code >= 11) return { name: 'Extreme', degrees: 90 };
};
