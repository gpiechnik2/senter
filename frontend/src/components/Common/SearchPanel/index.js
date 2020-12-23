import { useState, useEffect } from 'react';

import {
  SearchPanelContainer,
  SearchPanelWrapper,
  SearchForm,
  SearchBtn,
  IconSearch,
  Input,
  MyCombobox,
  MyComboboxPopover,
  MyComboboxOption,
  MyComboboxList,
} from './SearchPanelElements';

const SearchPanel = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const cities = useCitySearch(searchTerm);
  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };
  return (
    <>
      <SearchPanelContainer>
        <SearchPanelWrapper>
          <SearchForm>
            <MyCombobox aria-label='Cities'>
              <SearchBtn>
                <IconSearch />
              </SearchBtn>
              <Input
                type='search'
                placeholder='Szukaj np. jak przeprowadzić audyt'
                onChange={handleSearchTermChange}
              />
              {cities && (
                <MyComboboxPopover>
                  {cities.length > 0 ? (
                    <MyComboboxList>
                      {cities.map((city) => {
                        const str = `${city.city}, ${city.state}`;
                        return <MyComboboxOption key={str} value={str} />;
                      })}
                    </MyComboboxList>
                  ) : (
                    <span style={{ display: 'block', margin: 8 }}>
                      No results found
                    </span>
                  )}
                </MyComboboxPopover>
              )}
            </MyCombobox>
          </SearchForm>
        </SearchPanelWrapper>
      </SearchPanelContainer>
    </>
  );
};

export default SearchPanel;

const useCitySearch = (searchTerm) => {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    if (searchTerm.trim() !== '') {
      let isFresh = true;
      fetchCities(searchTerm).then((cities) => {
        if (isFresh) setCities(cities);
      });
      return () => (isFresh = false);
    }
  }, [searchTerm]);
  return cities;
};
const cache = {};

const fetchCities = (value) => {
  if (cache[value]) {
    return Promise.resolve(cache[value]);
  }
  return fetch('https://city-search.chaance.vercel.app/api?' + value)
    .then((res) => res.json())
    .then((result) => {
      cache[value] = result;
      return result;
    });
};
