import { useState } from 'react';
import { useDebounce } from 'react-use';
import {
  Combobox,
  ComboboxInput,
  ComboboxOptions,
  ComboboxOption,
} from '@headlessui/react';
import { useAutocompleteLocation } from '../hooks/useAutocompleteLocation';
import { autocompleteInterface } from '../interfaces';

export default function Autocomplete({ location }: autocompleteInterface) {
  const [selectedLocationText, setSelectedLocationText] = useState(
    location ? location.text : ''
  );
  const [selectedLocationTextDebounced, setSelectedLocationTextDebounced] =
    useState(location ? location.text : '');

  const { data, isLoading } = useAutocompleteLocation({
    text: selectedLocationTextDebounced,
  });

  useDebounce(
    () => {
      setSelectedLocationTextDebounced(selectedLocationText);
    },
    500,
    [selectedLocationText]
  );

  return (
    <Combobox
      value={selectedLocationText}
      onChange={(e) => {
        console.log(e);
        if (e) {
          setSelectedLocationText(e);
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
        {isLoading || selectedLocationText !== selectedLocationTextDebounced ? (
          <p>loading</p>
        ) : null}
        {data && selectedLocationText === selectedLocationTextDebounced
          ? data.map((location: autocompleteInterface['location']) => {
              if (location) {
                // console.log(location);
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
