import { animatedLevelInterface } from '../../interfaces';
import { motion } from 'framer-motion';

export default function AnimatedLevel({ name, level }: animatedLevelInterface) {
  return (
    <div className="flex gap-2">
      <p>{name}</p>
      <div className="flex gap-[0.1rem] items-end">
        <motion.div
          animate={
            level >= 1
              ? {
                  backgroundColor: ['#ffffff44', '#4ade80'],
                  transition: {
                    duration: 0.2,
                    easing: 'easeOut',
                  },
                }
              : undefined
          }
          className="h-[0.4rem] w-[.3rem] "
        ></motion.div>
        <motion.div
          animate={
            level >= 2
              ? {
                  backgroundColor: ['#ffffff44', '#facc15'],
                  transition: {
                    delay: 0.1,
                    duration: 0.2,
                    easing: 'easeOut',
                  },
                }
              : undefined
          }
          className="h-[0.55rem] w-[.3rem] "
        ></motion.div>
        <motion.div
          animate={
            level >= 3
              ? {
                  backgroundColor: ['#ffffff44', '#fb923c'],
                  transition: {
                    delay: 0.2,
                    duration: 0.2,
                    easing: 'easeOut',
                  },
                }
              : undefined
          }
          className="h-[0.7rem] w-[.3rem] "
        ></motion.div>
        <motion.div
          animate={
            level >= 4
              ? {
                  backgroundColor: ['#ffffff44', '#f43f5e'],
                  transition: {
                    delay: 0.3,
                    duration: 0.2,
                    easing: 'easeOut',
                  },
                }
              : undefined
          }
          className="h-[0.85rem] w-[.3rem] "
        ></motion.div>
        <motion.div
          animate={
            level >= 5
              ? {
                  backgroundColor: ['#ffffff44', '#e11d48'],
                  transition: {
                    delay: 0.4,
                    duration: 0.2,
                    easing: 'easeOut',
                  },
                }
              : undefined
          }
          className="h-4 w-[.3rem] "
        ></motion.div>
      </div>
    </div>
  );
}
