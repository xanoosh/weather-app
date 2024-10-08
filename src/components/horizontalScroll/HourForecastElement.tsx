import { hourForecastElementInterface } from '../../interfaces';
import { getWeatherNameFromCode } from '../../utils/getWeatherNameFromCode';
import HourForecastIcon from './HourForecastIcon';
import HourForecastDialog from '../Dialogs/HourForecastDialog/HourForecastDialog';
import Badge from '../Badge';
import { OpacityIcon, SunIcon, MoonIcon } from '@radix-ui/react-icons';

export default function HourForecastElement({
  hourForecast,
  dayNightDataElement,
}: hourForecastElementInterface) {
  const { isNight, sunrise, sunset, sunriseString, sunsetString } =
    dayNightDataElement;
  const weatherCode =
    isNight && [1000, 1100, 1101, 1102].includes(hourForecast.weatherCode)
      ? `${hourForecast.weatherCode}_night`
      : hourForecast.weatherCode;

  const afterElementStyle =
    "relative after:absolute after:h-3/5 after:top-1/5 after:-right-2 after:content-[''] after:w-0.5 after:bg-white/30 last:after:w-0";
  const weatherName = getWeatherNameFromCode(hourForecast.weatherCode);
  return (
    <HourForecastDialog
      hourForecast={hourForecast}
      weatherName={weatherName}
      weatherCode={weatherCode}
    >
      <button
        className={`py-3 px-4 flex flex-col gap-2 justify-center items-center text-white rounded min-w-28 border-2 border-transparent focus:outline-none focus:bg-white/20 relative ${afterElementStyle}`}
      >
        <div className="absolute flex gap-2 top-0 left-1 w-full">
          {hourForecast.hour === sunrise ? (
            <Badge icon={<SunIcon />} tooltip={`sunrise at ${sunriseString}`} />
          ) : null}
          {hourForecast.hour === sunset ? (
            <Badge icon={<MoonIcon />} tooltip={`sunset at ${sunsetString}`} />
          ) : null}
          {hourForecast.precipitationProbability &&
          hourForecast.precipitationProbability > 0 ? (
            <Badge
              icon={<OpacityIcon />}
              tooltip={`Precipitation probability ~${hourForecast.precipitationProbability}%`}
            />
          ) : null}
        </div>
        <div className="flex gap-0.5 items-center justify-center">
          <p className="text-xs font-semibold text-white mt-3">
            {hourForecast.hour}:00
          </p>
        </div>
        <div className="flex justify-center">
          <HourForecastIcon
            weatherName={weatherName}
            weatherCode={weatherCode}
          />
        </div>
        <div>
          {hourForecast.temperature ? (
            <p className="text-center text-md font-semibold">
              {Math.round(hourForecast.temperature)}°C
            </p>
          ) : null}
        </div>
      </button>
    </HourForecastDialog>
  );
}
