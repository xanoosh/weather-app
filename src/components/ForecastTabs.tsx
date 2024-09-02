import { forecastTabsInterface } from '../interfaces';
import DayForcastTab from './DayForcastTab';
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';
import DayForecastHorizontalScroll from './DayForecastHorizontalScroll';

export default function ForecastTabs({ data }: forecastTabsInterface) {
  return (
    <>
      <TabGroup>
        <TabList className="flex gap-3 flex-wrap">
          {data.map((dayForecast, i) => (
            <Tab
              key={i}
              className="rounded-full py-1 px-2 text-sm focus:outline-none data-[selected]:bg-blue-500 data-[selected]:text-white data-[hover]:bg-blue-100 data-[selected]:data-[hover]:bg-blue-700 data-[focus]:outline-1 data-[focus]:outline-white"
            >
              {dayForecast.date}
            </Tab>
          ))}
        </TabList>
        <TabPanels className="mt-3">
          {data.map((dayForecast, i) => (
            <TabPanel key={i} className="rounded-xl bg-blue-300/10 p-3">
              <DayForecastHorizontalScroll dayForecast={dayForecast} />
              <DayForcastTab dayForecast={dayForecast} key={i} />
            </TabPanel>
          ))}
        </TabPanels>
      </TabGroup>
    </>
  );
}
