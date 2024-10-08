import { DialogTableInterface } from '../../../interfaces';
import { getUvIndexHealthConcern } from '../../../utils/getUvIndexHealthConcern';
import Compass from '../../Compass/Compass';
import { getPrecipitationType } from '../../../utils/getPrecipitationType';
import { getWindDirection } from '../../../utils/getWindDirection';
import HumidityPill from '../../horizontalScroll/HumidityPill';
import AnimatedLevel from '../../horizontalScroll/AnimatedLevel';

export default function DialogTable({
  hourForecast,
  variant,
}: DialogTableInterface) {
  const {
    humidity,
    precipitationProbability,
    precipitationType,
    rainIntensity,
    rainAccumulation,
    snowIntensity,
    snowAccumulation,
    snowDepth,
    sleetAccumulation,
    sleetIntensity,
    visibility,
    windDirection,
    windSpeed,
    windGust,
    uvIndex,
    pressureSurfaceLevel,
    temperature,
  } = hourForecast;

  const uvObject = uvIndex ? getUvIndexHealthConcern(uvIndex) : null;
  return (
    <div className="flex flex-col gap-2 text-slate-600 text-sm [&>div]:border-b [&>div]:border-slate-300 [&>div]:pb-3 [&>div:last-of-type]:border-none [&>div:last-of-type]:pb-0 mt-6 mb-2">
      {variant === 'General' ? (
        <>
          {temperature ? (
            <div className="grid grid-cols-4">
              <div className="col-span-2 font-semibold">Temperature:</div>
              <div className="col-span-2">{temperature} °C</div>
            </div>
          ) : null}
          {humidity ? (
            <div className="grid grid-cols-4">
              <div className="col-span-2 font-semibold">Humidity:</div>
              <div className="col-span-2">
                <HumidityPill percentage={humidity} />
              </div>
            </div>
          ) : null}
          {visibility ? (
            <div className="grid grid-cols-4">
              <div className="col-span-2 font-semibold">Visibility:</div>
              <div className="col-span-2">{visibility} km</div>
            </div>
          ) : null}
          {pressureSurfaceLevel ? (
            <div className="grid grid-cols-4">
              <div className="col-span-2 font-semibold">Pressure level:</div>
              <div className="col-span-2">{pressureSurfaceLevel} hPa</div>
            </div>
          ) : null}
          {uvObject ? (
            <div className="grid grid-cols-4">
              <div className="col-span-2 font-semibold">UV index:</div>
              <div className="col-span-2">
                <AnimatedLevel name={uvObject?.name} level={uvObject?.level} />
              </div>
            </div>
          ) : null}
        </>
      ) : null}
      {variant === 'Wind' ? (
        <>
          {windSpeed ? (
            <div className="grid grid-cols-4">
              <div className="col-span-2 font-semibold">Wind speed:</div>
              <div className="col-span-2">{windSpeed} m/s</div>
            </div>
          ) : null}
          {windGust ? (
            <div className="grid grid-cols-4">
              <div className="col-span-2 font-semibold">Wind gust:</div>
              <div className="col-span-2">{windGust} m/s</div>
            </div>
          ) : null}
          {windDirection ? (
            <div className="flex justify-start gap-4 text-sm mt-4 mb-2">
              <Compass windDirection={windDirection} />
              <div>
                <p className="font-semibold">Wind direction</p>
                <p>{getWindDirection(windDirection)}</p>
                <p className="font-semibold">Azimuth</p>
                <p>{windDirection} deg</p>
              </div>
            </div>
          ) : null}
        </>
      ) : null}
      {variant === 'Precipitation' ? (
        <>
          {precipitationProbability ? (
            <div className="grid grid-cols-4">
              <div className="col-span-2 font-semibold">
                Precipitation probability:
              </div>
              <div className="col-span-2">{precipitationProbability} %</div>
            </div>
          ) : null}
          {precipitationType ? (
            <div className="grid grid-cols-4">
              <div className="col-span-2 font-semibold">
                Precipitation type:
              </div>
              <div className="col-span-2">
                {getPrecipitationType(precipitationType)}
              </div>
            </div>
          ) : null}
          {rainIntensity ? (
            <div className="grid grid-cols-4">
              <div className="col-span-2 font-semibold">Rain intensity:</div>
              <div className="col-span-2">{rainIntensity} mm/hr</div>
            </div>
          ) : null}
          {rainAccumulation ? (
            <div className="grid grid-cols-4">
              <div className="col-span-2 font-semibold">Rain accumulation:</div>
              <div className="col-span-2">{rainAccumulation} mm</div>
            </div>
          ) : null}
          {snowIntensity ? (
            <div className="grid grid-cols-4">
              <div className="col-span-2 font-semibold">Snow intensity:</div>
              <div className="col-span-2">{snowIntensity} mm/hr</div>
            </div>
          ) : null}
          {snowAccumulation ? (
            <div className="grid grid-cols-4">
              <div className="col-span-2 font-semibold">Snow accumulation:</div>
              <div className="col-span-2">{snowAccumulation} mm</div>
            </div>
          ) : null}
          {snowDepth ? (
            <div className="grid grid-cols-4">
              <div className="col-span-2 font-semibold">Snow depth:</div>
              <div className="col-span-2">{snowDepth} cm</div>
            </div>
          ) : null}
          {sleetIntensity ? (
            <div className="grid grid-cols-4">
              <div className="col-span-2 font-semibold">Sleet intensity:</div>
              <div className="col-span-2">{sleetIntensity} mm/hr</div>
            </div>
          ) : null}
          {sleetAccumulation ? (
            <div className="grid grid-cols-4">
              <div className="col-span-2 font-semibold">
                Sleet accumulation:
              </div>
              <div className="col-span-2">{sleetAccumulation} mm</div>
            </div>
          ) : null}
        </>
      ) : null}
    </div>
  );
}
