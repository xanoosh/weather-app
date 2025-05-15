import { hourForecastElementInterface } from '../../interfaces';
import { getWeatherNameFromCode } from '../../utils/getWeatherNameFromCode';
import HourForecastIcon from './HourForecastIcon';
import HourForecastDialog from '../Dialogs/HourForecastDialog/HourForecastDialog';
import Badge from '../Badge';
import { BlendingModeIcon, SunIcon, MoonIcon } from '@radix-ui/react-icons';

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
    <div className="text-white snap-start px-1.5 flex-grow-0 flex-shrink-0 custom-xl:basis-[16.65%] custom-lg:basis-[20%] custom-md:basis-[20%] custom-sm:basis-[25%] basis-[33.3333%]">
      <HourForecastDialog
        hourForecast={hourForecast}
        weatherName={weatherName}
        weatherCode={weatherCode}
      >
        <button
          className={`py-3 sm:px-4 px-2 flex flex-col gap-2 justify-center items-center rounded w-full h-full border-2 border-transparent focus:outline-none focus:bg-white/15 bg-white/5 relative ${afterElementStyle}`}
        >
          <div className="flex gap-0.5 items-center justify-center w-full relative">
            <div className="absolute -top-0.5 left-0">
              {hourForecast.hour === sunrise ? (
                <Badge
                  icon={<SunIcon color="#DCBF37" />}
                  tooltip={`sunrise at ${sunriseString}`}
                />
              ) : null}
              {hourForecast.hour === sunset ? (
                <Badge
                  icon={<MoonIcon color="#8C9FE0" />}
                  tooltip={`sunset at ${sunsetString}`}
                />
              ) : null}
            </div>
            <div className="absolute -top-0.5 right-0">
              {hourForecast.precipitationProbability &&
              hourForecast.precipitationProbability > 0 ? (
                <Badge
                  icon={<BlendingModeIcon color="#187bd0" />}
                  tooltip={`Precipitation probability ~${hourForecast.precipitationProbability}%`}
                />
              ) : null}
            </div>
            <p className="text-xs font-semibold text-white/80">
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
    </div>
  );
}
