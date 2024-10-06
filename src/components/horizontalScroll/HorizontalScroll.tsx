import { horizontalScrollInterface } from '../../interfaces';
import HourForecastElement from './HourForecastElement';
import { useContext } from 'react';
import { AppContext } from '../../App';

export default function DayForecastHorizontalScroll({
  dayForecast,
}: horizontalScrollInterface) {
  const context = useContext(AppContext);
  if (!context) return null;
  const dawn = Number(
    context.dayNightData[dayForecast.index].dawn.split(':')[0]
  );
  const dusk =
    Number(context.dayNightData[dayForecast.index].dusk.split(':')[0]) + 12;
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
