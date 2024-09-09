import { CompassInterface } from '../../interfaces';
import { motion } from 'framer-motion';

export default function Compass({ windDirection }: CompassInterface) {
  if (!windDirection) return null;
  console.log('windDirection', windDirection);
  console.log(typeof windDirection);
  return (
    <div>
      <div className="relative flex justify-center items-center bg-slate-700 rounded-full w-24 h-24">
        <div className="absolute top-[.3rem] left-[45%] text-white text-xs font-semibold">
          N
        </div>
        <div className="absolute bottom-[.3rem] left-[45%] text-white text-xs font-semibold">
          S
        </div>
        <div className="absolute left-[.3rem] top-[43%] text-white text-xs font-semibold">
          W
        </div>
        <div className="absolute right-[.3rem] top-[43%] text-white text-xs font-semibold">
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
          <div className="w-0 h-0 border-l-[0.375rem] border-l-transparent border-t-[1.5rem] border-t-sky-400 border-r-[0.375rem] border-r-transparent"></div>
        </motion.div>
      </div>
    </div>
  );
}
