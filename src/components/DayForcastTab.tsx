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
    <div className="bg-white max-w-2xl shadow sm:rounded-lg">
      <TemperatureChart chartData={temperaturesChartData} />
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900"></h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">Weather details.</p>
      </div>
      <div className="border-t border-gray-200">
        <dl>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Full name</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              Mickael Poulaz
            </dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Best techno</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              React JS
            </dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Email address</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              m.poul@example.com
            </dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Salary</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              $10,000
            </dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">About</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              To get social media testimonials like these, keep your customers
              engaged with your social media accounts by posting regularly
              yourself
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
