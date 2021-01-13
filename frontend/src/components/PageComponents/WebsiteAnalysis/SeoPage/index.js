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

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

import { ColumnContainerBasic } from '../../../Common/ContainerElements';
import {
  ExpandableAnalysisContainer,
  AnalysisElementWrapper,
  AnalysisElement,
  ElementTitle,
  ElementText,
  MessageAnalysisWrapper,
  MessageAnalysisElementWrap,
  StatusElement,
  StatusBar,
  StatusText,
  MessageElement,
  MessageText,
} from '../../../Common/AnalysisElements';

const SeoPage = () => {
  const options1 = [
    { label: 'all', value: 'Wszystkie' },
    { label: 'op1', value: 'opcja 1' },
    { label: 'op2', value: 'opcja 2' },
    { label: 'op3', value: 'opcja 3' },
  ];

  const analysisContent = [
    {
      title: 'Basic info',
      count: 12,
      main: 'frontmain',
      all: `"title1", "title2"`,
      message:
        'Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle poligraficznym. Został po raz pierwszy użyty w XV w. przez nieznanego drukarza do wypełnienia tekstem próbnej książki. Pięć wieków później zaczął być używany przemyśle ',
    },
    {
      title: 'Title',
      count: 12,
      main: 'frontmain',
      all: `"title1", "title2"`,
      message:
        'Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle poligraficznym. Został po raz pierwszy użyty w XV w. przez nieznanego drukarza do wypełnienia tekstem próbnej książki. Pięć wieków później zaczął być używany przemyśle ',
    },
    {
      title: 'External links',
      count: 12,
      main: 'frontmain',
      all: `"title1", "title2"`,
      message:
        'Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle poligraficznym. Został po raz pierwszy użyty w XV w. przez nieznanego drukarza do wypełnienia tekstem próbnej książki. Pięć wieków później zaczął być używany przemyśle ',
    },
    {
      title: 'Internal links',
      count: 12,
      main: 'frontmain',
      all: `"title1", "title2"`,
      message:
        'Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle poligraficznym. Został po raz pierwszy użyty w XV w. przez nieznanego drukarza do wypełnienia tekstem próbnej książki. Pięć wieków później zaczął być używany przemyśle ',
    },
    {
      title: 'Description',
      count: 12,
      main: 'frontmain',
      all: `"title1", "title2"`,
      message:
        'Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle poligraficznym. Został po raz pierwszy użyty w XV w. przez nieznanego drukarza do wypełnienia tekstem próbnej książki. Pięć wieków później zaczął być używany przemyśle ',
    },
    {
      title: 'H1',
      count: 12,
      main: 'frontmain',
      all: `"title1", "title2"`,
      message:
        'Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle poligraficznym. Został po raz pierwszy użyty w XV w. przez nieznanego drukarza do wypełnienia tekstem próbnej książki. Pięć wieków później zaczął być używany przemyśle ',
    },
    {
      title: 'Images',
      count: 12,
      main: 'frontmain',
      all: `"title1", "title2"`,
      message:
        'Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle poligraficznym. Został po raz pierwszy użyty w XV w. przez nieznanego drukarza do wypełnienia tekstem próbnej książki. Pięć wieków później zaczął być używany przemyśle ',
    },
    {
      title: 'H2',
      count: 12,
      main: 'frontmain',
      all: `"title1", "title2"`,
      message:
        'Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle poligraficznym. Został po raz pierwszy użyty w XV w. przez nieznanego drukarza do wypełnienia tekstem próbnej książki. Pięć wieków później zaczął być używany przemyśle ',
    },
    {
      title: 'H3-H6',
      count: 12,
      main: 'frontmain',
      all: `"title1", "title2"`,
      message:
        'Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle poligraficznym. Został po raz pierwszy użyty w XV w. przez nieznanego drukarza do wypełnienia tekstem próbnej książki. Pięć wieków później zaczął być używany przemyśle ',
    },
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
        {analysisContent.map((analysis) => (
          <ColumnContainerBasic key={analysis.title}>
            <ExpandableAnalysisContainer>
              <Accordion allowMultipleExpanded={true} allowZeroExpanded={true}>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton className='accordion__button--analysis'>
                      {analysis.title}
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel className='accordion__panel--analysis'>
                    <AnalysisElementWrapper>
                      <AnalysisElement>
                        <ElementTitle>{analysis.title} count</ElementTitle>
                        <ElementText>{analysis.count}</ElementText>
                      </AnalysisElement>
                      <AnalysisElement>
                        <ElementTitle>Main {analysis.title}</ElementTitle>
                        <ElementText>{analysis.main}</ElementText>
                      </AnalysisElement>
                      <AnalysisElement>
                        <ElementTitle>{analysis.title}</ElementTitle>
                        <ElementText>{analysis.all}</ElementText>
                      </AnalysisElement>
                    </AnalysisElementWrapper>
                  </AccordionItemPanel>
                </AccordionItem>
              </Accordion>
            </ExpandableAnalysisContainer>
            <ExpandableAnalysisContainer>
              <MessageAnalysisWrapper>
                <MessageAnalysisElementWrap>
                  <StatusElement>
                    <StatusBar />
                    <StatusText style={{ fontWeight: 'bold' }}>
                      Status
                    </StatusText>
                  </StatusElement>
                  <MessageElement>
                    <MessageText style={{ fontWeight: 'bold' }}>
                      Message
                    </MessageText>
                  </MessageElement>
                </MessageAnalysisElementWrap>
                <MessageAnalysisElementWrap>
                  <StatusElement>
                    <StatusBar style={{ borderColor: '#72BC39' }} />
                    <StatusText style={{ color: 'rgba(104,104,104,.8)' }}>
                      Valid
                    </StatusText>
                  </StatusElement>
                  <MessageElement>
                    <MessageText style={{ color: 'rgba(104,104,104,.8)' }}>
                      {analysis.message}
                    </MessageText>
                  </MessageElement>
                </MessageAnalysisElementWrap>
              </MessageAnalysisWrapper>
            </ExpandableAnalysisContainer>
          </ColumnContainerBasic>
        ))}
      </SeoPageContainer>
    </>
  );
};

export default SeoPage;
