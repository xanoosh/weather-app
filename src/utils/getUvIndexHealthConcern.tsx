export const getUvIndexHealthConcern = (code: number) => {
  if (code >= 0 && code <= 2) return { name: `${code} (Low)`, level: 1 };
  if (code >= 3 && code <= 5) return { name: `${code} (Moderate)`, level: 2 };
  if (code >= 6 && code <= 7) return { name: `${code} (High)`, level: 3 };
  if (code >= 8 && code <= 10) return { name: `${code} (Very High)`, level: 4 };
  if (code >= 11) return { name: `${code} (Extreme)`, level: 5 };
};
