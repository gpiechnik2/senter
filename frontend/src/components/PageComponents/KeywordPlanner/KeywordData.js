import { useSelector } from 'react-redux';

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

import { ColumnContainerBasic } from '../../Common/ContainerElements';
import {
  ExpandableAnalysisContainer,
  AnalysisElementWrapper,
  AnalysisElement,
  ElementTitle,
  ElementText,
} from '../../Common/AnalysisElements';
import { StyledSpinner } from '../../Common/StyledSpinner';

const KeywordData = () => {
  const { keywordData, isError, isLoading } = useSelector(
    (state) => state.keywordReducer
  );
  const { keywordToCheck, isChecking } = useSelector(
    (state) => state.keywordsReducer
  );

  const dataToDisplay = isChecking ? keywordToCheck : keywordData;

  if (isError) return <span>Sorry, something went wrong</span>;

  return isLoading ? (
    <StyledSpinner viewBox='0 0 50 50'>
      <circle
        className='path'
        cx='25'
        cy='25'
        r='20'
        fill='none'
        strokeWidth='4'
      />
    </StyledSpinner>
  ) : dataToDisplay ? (
    <>
      <ColumnContainerBasic>
        <ExpandableAnalysisContainer>
          <Accordion
            allowMultipleExpanded={true}
            allowZeroExpanded={true}
            preExpanded={['1']}>
            <AccordionItem uuid='1'>
              <AccordionItemHeading>
                <AccordionItemButton className='accordion__button--analysis'>
                  Basic Info
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className='accordion__panel--analysis'>
                <AnalysisElementWrapper>
                  <AnalysisElement>
                    <ElementTitle>Keyword</ElementTitle>
                    <ElementText>{dataToDisplay.keyword}</ElementText>
                  </AnalysisElement>
                  <AnalysisElement>
                    <ElementTitle>Language </ElementTitle>
                    <ElementText>{dataToDisplay.language}</ElementText>
                  </AnalysisElement>
                </AnalysisElementWrapper>
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
        </ExpandableAnalysisContainer>
      </ColumnContainerBasic>

      <ColumnContainerBasic>
        <ExpandableAnalysisContainer>
          <Accordion allowMultipleExpanded={true} allowZeroExpanded={true}>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton className='accordion__button--analysis'>
                  Pytrends keywords
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className='accordion__panel--analysis'>
                <AnalysisElementWrapper>
                  {dataToDisplay.pytrendsKeywords.map((pytrend, i) => (
                    <AnalysisElement key={i}>
                      <ElementTitle>{pytrend.title}</ElementTitle>
                      <ElementText>{pytrend.type}</ElementText>
                    </AnalysisElement>
                  ))}
                </AnalysisElementWrapper>
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
        </ExpandableAnalysisContainer>
      </ColumnContainerBasic>

      {dataToDisplay.serpKeywords.length ? (
        <ColumnContainerBasic>
          <ExpandableAnalysisContainer>
            <Accordion allowMultipleExpanded={true} allowZeroExpanded={true}>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton className='accordion__button--analysis'>
                    SERP keywords
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className='accordion__panel--analysis'>
                  <AnalysisElementWrapper>
                    <AnalysisElement>
                      {dataToDisplay.serpKeywords.map((serp, i) => (
                        <ElementText key={i}>{serp}</ElementText>
                      ))}
                    </AnalysisElement>
                  </AnalysisElementWrapper>
                </AccordionItemPanel>
              </AccordionItem>
            </Accordion>
          </ExpandableAnalysisContainer>
        </ColumnContainerBasic>
      ) : null}

      <ColumnContainerBasic>
        <ExpandableAnalysisContainer>
          <Accordion allowMultipleExpanded={true} allowZeroExpanded={true}>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton className='accordion__button--analysis'>
                  Google keywords
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className='accordion__panel--analysis'>
                <AnalysisElementWrapper>
                  <AnalysisElement>
                    {dataToDisplay.googleKeywords.map((keyword, i) => (
                      <ElementText key={i}>{keyword}</ElementText>
                    ))}
                  </AnalysisElement>
                </AnalysisElementWrapper>
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
        </ExpandableAnalysisContainer>
      </ColumnContainerBasic>

      <ColumnContainerBasic>
        <ExpandableAnalysisContainer>
          <Accordion allowMultipleExpanded={true} allowZeroExpanded={true}>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton className='accordion__button--analysis'>
                  Google suggestions questions
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className='accordion__panel--analysis'>
                <AnalysisElementWrapper>
                  {dataToDisplay.googleSuggestionsQuestions.questions.map(
                    ({ question, results }, i) => (
                      <AnalysisElement key={i}>
                        <ElementTitle>{question}</ElementTitle>
                        {results.normal.map((result, i) => (
                          <ElementText key={i}>{result}</ElementText>
                        ))}
                        {results.reversed.map((result, i) => (
                          <ElementText key={i}>{result}</ElementText>
                        ))}
                      </AnalysisElement>
                    )
                  )}
                </AnalysisElementWrapper>
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
        </ExpandableAnalysisContainer>
      </ColumnContainerBasic>

      <ColumnContainerBasic>
        <ExpandableAnalysisContainer>
          <Accordion allowMultipleExpanded={true} allowZeroExpanded={true}>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton className='accordion__button--analysis'>
                  Google suggestions prepositions
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className='accordion__panel--analysis'>
                <AnalysisElementWrapper>
                  {dataToDisplay.googleSuggestionsPrepositions.prepositions.map(
                    ({ preposition, results }, i) => (
                      <AnalysisElement key={i}>
                        <ElementTitle>{preposition}</ElementTitle>
                        {results.normal.map((result, i) => (
                          <ElementText key={i}>{result}</ElementText>
                        ))}
                        {results.reversed.map((result, i) => (
                          <ElementText key={i}>{result}</ElementText>
                        ))}
                      </AnalysisElement>
                    )
                  )}
                </AnalysisElementWrapper>
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
        </ExpandableAnalysisContainer>
      </ColumnContainerBasic>

      <ColumnContainerBasic>
        <ExpandableAnalysisContainer>
          <Accordion allowMultipleExpanded={true} allowZeroExpanded={true}>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton className='accordion__button--analysis'>
                  Google suggestions comparisons
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className='accordion__panel--analysis'>
                <AnalysisElementWrapper>
                  {dataToDisplay.googleSuggestionsComparisons.comparisons.map(
                    ({ comparison, results }, i) => (
                      <AnalysisElement key={i}>
                        <ElementTitle>{comparison}</ElementTitle>
                        {results.normal.map((result, i) => (
                          <ElementText key={i}>{result}</ElementText>
                        ))}
                        {results.reversed.map((result, i) => (
                          <ElementText key={i}>{result}</ElementText>
                        ))}
                      </AnalysisElement>
                    )
                  )}
                </AnalysisElementWrapper>
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
        </ExpandableAnalysisContainer>
      </ColumnContainerBasic>

      <ColumnContainerBasic>
        <ExpandableAnalysisContainer>
          <Accordion allowMultipleExpanded={true} allowZeroExpanded={true}>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton className='accordion__button--analysis'>
                  Google suggestions alphabeticals
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className='accordion__panel--analysis'>
                <AnalysisElementWrapper>
                  {dataToDisplay.googleSuggestionsAlphabeticals.letters.map(
                    ({ letter, results }, i) => (
                      <AnalysisElement key={i}>
                        <ElementTitle>{letter}</ElementTitle>
                        {results.map((result, i) => (
                          <ElementText key={i}>{result}</ElementText>
                        ))}
                      </AnalysisElement>
                    )
                  )}
                </AnalysisElementWrapper>
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
        </ExpandableAnalysisContainer>
      </ColumnContainerBasic>
    </>
  ) : null;
};

export default KeywordData;
