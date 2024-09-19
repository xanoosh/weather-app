export const getWindDirection = (windDirection: number | null | undefined) => {
  if (!windDirection) return '';
  if (windDirection === 0) return 'North';
  if (windDirection === 90) return 'East';
  if (windDirection === 180) return 'South';
  if (windDirection === 270) return 'West';
  if (windDirection > 0 && windDirection < 90) return 'North-East';
  if (windDirection > 90 && windDirection < 180) return 'South-East';
  if (windDirection > 180 && windDirection < 270) return 'South-West';
  if (windDirection > 270 && windDirection <= 359.99) return 'North-West';
};
