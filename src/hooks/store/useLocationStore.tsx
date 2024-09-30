import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const getInitialLocation = () => {
  const location = localStorage.getItem('location');
  return location
    ? JSON.parse(location)
    : {
        text: 'Warsaw, Poland',
        parameters: { latitude: 52.237049, longitude: 21.017532 },
      };
};

type locationStoreType = {
  location: {
    text: string;
    parameters: { latitude: number; longitude: number };
  };
  updateLocation: (location: locationStoreType['location']) => void;
};

export const useLocationStore = create(
  persist<locationStoreType>(
    (set) => ({
      location: getInitialLocation(),
      updateLocation: (newLocation: locationStoreType['location']) =>
        set(() => ({ location: newLocation })),
    }),
    {
      name: 'location',
    }
  )
);
