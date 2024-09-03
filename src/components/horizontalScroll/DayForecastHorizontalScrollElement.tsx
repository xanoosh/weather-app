import { dayForecastHorizontalScrollElementInterface } from '../../interfaces';

import { getWeatherNameFromCode } from '../../utils/getWeatherNameFromCode';
import DayForecastIcon from './DayForecastIcon';
//cloudy, rain, fog. clear
export default function DayForecastHorizontalScrollElement({
  hourForecast,
}: dayForecastHorizontalScrollElementInterface) {
  const weatherName = getWeatherNameFromCode(hourForecast.weatherCode);
  return (
    <div className="py-2 px-4 border border-slate-500 bg-white flex, flex-col gap-2 justify-center items-center text-slate-700">
      <p className="text-center">{hourForecast.hour}:00</p>
      <div className="flex justify-center">
        <DayForecastIcon weatherName={weatherName} />
      </div>
    </div>
  );
}
