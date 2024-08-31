// import { useGeolocation } from 'react-use';
// import { useWeatherData } from './hooks/useWeatherData.tsx';
import data from './globals';
import { getDailyForecastArray } from './utils/getDailyForecastArray';

import DayForcastCard from './components/DayForcastCard';

function App() {
  // const { latitude, longitude } = useGeolocation();
  // const { data, isLoading } = useWeatherData({
  //   latitude,
  //   longitude
  // });
  const dailyForecastArray = getDailyForecastArray(data.timelines.hourly);
  return (
    <>
      <h1 className="text-3xl font-bold underline">Weather app</h1>
      <div className="card">
        {/* {dailyForecastArray ? (
          <pre> {JSON.stringify(dailyForecastArray, null, 2)}</pre>
        ) : null} */}

        <div className="flex gap-2">
          {dailyForecastArray.map((dayForecast, i) => (
            <DayForcastCard dayForecast={dayForecast} key={i} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
