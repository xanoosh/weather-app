import { forecastTabsInterface } from '../interfaces';
import DayForcastTab from './DayForcastTab';
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';
import HorizontalScroll from './horizontalScroll/HorizontalScroll';
import { getDailyForecastArray } from '../utils/getDailyForecastArray';
import { getWeekDayName } from '../utils/getWeekDayName';
import moment from 'moment';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ForecastTabs({
  hourlyForecast,
}: forecastTabsInterface) {
  const [forecastTabPosition, setForecastTabPosition] = useState(0);
  const dailyForecastArray = getDailyForecastArray(hourlyForecast);
  return (
    <TabGroup
      onChange={(e) => setForecastTabPosition(e)}
      className="lg:w-3/5 md:w-3/4 w-full"
    >
      <TabList className="flex border-b-[0.2rem] border-transparent md:justify-center justify-between relative">
        <motion.div
          layoutId="bubble-days"
          className="bg-blue-400/40 w-1/5  absolute top-0.5 bottom-0.5 rounded-[3rem] z-10"
          animate={{ left: `${forecastTabPosition * 20}%` }}
          transition={{
            type: 'spring',
            bounce: 0.2,
            duration: 0.6,
          }}
        ></motion.div>
        {dailyForecastArray.map((dayForecast, i) => (
          <Tab
            key={i}
            className="text-white/60 basis-1/5 md:px-3 md:py-2 py-1 px-2 md:text-lg text-sm focus:outline-none font-semibold data-[selected]:text-white data-[hover]:text-white relative z-20 display flex items-center md:flex-row md:gap-2 flex-col justify-center"
          >
            <p>{getWeekDayName(moment(dayForecast.date).weekday())}</p>
            <p className="md:text-lg text-xs">
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
  );
}
