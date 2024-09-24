import { humidityPillInterface } from '../../interfaces';
import { motion } from 'framer-motion';

export default function HumidityPill({ percentage }: humidityPillInterface) {
  const contentWidth = `${String((percentage / 2).toFixed(0))}px`;
  return (
    <div className="flex gap-2 items-center">
      <p>{percentage} %</p>
      <div className="w-[50px] h-2 bg-sky-200 relative rounded overflow-hidden">
        <motion.div
          className={` h-2 bg-sky-500`}
          animate={{
            width: ['0px', contentWidth],
            transition: {
              delay: 0.05,
              easing: 'easeOut',
              duration: 0.7,
            },
          }}
        ></motion.div>
      </div>
    </div>
  );
}
