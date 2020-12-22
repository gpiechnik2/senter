import {
  SearchPanelContainer,
  SearchPanelWrapper,
  SearchForm,
  SearchBtn,
  IconSearch,
  Input,
} from './SearchPanelElements';

const SearchPanel = () => {
  return (
    <>
      <SearchPanelContainer>
        <SearchPanelWrapper>
          <SearchForm>
            <SearchBtn>
              <IconSearch />
            </SearchBtn>

            <Input
              type='search'
              placeholder='Szukaj np. jak przeprowadzić audyt'
            />
          </SearchForm>
        </SearchPanelWrapper>
      </SearchPanelContainer>
    </>
  );
};

export default SearchPanel;
