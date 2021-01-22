import Select from 'react-dropdown-select';

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

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
  TableLargeContainer,
  TableIconWrapper,
  TableTextWrapper,
  TableTextTitle,
  TableTextContentWrap,
  TableText,
  TableIcon,
  TableSmallContainer,
  SmallTableWrapper,
} from '../../../Common/AnalysisElements';

import { options1, InfoTables, analysisContent } from './Data';

const SeoPage = () => {
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
                placeholder='Rodzaj strony'
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
        <ColumnContainerBasic>
          {InfoTables.map((table) => (
            <TableLargeContainer key={table.id}>
              <TableIconWrapper>{table.icon}</TableIconWrapper>
              <TableTextWrapper>
                <TableTextTitle>{table.title}</TableTextTitle>
                <TableTextContentWrap>
                  <TableText>{table.text}</TableText>
                  <TableText>{table.text}</TableText>
                </TableTextContentWrap>
              </TableTextWrapper>
            </TableLargeContainer>
          ))}
          <TableSmallContainer>
            <SmallTableWrapper>
              <TableIconWrapper style={{ width: '13%' }}>
                <TableIcon />
              </TableIconWrapper>
              <TableTextWrapper>
                <TableTextTitle>Url title</TableTextTitle>
                <TableTextContentWrap>
                  <TableText>analysis.url_title</TableText>
                </TableTextContentWrap>
              </TableTextWrapper>
            </SmallTableWrapper>
            <SmallTableWrapper>
              <TableIconWrapper style={{ width: '13%' }}>
                <TableIcon />
              </TableIconWrapper>
              <TableTextWrapper>
                <TableTextTitle>Url status</TableTextTitle>
                <TableTextContentWrap>
                  <TableText>analysis.url_status</TableText>
                </TableTextContentWrap>
              </TableTextWrapper>
            </SmallTableWrapper>
          </TableSmallContainer>
        </ColumnContainerBasic>
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
