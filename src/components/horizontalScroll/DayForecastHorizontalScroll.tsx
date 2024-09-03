import { dayForecastHorizontalScrollInterface } from '../interfaces';
import DayForecastHorizontalScrollElement from './DayForecastHorizontalScrollElement';

export default function DayForecastHorizontalScroll({
  dayForecast,
}: dayForecastHorizontalScrollInterface) {
  return (
    <div className="flex overflow-x-scroll gap-3">
      {dayForecast.values.map((hourForecast) => (
        <DayForecastHorizontalScrollElement hourForecast={hourForecast} />
      ))}
    </div>
  );
}
