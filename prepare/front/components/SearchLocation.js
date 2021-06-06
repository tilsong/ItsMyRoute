import React from 'react';
import PropTypes from 'prop-types';
import { Combobox, ComboboxInput, ComboboxPopover, ComboboxList, ComboboxOption } from '@reach/combobox';
import usePlacesAutocomplete, { getGeocode, getLatLng } from 'use-places-autocomplete';

const search = {
  top: '40px',
  left: '60%',
  width: '100%',
};

const searchInput = {
  padding: '0.05rem',
  fontSize: '1.5rem',
  width: '100%',
};

const SearchLocation = ({ panTo, currentNumber }) => {
  const {
    ready, value, suggestions: { status, data }, setValue, clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      location: { lat: () => currentNumber.lat, lng: () => currentNumber.lng },
      radius: 200 * 1000,
    },
  });

  return (
    <div>
      <Combobox
        onSelect={async (address) => {
          setValue(address, false);
          clearSuggestions(); // address 저장하고 빈칸으로.
          try {
            const results = await getGeocode({ address });
            const { lat, lng } = await getLatLng(results[0]);
            panTo({ lat, lng }); // panTo는 맵의 인스턴스인듯 함.
          } catch (error) {
            console.log('error!');
          }
          console.log(address);
        }}
        style={search}
      >
        <ComboboxInput
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          disabled={!ready}
          placeholder="주소를 입력하세요"
          style={searchInput}
        />
        <ComboboxPopover>
          <ComboboxList>
            {status === 'OK'
            && data.map(({ id, description }) => (
              <ComboboxOption key={id} value={description} />
            ))}
          </ComboboxList>
        </ComboboxPopover>
      </Combobox>
    </div>
  );
};

SearchLocation.propTypes = {
  panTo: PropTypes.func.isRequired,
  currentNumber: PropTypes.shape({
    lat: PropTypes.string,
    lng: PropTypes.string,
  }).isRequired,
};

export default SearchLocation;
