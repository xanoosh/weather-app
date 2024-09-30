import { chartTabsInterface } from '../../interfaces';
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';
import TemperatureChart from './TemperatureChart';
import WindChart from './WindChart';
import HumidityChart from './HumidityChart';

export default function ChartTabs({ dayForecast }: chartTabsInterface) {
  const temperaturesArray = dayForecast.values.map(
    ({ temperature }) => temperature
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
  const windChartData = [
    {
      id: 'windSpeed',
      data: dayForecast.values.map(({ hour, windSpeed }) => ({
        x: `${hour}`,
        y: `${windSpeed}`,
      })),
    },
    {
      id: 'windGust',
      data: dayForecast.values.map(({ hour, windGust }) => ({
        x: `${hour}`,
        y: `${windGust}`,
      })),
    },
  ];
  const humidityChartData = [
    {
      id: 'humidity',
      data: dayForecast.values.map(({ hour, humidity }) => ({
        x: `${hour}`,
        y: `${humidity}`,
      })),
    },
  ];
  return (
    <div className="w-full">
      <TabGroup>
        <TabList className="flex border-b-[.15rem] border-white/40 md:justify-center justify-between">
          <Tab
            key={'temperature'}
            className="border-b-[.15rem] border-transparent text-white/60 basis-1/5 md:px-3 md:py-2 py-1 px-2 -mb-[.15rem] md:text-lg text-sm focus:outline-none font-semibold data-[selected]:border-white data-[selected]:text-white data-[hover]:border-white data-[hover]:text-white"
          >
            <p>Temperature</p>
          </Tab>
          <Tab
            key={'wind'}
            className="border-b-[.15rem] border-transparent text-white/60 basis-1/5 md:px-3 md:py-2 py-1 px-2 -mb-[.15rem] md:text-lg text-sm focus:outline-none font-semibold data-[selected]:border-white data-[selected]:text-white data-[hover]:border-white data-[hover]:text-white"
          >
            <p>Wind</p>
          </Tab>
          <Tab
            key={'humidity'}
            className="border-b-[.15rem] border-transparent text-white/60 basis-1/5 md:px-3 md:py-2 py-1 px-2 -mb-[.15rem] md:text-lg text-sm focus:outline-none font-semibold data-[selected]:border-white data-[selected]:text-white data-[hover]:border-white data-[hover]:text-white"
          >
            <p>Humidity</p>
          </Tab>
        </TabList>
        <TabPanels className="mt-3">
          <TabPanel key={'temperature'} className="rounded focus:outline-none">
            <TemperatureChart
              chartData={temperaturesChartData}
              temperaturesArray={temperaturesArray}
            />
          </TabPanel>
          <TabPanel key={'wind'} className="rounded focus:outline-none">
            <WindChart chartData={windChartData} />
          </TabPanel>
          <TabPanel key={'humidity'} className="rounded focus:outline-none">
            <HumidityChart chartData={humidityChartData} />
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
  );
}
