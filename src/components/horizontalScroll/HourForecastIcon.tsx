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
      {weatherName === 'Clear, Sunny' ? <WiDaySunny size={'3.5rem'} /> : null}
      {/* cloudy */}
      {weatherName === 'Mostly Clear' ? <WiDayCloudy size={'3.5rem'} /> : null}
      {weatherName === 'Partly Cloudy' ? <WiDayCloudy size={'3.5rem'} /> : null}
      {weatherName === 'Mostly Cloudy' ? <WiCloud size={'3.5rem'} /> : null}
      {weatherName === 'Cloudy' ? <WiCloudy size={'3.5rem'} /> : null}
      {/* fog */}
      {weatherName === 'Fog' ? <WiFog size={'3.5rem'} /> : null}
      {weatherName === 'Light Fog' ? <WiFog size={'3.5rem'} /> : null}
      {/* rain */}
      {weatherName === 'Drizzle' ? <WiShowers size={'3.5rem'} /> : null}
      {weatherName === 'Rain' ? <WiRain size={'3.5rem'} /> : null}
      {weatherName === 'Light Rain' ? <WiShowers size={'3.5rem'} /> : null}
      {weatherName === 'Heavy Rain' ? <WiRain size={'3.5rem'} /> : null}
      {/* snow */}
      {weatherName === 'Snow' ? <WiSnow size={'3.5rem'} /> : null}
      {weatherName === 'Flurries' ? <WiSnow size={'3.5rem'} /> : null}
      {weatherName === 'Light Snow' ? <WiSnow size={'3.5rem'} /> : null}
      {weatherName === 'Heavy Snow' ? <WiSnow size={'3.5rem'} /> : null}
      {/* freezing rain */}
      {weatherName === 'Freezing Drizzle' ? (
        <WiRainWind size={'3.5rem'} />
      ) : null}
      {weatherName === 'Freezing Rain' ? <WiRainWind size={'3.5rem'} /> : null}
      {weatherName === 'Light Freezing Rain' ? (
        <WiRainWind size={'3.5rem'} />
      ) : null}
      {weatherName === 'Heavy Freezing Rain' ? (
        <WiRainWind size={'3.5rem'} />
      ) : null}
      {/* ice pellets */}
      {weatherName === 'Ice Pellets' ? <WiHail size={'3.5rem'} /> : null}
      {weatherName === 'Heavy Ice Pellets' ? <WiHail size={'3.5rem'} /> : null}
      {weatherName === 'Light Ice Pellets' ? <WiHail size={'3.5rem'} /> : null}
      {/* Thunderstorm */}
      {weatherName === 'Thunderstorm' ? (
        <WiThunderstorm size={'3.5rem'} />
      ) : null}
      <p className="text-center text-xs text-white">{weatherName}</p>
    </div>
  );
}
