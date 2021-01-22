import Select from 'react-dropdown-select';

import { SearchConsolePageContainer } from './SearchConsolePageElements';

import {
  FormContainer,
  FormTitle,
  FormText,
  FormWrap,
  FormInput,
  FormBtnWrap,
  FormSelectContainer,
} from '../../../Common/FormElements';

import { ButtonBasic } from '../../../Common/ButtonElements';

const SearchConsolePage = () => {
  const options1 = [
    { label: 'all', value: 'Wszystkie' },
    { label: 'op1', value: 'opcja 1' },
    { label: 'op2', value: 'opcja 2' },
    { label: 'op3', value: 'opcja 3' },
  ];
  const options2 = [
    { label: 'Mobile', value: 'mobile' },
    { label: 'Desktop', value: 'pc' },
    { label: 'TV', value: 'tv' },
    { label: 'op3', value: 'opcja 3' },
  ];
  return (
    <>
      <SearchConsolePageContainer>
        <FormContainer>
          <FormTitle>Analiza SearchConsole</FormTitle>
          <FormText>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy.
          </FormText>
          <FormWrap>
            <FormInput placeholder='Adres strony do analizy' />
            <FormSelectContainer>
              <Select
                placeholder='Państwo'
                required
                searchable={false}
                options={options1}
              />
            </FormSelectContainer>
            <FormSelectContainer>
              <Select
                placeholder='Rodzaj urządzenia'
                required
                searchable={false}
                options={options2}
              />
            </FormSelectContainer>
            <FormSelectContainer>
              <Select
                placeholder='Data startowa'
                required
                searchable={false}
                options={options1}
              />
            </FormSelectContainer>
            <FormSelectContainer>
              <Select
                placeholder='Data końcowa'
                required
                searchable={false}
                options={options1}
              />
            </FormSelectContainer>
            <FormBtnWrap>
              <ButtonBasic>Analizuj</ButtonBasic>
            </FormBtnWrap>
          </FormWrap>
        </FormContainer>
      </SearchConsolePageContainer>
    </>
  );
};

export default SearchConsolePage;
