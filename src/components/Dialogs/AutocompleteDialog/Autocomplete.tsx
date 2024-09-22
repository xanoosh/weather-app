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
import { useLocationStore } from '../../../hooks/store/useLocationStore';

export default function Autocomplete({ closeDialog }: autocompleteInterface) {
  const { text } = useLocationStore((state) => state.location);
  const updateLocation = useLocationStore((state) => state.updateLocation);
  const [selectedLocationText, setSelectedLocationText] = useState(
    text ? text : ''
  );
  const [selectedLocationTextDebounced, setSelectedLocationTextDebounced] =
    useState(text ? text : '');

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
          if (e) {
            setSelectedLocationText(e);
            const newLocation = data.find(
              (el: autocompleteInterface['location']) => el?.text === e
            );
            updateLocation(newLocation);
            if (closeDialog) closeDialog();
          }
        }}
      >
        <ComboboxInput
          className="bg-white border border-slate-400 rounded py-2 px-4 w-full text-slate-700 focus:ring-1 focus:ring-sky-600 focus:border-sky-600 focus:outline-none"
          onChange={(e) => {
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
              className="text-slate-500 py-2 px-4"
            >
              Data is unavailable
            </ComboboxOption>
          ) : null}
          {isLoading ||
          selectedLocationText !== selectedLocationTextDebounced ? (
            <ComboboxOption
              value={null}
              disabled
              className="flex justify-start items-center py-2 px-4"
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
                      value={location.text}
                      className="text-slate-700 py-2 px-4 hover:text-white hover:bg-sky-600 cursor-pointer"
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
