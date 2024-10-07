import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPinIcon } from '@heroicons/react/24/solid';

import Autocomplete from '../Dialogs/AutocompleteDialog/Autocomplete';

export default function LocationDrawer() {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative z-20">
      <motion.div
        className="bg-black/50 fixed z-20 top-0 left-0 h-screen w-screen"
        animate={{
          opacity: open ? 1 : 0,
        }}
        onClick={() => setOpen(false)}
      >
        asdasd
      </motion.div>
      <div className="absolute top-0 left-0 w-8 h-8 bg-slate-600 text-white flex justify-center items-center z-40">
        <button
          onClick={() => {
            if (open) setOpen(false);
            else setOpen(true);
          }}
        >
          <MapPinIcon width={20} />
        </button>
      </div>

      <motion.div
        className="bg-white shadow-lg focus:outline-none px-2 py-3 flex flex-col gap-3 text-slate-500 w-[250px] absolute top-8 z-40"
        animate={{
          left: open ? 0 : '-250px',
        }}
      >
        <h2>drawer</h2>
        <Autocomplete closeDialog={() => setOpen(false)} />
      </motion.div>
    </div>
  );
}
