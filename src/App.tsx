// import { useGeolocation } from 'react-use';
// import data from './globals';
import { useWeatherData } from './hooks/useWeatherData';
import ForecastTabs from './components/ForecastTabs';
import Loader from './components/Loader';

function App() {
  // const { latitude, longitude } = useGeolocation();
  const { data, isLoading } = useWeatherData({
    //warsaw
    latitude: 52.237049,
    longitude: 21.017532,
  });
  return (
    <div className="flex gap-4 flex-col px-6 py-4 bg-sky-500 min-h-[100vh] items-center">
      <h1 className="text-3xl text-white text-center">Weather app</h1>
      {data ? <ForecastTabs hourlyForecast={data.timelines.hourly} /> : null}
      {isLoading ? <Loader /> : null}
      {/* <Loader /> */}
    </div>
  );
}

export default App;
