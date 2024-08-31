// import { useGeolocation } from 'react-use';
// import { useWeatherData } from './hooks/useWeatherData.tsx';
import data from './globals';
import { getDailyForecastArray } from './utils/getDailyForecastArray';

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
        {/* {isLoading ? <p>Loading...</p> : null} */}
        <h1 className="text-1xl font-bold underline">dailyForecastArray:</h1>
        {dailyForecastArray ? (
          <pre> {JSON.stringify(dailyForecastArray, null, 2)}</pre>
        ) : null}
      </div>
    </>
  );
}

export default App;
