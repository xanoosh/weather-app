import { dayForecastHorizontalScrollElementInterface } from '../interfaces';

export default function DayForecastHorizontalScrollElement({
  hourForecast,
}: dayForecastHorizontalScrollElementInterface) {
  return (
    <div className="py-1 px-3 border border-slate-500 bg-white">
      <p>{hourForecast.hour}</p>
    </div>
  );
}
