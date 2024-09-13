import { useWeatherData } from './hooks/useWeatherData';
import ForecastTabs from './components/ForecastTabs';
import Loader from './components/Loader';
import Footer from './components/Footer';
import { useLocationStore } from './hooks/store/useLocationStore';
import AutocompleteDialog from './components/Dialogs/AutocompleteDialog/AutocompleteDialog';

function App() {
  const {
    text,
    parameters: { latitude, longitude },
  } = useLocationStore((state) => state.location);
  console.log('APP DATA', latitude, longitude);
  const { data, isLoading } = useWeatherData({
    //warsaw
    latitude,
    longitude,
  });
  return (
    <main className="flex flex-col bg-sky-500 min-h-[100vh]">
      <section className="flex gap-4 flex-col px-6 py-4 items-center">
        {data ? <ForecastTabs hourlyForecast={data.timelines.hourly} /> : null}
        {isLoading ? <Loader size="lg" color="#fff" /> : null}
      </section>
      <section className="flex gap-2 px-6 items-center justify-center">
        <div>
          <p className="text-xs text-white">
            <span className="font-bold">Location: </span>
            {text}
          </p>
        </div>
        <div className="w-32">
          <AutocompleteDialog />
        </div>
      </section>
      <Footer />
    </main>
  );
}

export default App;
