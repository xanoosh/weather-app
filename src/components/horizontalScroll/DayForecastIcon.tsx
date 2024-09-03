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
      {weatherName === 'Unknown' ? <WiAlien size={'2rem'} /> : null}
      {/* clear */}
      {weatherName === 'Clear, Sunny' ? <WiDaySunny size={'2rem'} /> : null}
      {/* cloudy */}
      {weatherName === 'Mostly Clear' ? <WiDayCloudy size={'2rem'} /> : null}
      {weatherName === 'Partly Cloudy' ? <WiDayCloudy size={'2rem'} /> : null}
      {weatherName === 'Mostly Cloudy' ? <WiCloud size={'2rem'} /> : null}
      {weatherName === 'Cloudy' ? <WiCloudy size={'2rem'} /> : null}
      {/* fog */}
      {weatherName === 'Fog' ? <WiFog size={'2rem'} /> : null}
      {weatherName === 'Light Fog' ? <WiFog size={'2rem'} /> : null}
      {/* rain */}
      {weatherName === 'Drizzle' ? <WiShowers size={'2rem'} /> : null}
      {weatherName === 'Rain' ? <WiRain size={'2rem'} /> : null}
      {weatherName === 'Light Rain' ? <WiShowers size={'2rem'} /> : null}
      {weatherName === 'Heavy Rain' ? <WiRain size={'2rem'} /> : null}
      {/* snow */}
      {weatherName === 'Snow' ? <WiSnow size={'2rem'} /> : null}
      {weatherName === 'Flurries' ? <WiSnow size={'2rem'} /> : null}
      {weatherName === 'Light Snow' ? <WiSnow size={'2rem'} /> : null}
      {weatherName === 'Heavy Snow' ? <WiSnow size={'2rem'} /> : null}
      {/* freezing rain */}
      {weatherName === 'Freezing Drizzle' ? <WiRainWind size={'2rem'} /> : null}
      {weatherName === 'Freezing Rain' ? <WiRainWind size={'2rem'} /> : null}
      {weatherName === 'Light Freezing Rain' ? (
        <WiRainWind size={'2rem'} />
      ) : null}
      {weatherName === 'Heavy Freezing Rain' ? (
        <WiRainWind size={'2rem'} />
      ) : null}
      {/* ice pellets */}
      {weatherName === 'Ice Pellets' ? <WiHail size={'2rem'} /> : null}
      {weatherName === 'Heavy Ice Pellets' ? <WiHail size={'2rem'} /> : null}
      {weatherName === 'Light Ice Pellets' ? <WiHail size={'2rem'} /> : null}
      {/* Thunderstorm */}
      {weatherName === 'Thunderstorm' ? <WiThunderstorm size={'2rem'} /> : null}
    </>
  );
}
