// import { useGeolocation } from 'react-use';
// import data from './globals';
import { useWeatherData } from './hooks/useWeatherData';
import ForecastTabs from './components/ForecastTabs';
import Loader from './components/Loader';
import Footer from './components/Footer';

function App() {
  // const { latitude, longitude } = useGeolocation();
  const { data, isLoading } = useWeatherData({
    //warsaw
    latitude: 52.237049,
    longitude: 21.017532,
  });
  return (
    <main className="flex flex-col bg-sky-500 min-h-[100vh]">
      <section className="flex gap-4 flex-col px-6 py-4 items-center">
        {data ? <ForecastTabs hourlyForecast={data.timelines.hourly} /> : null}
        {isLoading ? <Loader /> : null}
        {/* <Loader /> */}
      </section>
      <Footer />
    </main>
  );
}

export default App;
