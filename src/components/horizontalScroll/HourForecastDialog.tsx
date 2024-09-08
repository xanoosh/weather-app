import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import { hourForecastDialogInterface } from '../../interfaces';
import HourForecastIcon from './HourForecastIcon';

export default function HourForecastDialog({
  hourForecast,
  weatherName,
}: hourForecastDialogInterface) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="text-white px-2 p-1 inline-flex items-center justify-center rounded bg-sky-500 focus:outline-none text-xs font-semibold focus:ring-2 focus:ring-white">
          Details
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-blackA6 data-[state=open]:animate-overlayShow fixed inset-0" />
        <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded bg-white shadow-lg focus:outline-none px-2 py-3 flex flex-col gap-3 text-slate-500">
          <Dialog.Title className="flex justify-between pl-2">
            <h2 className="text-md font-semibold text-slate-600">
              Weather details
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

            <p className="text-sm">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptatibus nemo, expedita doloribus corporis consectetur commodi
              molestiae neque! Molestias nulla voluptates consectetur ipsa
              veritatis quasi voluptatem, sequi molestiae, incidunt amet culpa?
            </p>
          </Dialog.Description>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
