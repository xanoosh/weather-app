import { dayForecastHorizontalScrollInterface } from '../../interfaces';
import DayForecastHorizontalScrollElement from './DayForecastHorizontalScrollElement';

export default function DayForecastHorizontalScroll({
  dayForecast,
}: dayForecastHorizontalScrollInterface) {
  return (
    <div className="flex scrollbar scrollbar-thumb-sky-700 scrollbar-track-transparent overflow-x-scroll gap-3 py-4 mb-6">
      {dayForecast.values.map((hourForecast, i) => (
        <DayForecastHorizontalScrollElement
          hourForecast={hourForecast}
          key={i}
        />
      ))}
    </div>
  );
}
