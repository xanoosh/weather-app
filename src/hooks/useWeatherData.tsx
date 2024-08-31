import { useQuery } from '@tanstack/react-query';

//example weather api call:
// https://api.tomorrow.io/v4/weather/forecast?location=42.3478,-71.0466&timesteps=1h&apikey=hksUR6LwcgQ99KQzNrGljeRi8oR6vWIv

const getWeatherDataQuery = (
  latitude: number | null,
  longitude: number | null
) => ({
  enabled: typeof latitude === 'number' && typeof longitude === 'number',
  queryKey: ['weather-data', latitude, longitude],
  queryFn: () => getWeatherData(latitude, longitude),
  staleTime: 1000 * 60 * 5,
});

async function getWeatherData(
  latitude: number | null,
  longitude: number | null
) {
  console.log('getWeatherData:');
  console.log('latitude', latitude);
  console.log('longitude', longitude);
  if (!latitude || !longitude) return null;
  try {
    const response = await fetch(
      `https://api.tomorrow.io/v4/weather/forecast?location=42.3478,-71.0466&timesteps=1h&apikey=hksUR6LwcgQ99KQzNrGljeRi8oR6vWIv`,
      {
        method: 'GET',
      }
    );
    if (response.status !== 200) {
      throw new Error('Failed to fetch weather data');
    }
    const weatherData = await response.json();
    console.log(weatherData);
    return weatherData;
  } catch (error) {
    console.error(error);
    return error;
  }
}

export function useWeatherData({
  latitude,
  longitude,
}: {
  latitude: number | null;
  longitude: number | null;
}) {
  return useQuery(getWeatherDataQuery(latitude, longitude));
}
