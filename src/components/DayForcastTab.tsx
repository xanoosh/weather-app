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
      <TemperatureChart chartData={temperaturesChartData} />
      <p className="text-2xl text-white font-semibold">Details</p>
      <div className="border-t border-white text-white">
        <dl>
          <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 border-b border-white">
            <dt className="text-sm font-semibold">Lorem ipsum</dt>
            <dd className="mt-1 text-sm sm:mt-0 sm:col-span-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium voluptatem quas fugit modi quidem mollitia
              consequatur.
            </dd>
          </div>
          <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 border-b border-white">
            <dt className="text-sm font-semibold">Lorem ipsum</dt>
            <dd className="mt-1 text-sm sm:mt-0 sm:col-span-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium voluptatem quas fugit modi quidem mollitia
              consequatur.
            </dd>
          </div>
          <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-semibold">Lorem ipsum</dt>
            <dd className="mt-1 text-sm sm:mt-0 sm:col-span-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium voluptatem quas fugit modi quidem mollitia
              consequatur.
            </dd>
          </div>
          <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-semibold">Lorem ipsum</dt>
            <dd className="mt-1 text-sm sm:mt-0 sm:col-span-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium voluptatem quas fugit modi quidem mollitia
              consequatur.
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
