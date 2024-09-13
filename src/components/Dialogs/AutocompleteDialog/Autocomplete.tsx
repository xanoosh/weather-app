import { useState } from 'react';
import { useDebounce } from 'react-use';
import {
  Combobox,
  ComboboxInput,
  ComboboxOptions,
  ComboboxOption,
} from '@headlessui/react';
import { useAutocompleteLocation } from '../../../hooks/useAutocompleteLocation';
import { autocompleteInterface } from '../../../interfaces';
import Loader from '../../Loader';

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
    <div className="relative w-full">
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
          className="bg-white border border-slate-400 rounded py-1 px-2 w-full text-slate-700"
          onChange={(e) => {
            console.log('ComboboxInput:', e.target.value);
            setSelectedLocationText(e.target.value);
          }}
          displayValue={(el: autocompleteInterface['location']) =>
            el?.text || ''
          }
          placeholder="type new location here"
        />
        <ComboboxOptions className="shadow-lg mt-1 bg-white rounded scrollbar scrollbar-thumb-sky-700 scrollbar-track-transparent overflow-y-scroll absolute top-[100%] left-0 right-0">
          {data?.length === 0 &&
          selectedLocationText === selectedLocationTextDebounced &&
          !isLoading ? (
            <ComboboxOption
              value={null}
              disabled
              className="text-slate-500 py-1 px-2"
            >
              Data is unavailable
            </ComboboxOption>
          ) : null}
          {isLoading ||
          selectedLocationText !== selectedLocationTextDebounced ? (
            <ComboboxOption
              value={null}
              disabled
              className="flex justify-start items-center py-1 px-2"
            >
              <Loader size="sm" color="#0ea5e9" />
            </ComboboxOption>
          ) : null}
          {data && selectedLocationText === selectedLocationTextDebounced
            ? data.map((location: autocompleteInterface['location']) => {
                if (location) {
                  return (
                    <ComboboxOption
                      key={location.text}
                      value={location}
                      className="text-slate-700 py-1 px-2 hover:text-white hover:bg-sky-500"
                    >
                      {location.text}
                    </ComboboxOption>
                  );
                }
              })
            : null}
        </ComboboxOptions>
      </Combobox>
    </div>
  );
}
