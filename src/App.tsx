import { useWeatherData } from './hooks/useWeatherData';
import { useDayNight } from './hooks/useDayNight';
import ForecastTabs from './components/ForecastTabs';
import Loader from './components/Loader';
import Footer from './components/Footer';
import { useLocationStore } from './hooks/store/useLocationStore';
import AutocompleteDialog from './components/Dialogs/AutocompleteDialog/AutocompleteDialog';
import { MapPinIcon } from '@heroicons/react/24/solid';
function App() {
  const {
    text,
    parameters: { latitude, longitude },
  } = useLocationStore((state) => state.location);
  const { data, isLoading } = useWeatherData({
    latitude,
    longitude,
  });

  const { data: dayNightData, isLoading: dayNightLoading } = useDayNight({
    latitude,
    longitude,
    dateStart: '2024-10-03',
    dateEnd: '2024-10-04',
  });

  console.log('dayNightData:', dayNightData);
  console.log('dayNightLoading:', dayNightLoading);

  return (
    <main className="flex flex-col bg-sky-600 min-h-[100vh]">
      <section className="flex gap-4 flex-col px-6 py-4 items-center">
        {data ? <ForecastTabs hourlyForecast={data.timelines.hourly} /> : null}
        {isLoading ? <Loader size="lg" color="#fff" /> : null}
      </section>
      <section className="flex flex-col gap-2 px-6 items-start justify-center w-80 mx-auto">
        <div className="flex text-white gap-1 items-start">
          <MapPinIcon width={16} />
          <p className="text-xs ">{text}</p>
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
