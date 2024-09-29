import { animatedLevelInterface } from '../../interfaces';
import { motion } from 'framer-motion';

export default function AnimatedLevel({ name, level }: animatedLevelInterface) {
  return (
    <div className="flex gap-2">
      <p>{name}</p>
      <div className="flex gap-[0.1rem] items-end">
        {level >= 1 ? (
          <motion.div
            animate={{
              height: ['0rem', '0.4rem'],
              transition: {
                duration: 0.1,
                easing: 'easeOut',
              },
            }}
            className="bg-green-400 w-[.3rem] border border-slate-300"
          ></motion.div>
        ) : null}
        {level >= 1 ? (
          <motion.div
            animate={{
              height: ['0rem', '0.55rem'],
              transition: {
                delay: 0.1,
                duration: 0.09,
                easing: 'easeIn',
              },
            }}
            className="bg-yellow-400 w-[.3rem] border border-slate-300"
          ></motion.div>
        ) : null}
        {level >= 1 ? (
          <motion.div
            animate={{
              height: ['0rem', '0.7rem'],
              transition: {
                delay: 0.2,
                duration: 0.09,
                easing: 'easeOut',
              },
            }}
            className="bg-orange-400 w-[.3rem] border border-slate-300"
          ></motion.div>
        ) : null}
        {level >= 1 ? (
          <motion.div
            animate={{
              height: ['0rem', '0.85rem'],
              transition: {
                delay: 0.3,
                duration: 0.09,
                easing: 'easeOut',
              },
            }}
            className="bg-rose-500 w-[.3rem] border border-slate-300"
          ></motion.div>
        ) : null}
        {level >= 1 ? (
          <motion.div
            animate={{
              height: ['0rem', '1rem'],
              transition: {
                delay: 0.4,
                duration: 0.09,
                easing: 'easeOut',
              },
            }}
            className="bg-rose-600 w-[.3rem] border border-slate-300"
          ></motion.div>
        ) : null}
      </div>
    </div>
  );
}
