import { uvGradingInterface } from '../../interfaces';

export default function UvGrading({ uvObject }: uvGradingInterface) {
  if (!uvObject) return null;
  console.log('uvObject:', uvObject);
  const { name, degrees } = uvObject;
  return (
    <div className="flex gap-2">
      <p>{name}</p>
      <div className="h-10 w-10 rounded-full bg-gradient-to-r from-green-400 via-yellow-400 to-red-400 relative -mb-4 flex justify-center items-center">
        <div
          className={`h-10 pt-[10px] w-[px] relative z-10 ${degrees} -mt-1 flex flex-col items-center`}
        >
          <div className="w-0 h-0 border-l-[4px] border-l-transparent border-b-[7px] border-b-slate-500 border-r-[4px] border-r-transparent"></div>
          <div className="w-[3px] h-[7px] bg-slate-500"></div>
        </div>
        <div className="rounded-full h-[24px] w-[24px] bg-white absolute top-[8px] left-[8px]"></div>
        <div className="absolute bg-white top-[55%] left-0 right-0 bottom-0"></div>
      </div>
    </div>
  );
}
