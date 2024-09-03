import { dayForecastHorizontalScrollInterface } from '../../interfaces';
import DayForecastHorizontalScrollElement from './DayForecastHorizontalScrollElement';

export default function DayForecastHorizontalScroll({
  dayForecast,
}: dayForecastHorizontalScrollInterface) {
  return (
    <div className="flex overflow-x-scroll gap-3 py-4 mb-4">
      {dayForecast.values.map((hourForecast, i) => (
        <DayForecastHorizontalScrollElement
          hourForecast={hourForecast}
          key={i}
        />
      ))}
    </div>
  );
}
