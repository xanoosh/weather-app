// import { useGeolocation } from 'react-use';
// import { useWeatherData } from './hooks/useWeatherData.tsx';
import data from './globals';
import ForecastTabs from './components/ForecastTabs';

function App() {
  // const { latitude, longitude } = useGeolocation();
  // const { data } = useWeatherData({
  //   //warsaw
  //   latitude: 52.237049,
  //   longitude: 21.017532,
  // });
  return (
    <div className="flex gap-4 flex-col px-6 py-4 bg-sky-500">
      <h1 className="text-3xl text-white text-center">Weather app</h1>
      {data ? <ForecastTabs hourlyForecast={data.timelines.hourly} /> : null}
    </div>
  );
}

export default App;
