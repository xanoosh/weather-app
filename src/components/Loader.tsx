import { WiDaySunny } from 'react-icons/wi';

export default function Loader() {
  return (
    <div className="h-[100vh] flex justify-center items-center">
      <WiDaySunny className="animate-bounce text-white" size={'6rem'} />
    </div>
  );
}
