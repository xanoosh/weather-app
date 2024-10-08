import { useQuery } from '@tanstack/react-query';

const getAutocompleteLocationQuery = (text: string) => ({
  enabled: text.length > 0,
  queryKey: ['autocomplete-location', text],
  queryFn: () => getAutocompleteLocation(text),
  staleTime: 1000 * 60 * 5,
});

async function getAutocompleteLocation(text: string) {
  try {
    const response = await fetch(
      `https://api.geoapify.com/v1/geocode/autocomplete?text=${text}&limit=5&apiKey=6fe3f1c5c54147d98c982aaf4d98f9a2`,
      {
        method: 'GET',
      }
    );
    if (response.status !== 200) {
      throw new Error('Failed to fetch autocomplete data');
    }
    const autocompleteLocation = await response.json();
    const possibleLocations = autocompleteLocation.features.map(
      (feature: {
        properties: { formatted: string; lat: number; lon: number };
      }) => {
        return {
          text: feature.properties.formatted,
          parameters: {
            latitude: feature.properties.lat,
            longitude: feature.properties.lon,
          },
        };
      }
    );
    return possibleLocations;
  } catch (error) {
    console.error(error);
    return error;
  }
}

export function useAutocompleteLocation({ text }: { text: string }) {
  return useQuery(getAutocompleteLocationQuery(text));
}
