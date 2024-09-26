import { uvGradingInterface } from '../../interfaces';

export default function UvGrading({ uvObject }: uvGradingInterface) {
  if (!uvObject) return null;
  console.log('uvObject:', uvObject);
  const { name, degrees } = uvObject;
  return (
    <div className="flex gap-2">
      <p>{name}</p>
      <div className="h-10 w-10 rounded-full bg-gradient-to-r from-green-500 via-yellow-500 to-red-500 relative -mb-4 flex justify-center items-center">
        <div className={`h-8 w-[8px] relative z-10 ${degrees} -mt-1`}>
          <div className="w-0 h-0 border-l-[4px] border-l-transparent border-b-[20px] border-b-sky-600 border-r-[4px] border-r-transparent"></div>
        </div>
        <div className="rounded-full h-8 w-8 bg-white absolute top-1 left-1 right-1 bottom-1"></div>
        <div className="absolute bg-white top-[55%] left-0 right-0 bottom-0"></div>
      </div>
    </div>
  );
}
