export const getPrecipitationType = (code: number | null | undefined) => {
  if (!code) return 'Unknown';
  switch (code) {
    case 1:
      return 'Rain';
    case 2:
      return 'Snow';
    case 3:
      return 'Freezing Rain';
    case 4:
      return 'Ice Pellets / Sleet';
  }
};
