import { useState } from 'react';
import Select from 'react-dropdown-select';

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

import { KeywordPlannerContainer } from './KeywordPlannerElements';

import {
  FormContainer,
  FormTitle,
  FormText,
  FormWrap,
  FormInput,
  FormBtnWrap,
  FormSelectContainer,
} from '../../Common/FormElements';

import { ButtonBasic } from '../../Common/ButtonElements';

import { ColumnContainerBasic } from '../../Common/ContainerElements';

import {
  ExpandableAnalysisContainer,
  AnalysisElementWrapper,
  AnalysisElement,
  ElementTitle,
  ElementText,
} from '../../Common/AnalysisElements';

import { options, analysisContent } from './Data';

const initialState = {
  keyword: '',
  language: '',
};

const KeywordPlanner = () => {
  const [formData, setFormData] = useState(initialState);

  const handleSelect = (selectedOption) => {
    setFormData({
      ...formData,
      language: selectedOption[0].value,
    });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <KeywordPlannerContainer>
        <FormContainer>
          <FormTitle>Keyword planner</FormTitle>
          <FormText>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy.
          </FormText>
          <FormWrap onSubmit={onSubmit}>
            <FormInput
              required
              type='text'
              name='keyword'
              placeholder='Keyword'
              aria-describedby='Enter keyword'
              onChange={handleChange}
            />
            <FormSelectContainer>
              <Select
                name='language'
                onChange={handleSelect}
                placeholder='Language'
                required
                searchable={false}
                options={options}
              />
            </FormSelectContainer>
            <FormBtnWrap>
              <ButtonBasic type='submit'>Get keyword</ButtonBasic>
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
                        <ElementTitle>
                          {analysis.label1 ? analysis.label1 : null}{' '}
                        </ElementTitle>
                        <ElementText>{analysis.text1}</ElementText>
                      </AnalysisElement>
                      <AnalysisElement>
                        <ElementTitle>{analysis.label2} </ElementTitle>
                        <ElementText>{analysis.text2}</ElementText>
                      </AnalysisElement>
                      <AnalysisElement>
                        <ElementTitle>{analysis.label3} </ElementTitle>
                        <ElementText>{analysis.text3}</ElementText>
                      </AnalysisElement>
                      <AnalysisElement>
                        <ElementTitle>{analysis.label4} </ElementTitle>
                        <ElementText>{analysis.text4}</ElementText>
                      </AnalysisElement>
                    </AnalysisElementWrapper>
                  </AccordionItemPanel>
                </AccordionItem>
              </Accordion>
            </ExpandableAnalysisContainer>
          </ColumnContainerBasic>
        ))}
      </KeywordPlannerContainer>
    </>
  );
};

export default KeywordPlanner;
