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
import { appContextInterface } from './interfaces';
import LocationDrawer from './components/Drawers/LocationDrawer';

export const AppContext = createContext<null | appContextInterface>(null);

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
      {/* drawer start*/}
      {/* <LocationDrawer /> */}
      {/* drawer end*/}
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

      <section className="text-white px-6 lg:w-3/5 md:w-3/4 w-full mx-auto flex gap-2 flex-wrap">
        <div className="flex gap-1 items-center">
          <MapPinIcon width={16} />
          <p className="text-xs ">{text}</p>
        </div>
        <AutocompleteDialog />
      </section>
      <Footer />
    </main>
  );
}

export default App;
