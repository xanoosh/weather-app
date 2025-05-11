import { hourForecastIconInterface } from '../../interfaces';
import { weatherIconPaths } from '../../assets/weather-icons/weatherIconPaths';
export default function HourForecastIcon({
  weatherName,
  weatherCode,
}: hourForecastIconInterface) {
  return (
    <div className="flex flex-col gap-1 justify-center items-center">
      <img
        className="custom-md:w-12 w-10"
        src={weatherIconPaths[weatherCode]}
      />
      {weatherName ? (
        <p className="text-center text-[0.7rem] text-white">{weatherName}</p>
      ) : null}
    </div>
  );
}
