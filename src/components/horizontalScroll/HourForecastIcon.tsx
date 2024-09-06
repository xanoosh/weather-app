import { hourForecastIconInterface } from '../../interfaces';
import {
  WiAlien,
  WiDaySunny,
  WiDayCloudy,
  WiCloud,
  WiCloudy,
  WiShowers,
  WiRain,
  WiRainWind,
  WiFog,
  WiSnow,
  WiHail,
  WiThunderstorm,
} from 'react-icons/wi';
export default function HourForecastIcon({
  weatherName,
}: hourForecastIconInterface) {
  return (
    <div className="flex flex-col gap-1 justify-center items-center">
      {weatherName === 'Unknown' ? <WiAlien size={'3.5rem'} /> : null}
      {/* clear */}
      {weatherName === 'Clear, Sunny' ? (
        <WiDaySunny className="text-yellow-400" size={'3.5rem'} />
      ) : null}
      {/* cloudy */}
      {weatherName === 'Mostly Clear' ? (
        <WiDayCloudy className="text-slate-600" size={'3.5rem'} />
      ) : null}
      {weatherName === 'Partly Cloudy' ? (
        <WiDayCloudy className="text-slate-600" size={'3.5rem'} />
      ) : null}
      {weatherName === 'Mostly Cloudy' ? (
        <WiCloud className="text-slate-600" size={'3.5rem'} />
      ) : null}
      {weatherName === 'Cloudy' ? (
        <WiCloudy className="text-slate-600" size={'3.5rem'} />
      ) : null}
      {/* fog */}
      {weatherName === 'Fog' ? (
        <WiFog className="text-slate-500" size={'3.5rem'} />
      ) : null}
      {weatherName === 'Light Fog' ? (
        <WiFog className="text-slate-500" size={'3.5rem'} />
      ) : null}
      {/* rain */}
      {weatherName === 'Drizzle' ? (
        <WiShowers className="text-blue-800" size={'3.5rem'} />
      ) : null}
      {weatherName === 'Rain' ? (
        <WiRain className="text-blue-800" size={'3.5rem'} />
      ) : null}
      {weatherName === 'Light Rain' ? (
        <WiShowers className="text-blue-800" size={'3.5rem'} />
      ) : null}
      {weatherName === 'Heavy Rain' ? (
        <WiRain className="text-blue-800" size={'3.5rem'} />
      ) : null}
      {/* snow */}
      {weatherName === 'Snow' ? (
        <WiSnow className="text-white" size={'3.5rem'} />
      ) : null}
      {weatherName === 'Flurries' ? (
        <WiSnow className="text-white" size={'3.5rem'} />
      ) : null}
      {weatherName === 'Light Snow' ? (
        <WiSnow className="text-white" size={'3.5rem'} />
      ) : null}
      {weatherName === 'Heavy Snow' ? (
        <WiSnow className="text-white" size={'3.5rem'} />
      ) : null}
      {/* freezing rain */}
      {weatherName === 'Freezing Drizzle' ? (
        <WiRainWind className="text-blue-800" size={'3.5rem'} />
      ) : null}
      {weatherName === 'Freezing Rain' ? (
        <WiRainWind className="text-blue-800" size={'3.5rem'} />
      ) : null}
      {weatherName === 'Light Freezing Rain' ? (
        <WiRainWind className="text-blue-800" size={'3.5rem'} />
      ) : null}
      {weatherName === 'Heavy Freezing Rain' ? (
        <WiRainWind className="text-blue-800" size={'3.5rem'} />
      ) : null}
      {/* ice pellets */}
      {weatherName === 'Ice Pellets' ? (
        <WiHail className="text-white" size={'3.5rem'} />
      ) : null}
      {weatherName === 'Heavy Ice Pellets' ? (
        <WiHail className="text-white" size={'3.5rem'} />
      ) : null}
      {weatherName === 'Light Ice Pellets' ? (
        <WiHail className="text-white" size={'3.5rem'} />
      ) : null}
      {/* Thunderstorm */}
      {weatherName === 'Thunderstorm' ? (
        <WiThunderstorm className="text-blue-800" size={'3.5rem'} />
      ) : null}
      <p className="text-center text-xs text-white">{weatherName}</p>
    </div>
  );
}
