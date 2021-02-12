import { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { searchQuery } from '../../../actions/searchQuery';
import { getArticle, getarticles } from '../../../actions/articles';
import { getAudit, getaudits } from '../../../actions/audits';
import { getKeyword, getkeywords } from '../../../actions/keywords';

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
  LinkElement,
} from './SearchPanelElements';

const initialState = {
  searchQuery: '',
};

const SearchPanel = () => {
  const [searchForm, setSearchForm] = useState(initialState);
  const { searchData } = useSelector((state) => state.searchReducer);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setSearchForm({ ...searchForm, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    dispatch(getaudits());
    dispatch(getkeywords());
    dispatch(getarticles());
  }, [dispatch]);

  useEffect(() => {
    if (searchForm.searchQuery.length > 0) {
      dispatch(searchQuery(searchForm));
    }
  }, [dispatch, searchForm]);

  const locationName = (endpoint) => {
    if (endpoint.includes('audit/')) {
      return '/audit';
    } else if (endpoint.includes('keyword-planner/')) {
      return '/keyword-planner';
    } else if (endpoint.includes('content-analysis/analyse/')) {
      return '/content-analysis';
    } else {
      return '/dasboard';
    }
  };

  const properDispatch = (endpoint) => {
    let properId = parseInt(endpoint.slice(-2));
    if (endpoint.includes('audit/')) {
      dispatch(getAudit(properId));
    } else if (endpoint.includes('keyword-planner/')) {
      dispatch(getKeyword(properId));
    } else if (endpoint.includes('content-analysis/analyse/')) {
      dispatch(getArticle(properId));
    }
  };

  const popoverRef = useRef();

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
                name='searchQuery'
                value={searchForm.searchQuery}
                placeholder='Szukaj np. jak przeprowadzić audyt'
                onChange={handleChange}
              />
              {searchData && (
                <MyComboboxPopover ref={popoverRef}>
                  {searchData?.results.length > 0 ? (
                    <MyComboboxList>
                      {searchData?.results.map((result, i) => (
                        <LinkElement
                          key={i}
                          to={locationName(result.endpoint)}
                          onClick={() => {
                            properDispatch(result.endpoint);
                            console.log(popoverRef.current);
                            popoverRef.current.setAttribute('hidden', true);
                          }}>
                          <MyComboboxOption value={result.result} />
                        </LinkElement>
                      ))}
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
