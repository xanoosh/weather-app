import imgPath from '../assets/weather-icons/1101.png';

export default function Loader() {
  return (
    <div className="h-[70vh] flex justify-center items-center">
      <img src={imgPath} alt="loader-img" className="animate-bounce" />
    </div>
  );
}
