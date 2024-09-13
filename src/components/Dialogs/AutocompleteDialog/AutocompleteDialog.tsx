import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import { motion } from 'framer-motion';
import Autocomplete from './Autocomplete';

export default function AutocompleteDialog() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="text-white px-2 p-1 inline-flex items-center justify-center rounded bg-sky-600 focus:outline-none text-xs font-semibold focus:ring-2 focus:ring-white">
          Change location
        </button>
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
                Change forecast location
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
              <div className="flex flex-col gap-2 text-sm mb-2">
                <p>
                  Type in new location and click on it to change the forecast
                  location.
                </p>
                <Autocomplete />
              </div>
            </Dialog.Description>
          </motion.div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
