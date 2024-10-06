import { valuesInterface } from '../interfaces';
export const getIsNightArray = (
  dayNightData: Array<{ date: string; dusk: string; dawn: string }>,
  dayForecast: valuesInterface
) => {
  const dawn = Number(dayNightData[dayForecast.index].dawn.split(':')[0]);
  const dusk = Number(dayNightData[dayForecast.index].dusk.split(':')[0]) + 12;
  return dayForecast.values.map(
    (hourForecast) => hourForecast.hour >= dusk || hourForecast.hour < dawn
  );
};
