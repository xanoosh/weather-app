import { compassInterface } from '../../interfaces';
import { motion } from 'framer-motion';

export default function Compass({ windDirection }: compassInterface) {
  if (!windDirection) return null;
  return (
    <div>
      <div className="relative flex justify-center items-center bg-sky-400 rounded-full w-20 h-20">
        <div className="absolute top-0 left-[46%] text-white text-[.6rem] font-bold">
          N
        </div>
        <div className="absolute bottom-0 left-[47%] text-white text-[.6rem] font-bold">
          S
        </div>
        <div className="absolute left-1 top-[37%] text-white text-[.6rem] font-bold">
          W
        </div>
        <div className="absolute right-1 top-[37%] text-white text-[.6rem] font-bold">
          E
        </div>

        <motion.div
          className="h-12 w-3"
          animate={{
            rotate: [
              0,
              (windDirection * 3) / 5,
              windDirection + 15,
              windDirection - 15,
              windDirection + 5,
              windDirection - 5,
              windDirection,
            ],
            transition: {
              delay: 0.05,
              duration: 0.7,
            },
          }}
        >
          <div className="w-0 h-0 border-l-[0.375rem] border-l-transparent border-b-[1.5rem] border-b-rose-400 border-r-[0.375rem] border-r-transparent"></div>
          <div className="w-0 h-0 border-l-[0.375rem] border-l-transparent border-t-[1.5rem] border-t-slate-200 border-r-[0.375rem] border-r-transparent"></div>
        </motion.div>
      </div>
    </div>
  );
}
