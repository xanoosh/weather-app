import { dayForecastTabInterface } from '../interfaces';
import ChartTabs from './Charts/ChartTabs';

export default function DayForcastTab({
  dayForecast,
}: dayForecastTabInterface) {
  dayForecast.values.map(({ hour, temperature }, i) => (
    <li key={i}>
      {hour}: {temperature}
    </li>
  ));

  return (
    <div className="flex flex-col gap-6">
      {/* add some chart data for wind intensity, pressure etc. */}
      <ChartTabs dayForecast={dayForecast} />
    </div>
  );
}
