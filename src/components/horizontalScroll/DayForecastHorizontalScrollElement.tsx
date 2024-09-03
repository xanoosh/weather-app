import { dayForecastHorizontalScrollElementInterface } from '../../interfaces';
import { WiTime2 } from 'react-icons/wi';
import { getWeatherNameFromCode } from '../../utils/getWeatherNameFromCode';
import DayForecastIcon from './DayForecastIcon';
//cloudy, rain, fog. clear
export default function DayForecastHorizontalScrollElement({
  hourForecast,
}: dayForecastHorizontalScrollElementInterface) {
  const weatherName = getWeatherNameFromCode(hourForecast.weatherCode);
  return (
    <div className="py-2 px-4 bg-white/20 flex flex-col gap-2 justify-center items-center text-white rounded">
      <div className="flex gap-0.5 items-center justify-center">
        <WiTime2 size={'0.9rem'} />
        <p className="text-center text-xs font-semibold">
          {hourForecast.hour}:00
        </p>
      </div>
      <div className="flex justify-center">
        <DayForecastIcon weatherName={weatherName} />
      </div>
    </div>
  );
}
