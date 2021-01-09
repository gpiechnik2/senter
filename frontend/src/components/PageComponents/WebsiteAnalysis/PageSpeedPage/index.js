import Select from 'react-select';

import {
  PageSpeedPageContainer,
  PageSpeedSelect,
} from './PageSpeedPageElements';

import {
  FormContainer,
  FormTitle,
  FormText,
  FormWrap,
  FormInput,
  FormBtnWrap,
} from '../../../Common/FormElements';

import { ButtonBasic } from '../../../Common/ButtonElements';

const PageSpeedPage = () => {
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
      <PageSpeedPageContainer>
        <FormContainer>
          <FormTitle>Analiza PageSpeed Insights</FormTitle>
          <FormText>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy.
          </FormText>
          <FormWrap>
            <FormInput placeholder='Adres strony do analizy' />
            <PageSpeedSelect>
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
                placeholder='Rodzaj strony'
              />
            </PageSpeedSelect>
            <PageSpeedSelect>
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
            </PageSpeedSelect>
            <FormBtnWrap>
              <ButtonBasic>Analizuj</ButtonBasic>
            </FormBtnWrap>
          </FormWrap>
        </FormContainer>
      </PageSpeedPageContainer>
    </>
  );
};

export default PageSpeedPage;
