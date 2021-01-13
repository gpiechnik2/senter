import Select from 'react-select';

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
                isSearchable={false}
                className='react-select-container'
                classNamePrefix='react-select'
                theme={(theme) => ({
                  ...theme,
                  borderRadius: 0,
                  colors: {
                    ...theme.colors,
                    primary: 'rgba(107, 126, 172, 0.05)',
                  },
                })}
                options={options1}
                placeholder='Państwo'
              />
            </FormSelectContainer>
            <FormSelectContainer>
              <Select
                isSearchable={false}
                className='react-select-container'
                classNamePrefix='react-select'
                theme={(theme) => ({
                  ...theme,
                  borderRadius: 0,
                  colors: {
                    ...theme.colors,
                    primary: 'rgba(107, 126, 172, 0.05)',
                  },
                })}
                options={options2}
                placeholder='Urządzenie'
              />
            </FormSelectContainer>
            <FormSelectContainer>
              <Select
                isSearchable={false}
                className='react-select-container'
                classNamePrefix='react-select'
                theme={(theme) => ({
                  ...theme,
                  borderRadius: 0,
                  colors: {
                    ...theme.colors,
                    primary: 'rgba(107, 126, 172, 0.05)',
                  },
                })}
                options={options2}
                placeholder='Data startowa'
              />
            </FormSelectContainer>
            <FormSelectContainer>
              <Select
                isSearchable={false}
                className='react-select-container'
                classNamePrefix='react-select'
                theme={(theme) => ({
                  ...theme,
                  borderRadius: 0,
                  colors: {
                    ...theme.colors,
                    primary: 'rgba(107, 126, 172, 0.05)',
                  },
                })}
                options={options2}
                placeholder='Data końcowa'
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
