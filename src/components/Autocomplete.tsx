import { useState } from 'react';
import {
  Combobox,
  ComboboxInput,
  ComboboxOptions,
  ComboboxOption,
} from '@headlessui/react';
import { useAutocompleteLocation } from '../hooks/useAutocompleteLocation';
import { autocompleteInterface } from '../interfaces';

export default function Autocomplete({ location }: autocompleteInterface) {
  const [selectedLocation, setSelectedLocation] = useState(
    location ? location.text : ''
  );
  const [selectedLocationText, setSelectedLocationText] = useState(
    location ? location.text : ''
  );
  // const [locationList, setLocationList] = useState(
  //   location
  //     ? location
  //     : { text: '', parameters: { latitude: 0, longitude: 0 } }
  // );
  const { data, isLoading } = useAutocompleteLocation({
    text: selectedLocationText,
  });
  console.log('selectedLocation', selectedLocation);

  return (
    <Combobox
      value={selectedLocation}
      onChange={(e) => {
        console.log(e);
        if (e) {
          setSelectedLocation(e);
          console.log(`set to`);
          console.log(e);
          //here set global values - full location object & store it locally
        }
      }}
    >
      <ComboboxInput
        onChange={(e) => {
          console.log('ComboboxInput:', e.target.value);
          setSelectedLocationText(e.target.value);
        }}
        displayValue={(el: autocompleteInterface['location']) => el?.text || ''}
      />
      <ComboboxOptions>
        {!isLoading && !data ? <p>no data</p> : null}
        {isLoading ? <p>loading</p> : null}
        {data
          ? data.map((location: autocompleteInterface['location']) => {
              if (location) {
                console.log(location);
                return (
                  <ComboboxOption key={location.text} value={location}>
                    {location.text}
                  </ComboboxOption>
                );
              }
            })
          : null}
      </ComboboxOptions>
    </Combobox>
  );
}
