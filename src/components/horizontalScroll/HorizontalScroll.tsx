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
    <div className="flex scrollbar scrollbar-thumb-transparent scrollbar-track-transparent overflow-x-scroll pb-4 mb-4 -mx-1.5 focus:outline-none snap-x">
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
