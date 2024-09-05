import { horizontalScrollInterface } from '../../interfaces';
import HourForecastElement from './HourForecastElement';

export default function DayForecastHorizontalScroll({
  dayForecast,
}: horizontalScrollInterface) {
  return (
    <div className="flex scrollbar scrollbar-thumb-sky-700 scrollbar-track-transparent overflow-x-scroll gap-3 py-4 mb-6">
      {dayForecast.values.map((hourForecast, i) => (
        <HourForecastElement hourForecast={hourForecast} key={i} />
      ))}
    </div>
  );
}
