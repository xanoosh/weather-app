import { DialogTableInterface } from '../../interfaces';
import Compass from '../Compass/Compass';

export default function DialogTable({
  hourForecast,
  variant,
}: DialogTableInterface) {
  const {
    humidity,
    precipitationProbability,
    precipitationIntensity,
    visibility,
    windDirection,
    windSpeed,
    windGust,
    uvIndex,
    uvHealthConcern,
    pressureSurfaceLevel,
  } = hourForecast;
  return (
    <div className="flex flex-col gap-2 text-slate-600 text-sm [&>div]:border-b [&>div]:border-slate-300 [&>div]:pb-3 [&>div:last-of-type]:border-none [&>div:last-of-type]:pb-0">
      {variant === 'General' ? (
        <>
          {humidity ? (
            <div className="grid grid-cols-4">
              <div className="col-span-2 font-semibold">humidity:</div>
              <div className="col-span-2">{humidity} %</div>
            </div>
          ) : null}
          {visibility ? (
            <div className="grid grid-cols-4">
              <div className="col-span-2 font-semibold">visibility:</div>
              <div className="col-span-2">{visibility} km</div>
            </div>
          ) : null}
          {pressureSurfaceLevel ? (
            <div className="grid grid-cols-4">
              <div className="col-span-2 font-semibold">
                pressure surface level:
              </div>
              <div className="col-span-2">{pressureSurfaceLevel} km</div>
            </div>
          ) : null}
          {uvIndex ? (
            <div className="grid grid-cols-4">
              <div className="col-span-2 font-semibold">UV index:</div>
              <div className="col-span-2">{uvIndex}</div>
            </div>
          ) : null}
          {uvHealthConcern ? (
            <div className="grid grid-cols-4">
              <div className="col-span-2 font-semibold">uvHealthConcern:</div>
              <div className="col-span-2">{uvHealthConcern}</div>
            </div>
          ) : null}
        </>
      ) : null}
      {variant === 'Wind' ? (
        <>
          {windDirection ? (
            <div className="grid grid-cols-4">
              <div className="col-span-2 font-semibold">wind direction:</div>
              <div className="col-span-2">{windDirection} deg</div>
            </div>
          ) : null}
          {windSpeed ? (
            <div className="grid grid-cols-4">
              <div className="col-span-2 font-semibold">wind speed:</div>
              <div className="col-span-2">{windSpeed} m/s</div>
            </div>
          ) : null}
          {windGust ? (
            <div className="grid grid-cols-4">
              <div className="col-span-2 font-semibold">wind gust:</div>
              <div className="col-span-2">{windGust} m/s</div>
            </div>
          ) : null}

          <div className="flex justify-start gap-4 text-sm mt-4 mb-2">
            <Compass windDirection={windDirection} />
            <div>
              <p className="font-semibold">Wind direction</p>
              <p>{windDirection} degrees</p>
            </div>
          </div>
        </>
      ) : null}
      {variant === 'Precipitation' ? (
        <>
          {precipitationProbability ? (
            <div className="grid grid-cols-4">
              <div className="col-span-2 font-semibold">
                precipitation probability:
              </div>
              <div className="col-span-2">{precipitationProbability} %</div>
            </div>
          ) : null}
          {precipitationIntensity ? (
            <div className="grid grid-cols-4">
              <div className="col-span-2 font-semibold">
                precipitation intensity:
              </div>
              <div className="col-span-2">{precipitationIntensity} mm/hr</div>
            </div>
          ) : null}
        </>
      ) : null}
    </div>
  );
}

// interface hourForecastInterface {
//     hour?: number;
//     cloudBase?: number | null;
//     cloudCeiling?: number | null;
//     cloudCover?: number | null;
//     dewPoint?: number | null;
//     evapotranspiration?: number | null;
//     freezingRainIntensity?: number | null;
//     humidity?: number | null;
//     iceAccumulation?: number | null;
//     iceAccumulationLwe?: number | null;
//     precipitationProbability?: number | null;
//     pressureSurfaceLevel?: number | null;
//     rainAccumulation?: number | null;
//     rainAccumulationLwe?: number | null;
//     rainIntensity?: number | null;
//     sleetAccumulation?: number | null;
//     sleetAccumulationLwe?: number | null;
//     sleetIntensity?: number | null;
//     snowAccumulation?: number | null;
//     snowAccumulationLwe?: number | null;
//     snowDepth?: number | null;
//     snowIntensity?: number | null;
//     temperature: number;
//     temperatureApparent?: number | null;
//     uvHealthConcern?: number | null;
//     uvIndex?: number | null;
//     visibility?: number | null;
//     weatherCode: number;
//     windDirection?: number | null;
//     windGust?: number | null;
//     windSpeed?: number | null;
//   }
