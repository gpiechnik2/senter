import Select from 'react-select';

import { SeoPageContainer } from './SeoPageElements';

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

import { ColumnContainerBasic } from '../../../Common/ContainerElements';
import {
  AnalysisElementWrapper,
  AnalysisElement,
  ElementTitle,
  ElementText,
} from '../../../Common/AnalysisElements';

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
                placeholder='Rodzaj strony'
              />
            </FormSelectContainer>
            <FormBtnWrap>
              <ButtonBasic>Analizuj</ButtonBasic>
            </FormBtnWrap>
          </FormWrap>
        </FormContainer>
        <ColumnContainerBasic>
          <AnalysisElementWrapper>
            <AnalysisElement>
              <ElementTitle>H1 count</ElementTitle>
              <ElementText>analysis.h1.h1_count</ElementText>
            </AnalysisElement>
            <AnalysisElement>
              <ElementTitle>H1 count</ElementTitle>
              <ElementText>analysis.h1.h1_count</ElementText>
            </AnalysisElement>
            <AnalysisElement>
              <ElementTitle>H1 count</ElementTitle>
              <ElementText>analysis.h1.h1_count</ElementText>
            </AnalysisElement>
          </AnalysisElementWrapper>
        </ColumnContainerBasic>
      </SeoPageContainer>
    </>
  );
};

export default SeoPage;
