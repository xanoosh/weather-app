import { dayForecastIconInterface } from '../../interfaces';
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
export default function DayForecastIcon({
  weatherName,
}: dayForecastIconInterface) {
  return (
    <>
      {weatherName === 'Unknown' ? <WiAlien size={'1.5rem'} /> : null}
      {/* clear */}
      {weatherName === 'Clear, Sunny' ? <WiDaySunny size={'1.5rem'} /> : null}
      {/* cloudy */}
      {weatherName === 'Mostly Clear' ? <WiDayCloudy size={'1.5rem'} /> : null}
      {weatherName === 'Partly Cloudy' ? <WiDayCloudy size={'1.5rem'} /> : null}
      {weatherName === 'Mostly Cloudy' ? <WiCloud size={'1.5rem'} /> : null}
      {weatherName === 'Cloudy' ? <WiCloudy size={'1.5rem'} /> : null}
      {/* fog */}
      {weatherName === 'Fog' ? <WiFog size={'1.5rem'} /> : null}
      {weatherName === 'Light Fog' ? <WiFog size={'1.5rem'} /> : null}
      {/* rain */}
      {weatherName === 'Drizzle' ? <WiShowers size={'1.5rem'} /> : null}
      {weatherName === 'Rain' ? <WiRain size={'1.5rem'} /> : null}
      {weatherName === 'Light Rain' ? <WiShowers size={'1.5rem'} /> : null}
      {weatherName === 'Heavy Rain' ? <WiRain size={'1.5rem'} /> : null}
      {/* snow */}
      {weatherName === 'Snow' ? <WiSnow size={'1.5rem'} /> : null}
      {weatherName === 'Flurries' ? <WiSnow size={'1.5rem'} /> : null}
      {weatherName === 'Light Snow' ? <WiSnow size={'1.5rem'} /> : null}
      {weatherName === 'Heavy Snow' ? <WiSnow size={'1.5rem'} /> : null}
      {/* freezing rain */}
      {weatherName === 'Freezing Drizzle' ? (
        <WiRainWind size={'1.5rem'} />
      ) : null}
      {weatherName === 'Freezing Rain' ? <WiRainWind size={'1.5rem'} /> : null}
      {weatherName === 'Light Freezing Rain' ? (
        <WiRainWind size={'1.5rem'} />
      ) : null}
      {weatherName === 'Heavy Freezing Rain' ? (
        <WiRainWind size={'1.5rem'} />
      ) : null}
      {/* ice pellets */}
      {weatherName === 'Ice Pellets' ? <WiHail size={'1.5rem'} /> : null}
      {weatherName === 'Heavy Ice Pellets' ? <WiHail size={'1.5rem'} /> : null}
      {weatherName === 'Light Ice Pellets' ? <WiHail size={'1.5rem'} /> : null}
      {/* Thunderstorm */}
      {weatherName === 'Thunderstorm' ? (
        <WiThunderstorm size={'1.5rem'} />
      ) : null}
    </>
  );
}
