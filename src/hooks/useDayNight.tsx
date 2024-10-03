import { useQuery } from '@tanstack/react-query';

const getDayNightQuery = (
  latitude: number | null,
  longitude: number | null,
  dateStart: string | null,
  dateEnd: string | null
) => ({
  enabled: typeof latitude === 'number' && typeof longitude === 'number',
  queryKey: ['day-night', latitude, longitude, dateStart, dateEnd],
  queryFn: () => getDayNightData(latitude, longitude, dateStart, dateEnd),
  staleTime: 1000 * 60 * 5,
});

async function getDayNightData(
  latitude: number | null,
  longitude: number | null,
  dateStart: string | null,
  dateEnd: string | null
) {
  try {
    const response = await fetch(
      `https://api.sunrisesunset.io/json?lat=${latitude}&lng=${longitude}&date_start=${dateStart}&date_end=${dateEnd}`,
      {
        method: 'GET',
      }
    );
    if (response.status !== 200) {
      throw new Error('Failed to fetch day night data');
    }
    const dayNightData = await response.json();
    return dayNightData.results.map(
      ({ date, dawn, dusk }: { date: string; dawn: string; dusk: string }) => ({
        date,
        dawn,
        dusk,
      })
    );
  } catch (error) {
    console.error(error);
    return error;
  }
}

export function useDayNight({
  latitude,
  longitude,
  dateStart,
  dateEnd,
}: {
  latitude: number | null;
  longitude: number | null;
  dateStart: string | null;
  dateEnd: string | null;
}) {
  return useQuery(getDayNightQuery(latitude, longitude, dateStart, dateEnd));
}
