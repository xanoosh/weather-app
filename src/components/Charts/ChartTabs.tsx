import { chartTabsInterface } from '../../interfaces';
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';
import { getMinMaxValue } from '../../utils/getMinMaxValue';
import LineChart from './ChartVariants/LineChart';
import BarChart from './ChartVariants/BarChart';
import StreamChart from './ChartVariants/StreamChart';
import { ChartTabContext } from '../ForecastTabs';
import { useContext } from 'react';
import { motion } from 'framer-motion';

export default function ChartTabs({ dayForecast }: chartTabsInterface) {
  const context = useContext(ChartTabContext);

  const temperaturesArray = dayForecast.values.map(
    ({ temperature }) => temperature
  );
  const pressureArray = dayForecast.values.map(
    ({ pressureSurfaceLevel }) => pressureSurfaceLevel || 0
  );
  const temperaturesChartData = [
    {
      id: 'temperature',
      data: dayForecast.values.map(({ hour, temperature }) => ({
        x: `${hour}`,
        y: `${temperature}`,
      })),
    },
  ];

  const windChartData = dayForecast.values.map(
    ({ hour, windGust, windSpeed }) => ({
      hour: hour || 0,
      ['Wind speed (m/s)']: windSpeed || 0,
      ['Wind gust (m/s)']: windGust || 0,
    })
  );
  const humidityChartData = dayForecast.values.map(({ hour, humidity }) => ({
    hour: `${hour}`,
    humidity: humidity ? Math.round(humidity) : 0,
    exactHumidity: humidity ? humidity : 0,
  }));
  const pressureChartData = [
    {
      id: 'pressure',
      data: dayForecast.values.map(({ hour, pressureSurfaceLevel }) => ({
        x: `${hour}`,
        y: `${pressureSurfaceLevel}`,
      })),
    },
  ];
  return (
    <div className="w-full">
      <TabGroup
        selectedIndex={context?.chartTabIndex}
        onChange={(e) => context?.setChartTabIndex(e)}
      >
        <TabList className="flex border-b-[.15rem] border-white/40 md:justify-center justify-between relative">
          <motion.div
            className="bg-white w-1/4 h-[.15rem] absolute -bottom-[.15rem]"
            animate={{ left: `${(context?.chartTabIndex || 0) * 25}%` }}
          ></motion.div>
          <Tab
            key={'temperature'}
            className="text-white/60 basis-1/4 md:px-3 md:py-2 py-1 px-2 sm:text-sm text-xs focus:outline-none font-semibold data-[selected]:text-white data-[hover]:text-white"
          >
            <p>Temperature</p>
          </Tab>
          <Tab
            key={'wind'}
            className="text-white/60 basis-1/4 md:px-3 md:py-2 py-1 px-2 sm:text-sm text-xs focus:outline-none font-semibold data-[selected]:text-white data-[hover]:text-white"
          >
            <p>Wind</p>
          </Tab>
          <Tab
            key={'humidity'}
            className="text-white/60 basis-1/4 md:px-3 md:py-2 py-1 px-2 sm:text-sm text-xs focus:outline-none font-semibold data-[selected]:text-white data-[hover]:text-white"
          >
            <p>Humidity</p>
          </Tab>
          <Tab
            key={'pressure'}
            className="text-white/60 basis-1/4 md:px-3 md:py-2 py-1 px-2 sm:text-sm text-xs focus:outline-none font-semibold data-[selected]:text-white data-[hover]:text-white"
          >
            <p>Pressure</p>
          </Tab>
        </TabList>
        <TabPanels className="mt-3">
          <TabPanel key={'temperature'} className="rounded focus:outline-none">
            {/* TemperatureChart */}
            <motion.div
              animate={{
                opacity: [0, 1],
                transition: {
                  duration: 0.2,
                },
              }}
              exit={{ opacity: 0 }}
            >
              <LineChart
                chartData={temperaturesChartData}
                min={getMinMaxValue(temperaturesArray, 'min')}
                max={getMinMaxValue(temperaturesArray, 'max')}
                yAxisLegend="temperature"
                unit="°C"
              />
            </motion.div>
          </TabPanel>
          <TabPanel key={'wind'} className="rounded focus:outline-none">
            {/* WindChart */}
            <motion.div
              animate={{
                opacity: [0, 1],
                transition: {
                  duration: 0.2,
                },
              }}
              exit={{ opacity: 0 }}
            >
              <StreamChart
                chartData={windChartData}
                yAxisLegend="Wind"
                unit="m/s"
              />
            </motion.div>
          </TabPanel>
          <TabPanel key={'humidity'} className="rounded focus:outline-none">
            {/* HumididtyChart */}
            <motion.div
              animate={{
                opacity: [0, 1],
                transition: {
                  duration: 0.2,
                },
              }}
              exit={{ opacity: 0 }}
            >
              <BarChart
                chartData={humidityChartData}
                min={0}
                max={100}
                yAxisLegend="Humidity"
                unit="%"
              />
            </motion.div>
          </TabPanel>
          <TabPanel key={'pressure'} className="rounded focus:outline-none">
            {/* PressureChart */}
            <motion.div
              animate={{
                opacity: [0, 1],
                transition: {
                  duration: 0.2,
                },
              }}
              exit={{ opacity: 0 }}
            >
              <LineChart
                chartData={pressureChartData}
                min={getMinMaxValue(pressureArray, 'min')}
                max={getMinMaxValue(pressureArray, 'max')}
                yAxisLegend="Pressure"
                unit="hPa"
              />
            </motion.div>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
  );
}
