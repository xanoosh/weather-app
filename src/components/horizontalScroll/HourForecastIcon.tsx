import { hourForecastIconInterface } from '../../interfaces';
import { weatherIconPaths } from '../../assets/weather-icons/weatherIconPaths';
export default function HourForecastIcon({
  weatherName,
  weatherCode,
}: hourForecastIconInterface) {
  return (
    <div className="flex flex-col gap-1 justify-center items-center">
      <img className="w-12" src={weatherIconPaths[weatherCode]} />
      <p className="text-center text-xs text-white">{weatherName}</p>
    </div>
  );
}
