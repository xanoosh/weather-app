import { dayForcastCardInterface } from '../interfaces';

export default function DayForcastCard({
  dayForecast,
}: dayForcastCardInterface) {
  return (
    <div className="border-1 border-slate-500 rounded p-4">
      <p>date: {dayForecast.date}</p>
      <hr />
      <p>temperatures:</p>
      <ul>
        {dayForecast.values.map(({ hour, temperature }, i) => (
          <li key={i}>
            {hour}: {temperature}
          </li>
        ))}
      </ul>
    </div>
  );
}
