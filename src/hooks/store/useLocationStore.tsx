import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const getInitialLocation = () => {
  const location = localStorage.getItem('location');
  return location
    ? JSON.parse(location)
    : {
        text: 'warsaw',
        parameters: { latitude: 52.237049, longitude: 21.017532 },
      };
};

export const useLocationStore = create(
  persist(
    (set) => ({
      location: getInitialLocation(),
      updateLocation: (newLocation: unknown) =>
        set(() => ({ location: newLocation })),
    }),
    {
      name: 'location',
    }
  )
);
