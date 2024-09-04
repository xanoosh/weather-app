import { forecastTabsInterface } from '../interfaces';
import DayForcastTab from './DayForcastTab';
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';
import DayForecastHorizontalScroll from './horizontalScroll/DayForecastHorizontalScroll';
import { getDailyForecastArray } from '../utils/getDailyForecastArray';
import moment from 'moment';

export default function ForecastTabs({
  hourlyForecast,
}: forecastTabsInterface) {
  const dailyForecastArray = getDailyForecastArray(hourlyForecast);
  return (
    <div className="lg:max-w-screen-md md:max-w-screen-sm max-w-[100%]">
      <TabGroup>
        <TabList className="flex border-b-[.15rem] border-white/40 md:justify-center justify-between">
          {dailyForecastArray.map((dayForecast, i) => (
            <Tab
              key={i}
              className="border-b-[.15rem] border-transparent text-white/60 basis-1/5 md:px-3 md:py-2 py-1 px-2 -mb-[.15rem] md:text-lg text-sm focus:outline-none font-semibold data-[selected]:border-white data-[selected]:text-white data-[hover]:border-white data-[hover]:text-white"
            >
              {moment(dayForecast.date).format('DD.MM')}
            </Tab>
          ))}
        </TabList>
        <TabPanels className="mt-3">
          {dailyForecastArray.map((dayForecast, i) => (
            <TabPanel key={i} className="rounded">
              <DayForecastHorizontalScroll dayForecast={dayForecast} />
              <DayForcastTab dayForecast={dayForecast} key={i} />
            </TabPanel>
          ))}
        </TabPanels>
      </TabGroup>
    </div>
  );
}
