import { useWeatherData } from './hooks/useWeatherData';
import { useDayNight } from './hooks/useDayNight';
import ForecastTabs from './components/ForecastTabs';
import Loader from './components/Loader';
import Footer from './components/Footer';
import { useLocationStore } from './hooks/store/useLocationStore';
import AutocompleteDialog from './components/Dialogs/AutocompleteDialog/AutocompleteDialog';
import { MapPinIcon } from '@heroicons/react/24/solid';
import moment from 'moment';
import { useState, createContext } from 'react';

type AppContextType = {
  chartTabIndex: number;
  setChartTabIndex: React.Dispatch<React.SetStateAction<number>>;
  dayNightData: Array<{ date: string; dusk: string; dawn: string }>;
};

export const AppContext = createContext<null | AppContextType>(null);

function App() {
  const [chartTabIndex, setChartTabIndex] = useState(0);

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
    dateStart: moment().format('YYYY-MM-DD'),
    dateEnd: moment().add(4, 'day').format('YYYY-MM-DD'),
  });

  return (
    <main className="flex flex-col bg-sky-600 min-h-[100vh]">
      <section className="flex gap-4 flex-col px-6 py-4 items-center">
        {data && dayNightData ? (
          <AppContext.Provider
            value={{ chartTabIndex, setChartTabIndex, dayNightData }}
          >
            <ForecastTabs hourlyForecast={data.timelines.hourly} />
          </AppContext.Provider>
        ) : null}
        {isLoading || dayNightLoading ? (
          <Loader size="lg" color="#fff" />
        ) : null}
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
