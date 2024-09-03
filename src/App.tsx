// import { useGeolocation } from 'react-use';
// import { useWeatherData } from './hooks/useWeatherData.tsx';
import data from './globals';
import { getDailyForecastArray } from './utils/getDailyForecastArray';
import ForecastTabs from './components/ForecastTabs';

function App() {
  // const { latitude, longitude } = useGeolocation();
  // const { data, isLoading } = useWeatherData({
  //   latitude,
  //   longitude
  // });
  const dailyForecastArray = getDailyForecastArray(data.timelines.hourly);
  return (
    <div className="flex gap-4 flex-col p-3 bg-sky-500">
      <h1 className="text-3xl text-white text-center">Weather app</h1>
      <ForecastTabs data={dailyForecastArray} />
    </div>
  );
}

export default App;
