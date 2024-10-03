import { horizontalScrollInterface } from '../../interfaces';
import HourForecastElement from './HourForecastElement';

export default function DayForecastHorizontalScroll({
  dayForecast,
  dayNightDataDaily,
}: horizontalScrollInterface) {
  const dawn = Number(dayNightDataDaily.dawn.split(':')[0]);
  const dusk = Number(dayNightDataDaily.dusk.split(':')[0]) + 12;
  return (
    <div className="flex scrollbar scrollbar-thumb-sky-700 scrollbar-track-transparent overflow-x-scroll gap-3 py-4 mb-6 focus:outline-none">
      {dayForecast.values.map((hourForecast, i) => (
        <HourForecastElement
          hourForecast={hourForecast}
          isNight={hourForecast.hour >= dusk || hourForecast.hour < dawn}
          key={i}
        />
      ))}
    </div>
  );
}
