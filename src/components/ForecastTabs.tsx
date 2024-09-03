import { forecastTabsInterface } from '../interfaces';
import DayForcastTab from './DayForcastTab';
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';
import DayForecastHorizontalScroll from './horizontalScroll/DayForecastHorizontalScroll';
import moment from 'moment';

export default function ForecastTabs({ data }: forecastTabsInterface) {
  return (
    <>
      <TabGroup>
        <TabList className="flex flex-wrap border-b-2 border-white/40 justify-center">
          {data.map((dayForecast, i) => {
            const displayDate = moment(dayForecast.date).format('DD.MM.YY');
            return (
              <Tab
                key={i}
                className="border-b-2 border-transparent text-white/60 py-2 px-3 -mb-0.5 text-sm focus:outline-none data-[selected]:font-semibold data-[selected]:border-white data-[selected]:text-white data-[hover]:border-white data-[hover]:text-white"
              >
                {displayDate}
              </Tab>
            );
          })}
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
