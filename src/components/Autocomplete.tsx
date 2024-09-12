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
    location ? location : { text: '' }
  );
  const { data, isLoading } = useAutocompleteLocation({
    text: selectedLocation.text,
  });

  return (
    <Combobox value={selectedLocation} onChange={setSelectedLocation}>
      <ComboboxInput />
      <ComboboxOptions>
        {isLoading ? <p>loading</p> : null}
        {data
          ? data.map((location) => (
              <ComboboxOption key={location.name} value={location}>
                {location.name}
              </ComboboxOption>
            ))
          : null}
      </ComboboxOptions>
    </Combobox>
  );
}
