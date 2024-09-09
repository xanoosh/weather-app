import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import { hourForecastDialogInterface } from '../../interfaces';
import HourForecastIcon from './HourForecastIcon';
import DialogTable from './DialogTable';
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';

export default function HourForecastDialog({
  hourForecast,
  weatherName,
}: hourForecastDialogInterface) {
  const tabs = ['General', 'Wind', 'Precipitation'];
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="text-white px-2 p-1 inline-flex items-center justify-center rounded bg-slate-500 focus:outline-none text-xs font-semibold focus:ring-2 focus:ring-white">
          Details
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-blackA6 data-[state=open]:animate-overlayShow fixed inset-0" />
        <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded bg-white shadow-lg focus:outline-none px-2 py-3 flex flex-col gap-3 text-slate-500">
          <Dialog.Title className="flex justify-between pl-2">
            <h2 className="text-md font-semibold text-slate-600">
              Details
              <span className="pl-4 text-sm font-normal text-slate-400">
                {hourForecast.hour}:00
              </span>
            </h2>
            <Dialog.Close asChild>
              <button
                className="text-slate-500 hover:text-slate-600  inline-flex h-6 w-6 appearance-none items-center justify-center rounded-full focus:ring-2 focus:ring-slate-500 focus:outline-none"
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
                {tabs.map((el, i) => (
                  <Tab
                    key={i}
                    className="border-b-2 -mb-[.1rem] border-transparent text-slate-400 basis-1/5 md:px-3 md:py-2 py-1 px-2  md:text-md text-sm focus:outline-none font-semibold data-[selected]:border-slate-600 data-[selected]:text-slate-600 data-[hover]:border-slate-600 data-[hover]:text-slate-600"
                  >
                    <p>{el}</p>
                  </Tab>
                ))}
              </TabList>
              <TabPanels className="mt-3">
                {tabs.map((el, i) => (
                  <TabPanel key={i} className="rounded">
                    <DialogTable variant={el} hourForecast={hourForecast} />
                  </TabPanel>
                ))}
              </TabPanels>
            </TabGroup>
          </Dialog.Description>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
