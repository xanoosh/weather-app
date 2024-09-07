import { dayForecastCardInterface } from '../interfaces';
import { TemperatureChart } from './TemperatureChart';

export default function DayForcastTab({
  dayForecast,
}: dayForecastCardInterface) {
  dayForecast.values.map(({ hour, temperature }, i) => (
    <li key={i}>
      {hour}: {temperature}
    </li>
  ));
  const temperaturesArray = dayForecast.values.map(
    ({ temperature }) => temperature
  );
  const temperaturesChartData = [
    {
      id: 'temperature',
      data: dayForecast.values.map(({ hour, temperature }) => ({
        x: `${hour}`,
        y: `${temperature}`,
      })),
    },
  ];
  return (
    <div className="flex flex-col gap-6">
      {/* add some chart data for wind intensity, pressure etc. */}
      <TemperatureChart
        chartData={temperaturesChartData}
        temperaturesArray={temperaturesArray}
      />
    </div>
  );
}
