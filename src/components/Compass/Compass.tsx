import { compassInterface } from '../../interfaces';
import { motion } from 'framer-motion';

export default function Compass({ windDirection }: compassInterface) {
  if (!windDirection) return null;
  return (
    <div>
      <div className="relative flex justify-center items-center bg-transparent border-white/60 border-[.1rem] rounded-full w-16 h-16">
        <motion.div
          className="h-16 w-2 flex justify-center items-center flex-wrap p-[.2rem]"
          animate={{
            rotate: [
              windDirection + 5,
              windDirection - 5,
              windDirection + 2,
              windDirection - 2,
              windDirection,
            ],
            transition: {
              delay: 0.05,
              duration: 0.4,
            },
          }}
        >
          <div className="w-0 h-0 border-l-[0.25rem] border-l-transparent border-b-[1.8rem] border-b-rose-400 border-r-[0.25rem] border-r-transparent"></div>
          <div className="w-0 h-0 border-l-[0.25rem] border-l-transparent border-t-[1.8rem] border-t-slate-200 border-r-[0.25rem] border-r-transparent"></div>
        </motion.div>
      </div>
    </div>
  );
}
