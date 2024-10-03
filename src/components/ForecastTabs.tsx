import { forecastTabsInterface } from '../interfaces';
import DayForcastTab from './DayForcastTab';
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';
import HorizontalScroll from './horizontalScroll/HorizontalScroll';
import { getDailyForecastArray } from '../utils/getDailyForecastArray';
import { getWeekDayName } from '../utils/getWeekDayName';
import moment from 'moment';
import { createContext, useState } from 'react';
import { motion } from 'framer-motion';

type ChartTabContextType = {
  chartTabIndex: number;
  setChartTabIndex: React.Dispatch<React.SetStateAction<number>>;
};

export const ChartTabContext = createContext<null | ChartTabContextType>(null);

export default function ForecastTabs({
  hourlyForecast,
}: forecastTabsInterface) {
  const [chartTabIndex, setChartTabIndex] = useState(0);
  const [forecastTabPosition, setForecastTabPosition] = useState(0);
  const dailyForecastArray = getDailyForecastArray(hourlyForecast);
  return (
    <ChartTabContext.Provider value={{ chartTabIndex, setChartTabIndex }}>
      <div className="lg:w-3/5 md:w-3/4 w-full">
        <TabGroup onChange={(e) => setForecastTabPosition(e)}>
          <TabList className="flex border-b-[0.2rem] border-white/40 md:justify-center justify-between relative">
            <motion.div
              className="bg-white w-1/5 h-[.2rem] absolute -bottom-[.2rem]"
              animate={{ left: `${forecastTabPosition * 20}%` }}
            ></motion.div>
            {dailyForecastArray.map((dayForecast, i) => (
              <Tab
                key={i}
                className="text-white/60 basis-1/5 md:px-3 md:py-2 py-1 px-2 md:text-lg text-sm focus:outline-none font-semibold data-[selected]:text-white data-[hover]:text-white"
              >
                <p>{getWeekDayName(moment(dayForecast.date).weekday())}</p>
                <p className="md:text-sm text-xs">
                  {moment(dayForecast.date).format('DD.MM')}
                </p>
              </Tab>
            ))}
          </TabList>
          <TabPanels className="mt-3">
            {dailyForecastArray.map((dayForecast, i) => (
              <TabPanel key={i} className="rounded focus:outline-none">
                <HorizontalScroll dayForecast={dayForecast} />
                <DayForcastTab dayForecast={dayForecast} key={i} />
              </TabPanel>
            ))}
          </TabPanels>
        </TabGroup>
      </div>
    </ChartTabContext.Provider>
  );
}
