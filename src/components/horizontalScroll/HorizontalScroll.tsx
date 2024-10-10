import { horizontalScrollInterface } from '../../interfaces';
import HourForecastElement from './HourForecastElement';
import { useContext } from 'react';
import { AppContext } from '../../App';
import { getDayNightArray } from '../../utils/getDayNightArray';

export default function DayForecastHorizontalScroll({
  dayForecast,
}: horizontalScrollInterface) {
  const context = useContext(AppContext);
  if (!context) return null;
  const dayNightArray = getDayNightArray(context.dayNightData, dayForecast);
  return (
    <div className="flex scrollbar scrollbar-thumb-sky-700 scrollbar-track-transparent overflow-x-scroll gap-3 py-4 mb-6 focus:outline-none">
      {dayForecast.values.map((hourForecast, i) => {
        return (
          <HourForecastElement
            hourForecast={hourForecast}
            dayNightDataElement={dayNightArray[i]}
            key={i}
          />
        );
      })}
    </div>
  );
}
