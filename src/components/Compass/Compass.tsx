import { CompassInterface } from '../../interfaces';
import { motion } from 'framer-motion';

export default function Compass({ windDirection }: CompassInterface) {
  if (!windDirection) return null;
  console.log('windDirection', windDirection);
  console.log(typeof windDirection);
  return (
    <div>
      <div className="relative flex justify-center items-center bg-slate-700 rounded-full w-28 h-28">
        <div className="absolute top-1 left-[45%] text-white text-sm font-semibold">
          N
        </div>
        <div className="absolute bottom-1 left-[45%] text-white text-sm font-semibold">
          S
        </div>
        <div className="absolute left-1 top-[43%] text-white text-sm font-semibold">
          W
        </div>
        <div className="absolute right-1 top-[43%] text-white text-sm font-semibold">
          E
        </div>

        {/* <div
          className={`main-arrow rotate-[${String(
            Math.round(windDirection)
          )}deg]`}
        > */}
        <motion.div
          className="h-16 w-4"
          animate={{
            rotate: [
              0,
              windDirection + 20,
              windDirection - 20,
              windDirection + 10,
              windDirection - 10,
              windDirection,
            ],
            transition: {
              delay: 0.3,
              duration: 0.7,
            },
          }}
          //   transition={{ delay: 0.5, duration: 0.7 }}
        >
          <div className="w-0 h-0 border-l-[0.5rem] border-l-transparent border-b-[2rem] border-b-rose-400 border-r-[0.5rem] border-r-transparent"></div>
          <div className="w-0 h-0 border-l-[0.5rem] border-l-transparent border-t-[2rem] border-t-sky-400 border-r-[0.5rem] border-r-transparent"></div>
        </motion.div>
      </div>
    </div>
  );
}
