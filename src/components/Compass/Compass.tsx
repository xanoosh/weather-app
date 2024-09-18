import { compassInterface } from '../../interfaces';
import { motion } from 'framer-motion';

export default function Compass({ windDirection }: compassInterface) {
  if (!windDirection) return null;
  return (
    <div>
      <div className="relative flex justify-center items-center bg-sky-400 rounded-full w-24 h-24">
        <div className="absolute top-[.3rem] left-[45%] text-white text-xs font-bold">
          N
        </div>
        <div className="absolute bottom-[.3rem] left-[45%] text-white text-xs font-bold">
          S
        </div>
        <div className="absolute left-[.3rem] top-[43%] text-white text-xs font-bold">
          W
        </div>
        <div className="absolute right-[.3rem] top-[43%] text-white text-xs font-bold">
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
              delay: 0.1,
              duration: 1,
            },
          }}
          //   transition={{ delay: 0.5, duration: 0.7 }}
        >
          <div className="w-0 h-0 border-l-[0.375rem] border-l-transparent border-b-[1.5rem] border-b-rose-400 border-r-[0.375rem] border-r-transparent"></div>
          <div className="w-0 h-0 border-l-[0.375rem] border-l-transparent border-t-[1.5rem] border-t-slate-200 border-r-[0.375rem] border-r-transparent"></div>
        </motion.div>
      </div>
    </div>
  );
}
