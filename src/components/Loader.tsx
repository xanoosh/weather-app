import { WiDaySunny } from 'react-icons/wi';

export default function Loader() {
  return (
    <div className="h-[100vh] flex justify-center items-center">
      <div className="animate-spin text-yellow-400">
        <WiDaySunny size={'6rem'} />
      </div>
    </div>
  );
}
