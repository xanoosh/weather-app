import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import { hourForecastDialogInterface } from '../../../interfaces';
import HourForecastIcon from '../../horizontalScroll/HourForecastIcon';
import DialogTable from './DialogTable';
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';
import { motion } from 'framer-motion';

export default function HourForecastDialog({
  hourForecast,
  weatherName,
  children,
}: hourForecastDialogInterface) {
  const { windDirection, windSpeed, windGust, precipitationProbability } =
    hourForecast;

  const tabs = [
    { name: 'General', isActive: true },
    { name: 'Wind', isActive: windSpeed || windDirection || windGust },
    {
      name: 'Precipitation',
      isActive: precipitationProbability,
    },
  ];

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        {/* <button className="text-white px-2 p-1 inline-flex items-center justify-center rounded bg-sky-500 focus:outline-none text-xs font-semibold focus:ring-2 focus:ring-white">
          Details
        </button> */}
        {children}
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0" />
        <Dialog.Content
          className="fixed top-36 left-[50%] w-[90vw] max-w-[450px] translate-x-[-50%] rounded"
          asChild
        >
          <motion.div
            animate={{ opacity: [0, 1] }}
            exit={{ opacity: 0 }}
            className="bg-white shadow-lg focus:outline-none px-2 py-3 flex flex-col gap-3 text-slate-500"
          >
            <Dialog.Title className="flex justify-between pl-2">
              <h2 className="text-md font-semibold text-slate-600">
                Details
                <span className="pl-4 text-sm font-normal text-slate-400">
                  {hourForecast.hour}:00
                </span>
              </h2>
              <Dialog.Close asChild>
                <button
                  className="text-slate-500 hover:text-slate-600  inline-flex h-6 w-6 appearance-none items-center justify-center rounded-full focus:ring-1 focus:ring-sky-500 focus:outline-none"
                  aria-label="Close"
                >
                  <Cross2Icon />
                </button>
              </Dialog.Close>
            </Dialog.Title>
            <Dialog.Description className="px-2">
              <div className="flex justify-start gap-4 text-sm mb-2">
                <HourForecastIcon weatherCode={hourForecast.weatherCode} />
                <div>
                  <p>{weatherName}</p>
                  <p>temp: {hourForecast.temperature}°C</p>
                </div>
              </div>
              <TabGroup>
                <TabList className="flex border-b-2 border-slate-300">
                  {tabs.map(({ name, isActive }, i) =>
                    isActive ? (
                      <Tab
                        key={i}
                        className="border-b-2 -mb-[.1rem] border-transparent text-slate-400 basis-1/5 md:px-3 md:py-2 py-1 px-2  md:text-md text-sm focus:outline-none font-semibold data-[selected]:border-slate-600 data-[selected]:text-slate-600 data-[hover]:border-slate-600 data-[hover]:text-slate-600"
                      >
                        {name}
                      </Tab>
                    ) : null
                  )}
                </TabList>
                <TabPanels className="mt-3">
                  {tabs.map(({ name, isActive }, i) =>
                    isActive ? (
                      <TabPanel key={i} className="rounded">
                        <DialogTable
                          variant={name}
                          hourForecast={hourForecast}
                        />
                      </TabPanel>
                    ) : null
                  )}
                </TabPanels>
              </TabGroup>
            </Dialog.Description>
          </motion.div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
