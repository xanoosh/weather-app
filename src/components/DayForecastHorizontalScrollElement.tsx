import { dayForecastHorizontalScrollElementInterface } from '../interfaces';
import { WiDaySunny, WiCloudy, WiDayRainMix, WiFog } from 'react-icons/wi';

import { getWeatherNameFromCode } from '../utils/getWeatherNameFromCode';
//cloudy, rain, fog. clear
export default function DayForecastHorizontalScrollElement({
  hourForecast,
}: dayForecastHorizontalScrollElementInterface) {
  const weatherCondition = getWeatherNameFromCode(hourForecast.weatherCode);
  return (
    <div className="py-2 px-4 border border-slate-500 bg-white flex, flex-col gap-2 justify-center items-center text-slate-700">
      <p className="text-center">{hourForecast.hour}:00</p>
      <div className="flex justify-center">
        {weatherCondition === 'clear' ? <WiDaySunny size={'1.5rem'} /> : null}
        {weatherCondition === 'cloudy' ? <WiCloudy size={'1.5rem'} /> : null}
        {weatherCondition === 'rain' ? <WiDayRainMix size={'1.5rem'} /> : null}
        {weatherCondition === 'fog' ? <WiFog size={'1.5rem'} /> : null}
      </div>
    </div>
  );
}
