import Select from 'react-select';

import { SeoPageContainer, SeoSelect } from './SeoPageElements';

import {
  FormContainer,
  FormTitle,
  FormText,
  FormWrap,
  FormInput,
  FormBtnWrap,
} from '../../../Common/FormElements';

import { ButtonBasic } from '../../../Common/ButtonElements';

const SeoPage = () => {
  const options1 = [
    { label: 'all', value: 'Wszystkie' },
    { label: 'op1', value: 'opcja 1' },
    { label: 'op2', value: 'opcja 2' },
    { label: 'op3', value: 'opcja 3' },
  ];
  return (
    <>
      <SeoPageContainer>
        <FormContainer>
          <FormTitle>Analiza SEO</FormTitle>
          <FormText>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy.
          </FormText>
          <FormWrap>
            <FormInput placeholder='Adres strony do analizy' />
            <SeoSelect>
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
            </SeoSelect>
            <FormBtnWrap>
              <ButtonBasic>Analizuj</ButtonBasic>
            </FormBtnWrap>
          </FormWrap>
        </FormContainer>
      </SeoPageContainer>
    </>
  );
};

export default SeoPage;
