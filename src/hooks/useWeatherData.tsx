import { useQuery } from '@tanstack/react-query';

//example weather api call:
//https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m

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
      `https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m`,
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
