import { valuesInterface } from '../interfaces';
export const getDayNightArray = (
  dayNightData: Array<{ date: string; sunset: string; sunrise: string }>,
  dayForecast: valuesInterface
) => {
  const sunrise = Number(dayNightData[dayForecast.index].sunrise.split(':')[0]);
  const sunset =
    Number(dayNightData[dayForecast.index].sunset.split(':')[0]) + 12;
  return dayForecast.values.map((hourForecast) => ({
    isNight: hourForecast.hour >= sunset || hourForecast.hour < sunrise,
    sunrise,
    sunset,
    sunriseString: dayNightData[dayForecast.index].sunrise,
    sunsetString: dayNightData[dayForecast.index].sunset,
  }));
};
