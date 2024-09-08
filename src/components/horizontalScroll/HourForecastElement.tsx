import { hourForecastElementInterface } from '../../interfaces';
import { getWeatherNameFromCode } from '../../utils/getWeatherNameFromCode';
import HourForecastIcon from './HourForecastIcon';
import HourForecastDialog from './HourForecastDialog';

export default function HourForecastElement({
  hourForecast,
}: hourForecastElementInterface) {
  const weatherName = getWeatherNameFromCode(hourForecast.weatherCode);
  return (
    <div className="py-3 px-4 bg-white/30 flex flex-col gap-2 justify-center items-center text-white rounded min-w-28">
      <div className="flex gap-0.5 items-center justify-center">
        <p className="text-xs font-semibold text-white/50">
          {hourForecast.hour}:00
        </p>
      </div>
      <div className="flex justify-center">
        <HourForecastIcon
          weatherName={weatherName}
          weatherCode={hourForecast.weatherCode}
        />
      </div>
      <div>
        {hourForecast.temperature ? (
          <p className="text-center text-md font-semibold">
            {Math.round(hourForecast.temperature)}°C
          </p>
        ) : null}
      </div>
      <HourForecastDialog
        hourForecast={hourForecast}
        weatherName={weatherName}
      />
    </div>
  );
}
