import { uvGradingInterface } from '../../interfaces';

export default function UvGrading({ level }: uvGradingInterface) {
  console.log(level);
  return (
    <div className="w-0 h-0 rounded-full bg-gradient-to-r from-green-500 to-rose-500 border-l-8 border-t-8 border-r-8 border-b-transparent"></div>
  );
}
