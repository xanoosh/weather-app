import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon, DrawingPinFilledIcon } from '@radix-ui/react-icons';
import { motion } from 'framer-motion';
import Autocomplete from './Autocomplete';
import { useState } from 'react';
import { useLocationStore } from '../../../hooks/store/useLocationStore';

export default function AutocompleteDialog() {
  const [isOpen, setIsOpen] = useState(false);
  const { text: location } = useLocationStore((state) => state.location);
  const closeDialog = () => setIsOpen(false);
  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <div className="flex flex-col items-center text-center gap-3">
        <p className="text-xs text-white">
          Forecast location: <b>{location}</b>
        </p>
        <Dialog.Trigger asChild>
          <button className="text-white px-4 p-1 inline-flex gap-1 items-center justify-center rounded-xl bg-white/20 focus:outline-none text-xs font-semibold focus:ring-2 focus:ring-white">
            <DrawingPinFilledIcon width={13} height={13} />
            Change forecast location
          </button>
        </Dialog.Trigger>
      </div>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/15" />
        <Dialog.Content
          className="fixed top-36 left-[50%] w-[90vw] max-w-[450px] translate-x-[-50%] rounded"
          asChild
        >
          <motion.div
            animate={{ opacity: [0, 1] }}
            exit={{ opacity: 0 }}
            className="bg-blue-950 shadow-lg focus:outline-none px-2 py-3 flex flex-col gap-3 text-white"
          >
            <Dialog.Title className="flex justify-between pl-2">
              <h2 className="text-md font-semibold text-white">
                Change forecast location
              </h2>
              <Dialog.Close asChild>
                <button
                  className="text-white inline-flex h-6 w-6 appearance-none items-center justify-center rounded-full focus:ring-1 focus:ring-white focus:outline-none"
                  aria-label="Close"
                  onClick={() => setIsOpen(false)}
                >
                  <Cross2Icon />
                </button>
              </Dialog.Close>
            </Dialog.Title>
            <Dialog.Description className="px-3 flex flex-col gap-4 text-sm py-2">
              <div className="flex flex-col gap-1">
                <p className="text-xs text-white">Current location</p>
                <p className="text-white">{location}</p>
              </div>
              <Autocomplete
                closeDialog={closeDialog}
                label="Type in new location below to change the forecast
                  location."
              />
            </Dialog.Description>
          </motion.div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
