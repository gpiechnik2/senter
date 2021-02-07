import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import Pagination from 'rc-pagination';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import localeInfo from '../../../../node_modules/rc-pagination/lib/locale/en_US';

import {
  AuditAnalysisContainer,
  ExpandableAnalysisContainer,
  AnalysisElementWrapper,
  AnalysisElement,
  ElementTitle,
  ElementText,
  TableLargeContainer,
  TableIconWrapper,
  TableTextWrapper,
  TableTextTitle,
  TableTextContentWrap,
  TableText,
  TableSmallContainer,
  SmallTableWrapper,
  IconUrl,
  IconDescription,
  IconUrlTitle,
  IconKeyword,
  IconUrlStatus,
} from '../../Common/AnalysisElements';
import { ColumnContainerBasic } from '../../Common/ContainerElements';
import { PreviousIcon, NextIcon } from '../../Common/ButtonElements';
import { PaginationContainer } from '../../Common/ContainerElements';
import { StyledSpinner } from '../../Common/StyledSpinner';

const KeywordData = () => {
  const { keywordAnalysisData, isError, isLoading } = useSelector(
    (state) => state.keywordAnalysisReducer
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [analysisPerPage] = useState(1);

  const indexOfLastAnalysis = currentPage * analysisPerPage;
  const indexOfFirstAnalysis = indexOfLastAnalysis - analysisPerPage;
  const currentAnalysis = keywordAnalysisData?.keyword_analysis.results.slice(
    indexOfFirstAnalysis,
    indexOfLastAnalysis
  );

  const handlePageChange = (current) => {
    setCurrentPage(current);
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [isLoading]);

  if (isError)
    return (
      <span style={{ color: '#EB6969' }}>
        Something went wrong, try again later.
      </span>
    );

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
  ) : keywordAnalysisData?.keyword_analysis.results ? (
    <>
      {currentAnalysis.map((keyword_analysis, i) => (
        <AuditAnalysisContainer key={i}>
          <TableLargeContainer>
            <TableIconWrapper>
              <IconUrl />
            </TableIconWrapper>
            <TableTextWrapper>
              <TableTextTitle>Url</TableTextTitle>
              <TableTextContentWrap>
                <TableText>{keyword_analysis.url}</TableText>
              </TableTextContentWrap>
            </TableTextWrapper>
          </TableLargeContainer>

          <TableLargeContainer>
            <TableIconWrapper>
              <IconKeyword />
            </TableIconWrapper>
            <TableTextWrapper>
              <TableTextTitle>Keyword</TableTextTitle>
              <TableTextContentWrap>
                <TableText>{keyword_analysis.keywords}</TableText>
              </TableTextContentWrap>
            </TableTextWrapper>
          </TableLargeContainer>

          <TableLargeContainer>
            <TableIconWrapper>
              <IconDescription />
            </TableIconWrapper>
            <TableTextWrapper>
              <TableTextTitle>Title</TableTextTitle>
              <TableTextContentWrap>
                {keyword_analysis.titles.map((title, i) => (
                  <TableText key={i}>{title}</TableText>
                ))}
              </TableTextContentWrap>
            </TableTextWrapper>
          </TableLargeContainer>

          <TableLargeContainer>
            <TableIconWrapper>
              <IconDescription />
            </TableIconWrapper>
            <TableTextWrapper>
              <TableTextTitle>Description</TableTextTitle>
              <TableTextContentWrap>
                {keyword_analysis.descriptions.map((description, i) => (
                  <TableText key={i}>{description}</TableText>
                ))}
              </TableTextContentWrap>
            </TableTextWrapper>
          </TableLargeContainer>

          <ColumnContainerBasic>
            <TableSmallContainer>
              <SmallTableWrapper>
                <TableIconWrapper style={{ width: '13%' }}>
                  <IconUrlTitle />
                </TableIconWrapper>
                <TableTextWrapper>
                  <TableTextTitle>Url title</TableTextTitle>
                  <TableTextContentWrap>
                    <TableText>{keyword_analysis.url_title}</TableText>
                  </TableTextContentWrap>
                </TableTextWrapper>
              </SmallTableWrapper>
              <SmallTableWrapper>
                <TableIconWrapper style={{ width: '13%' }}>
                  <IconUrlStatus />
                </TableIconWrapper>
                <TableTextWrapper>
                  <TableTextTitle>H1</TableTextTitle>
                  <TableTextContentWrap>
                    {keyword_analysis.h1.map((h1, i) => (
                      <TableText key={i}>{h1}</TableText>
                    ))}
                  </TableTextContentWrap>
                </TableTextWrapper>
              </SmallTableWrapper>
            </TableSmallContainer>
          </ColumnContainerBasic>

          <ColumnContainerBasic>
            <ExpandableAnalysisContainer>
              <Accordion
                allowMultipleExpanded={true}
                allowZeroExpanded={true}
                preExpanded={['1']}>
                <AccordionItem uuid='1'>
                  <AccordionItemHeading>
                    <AccordionItemButton className='accordion__button--analysis'>
                      H2
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel className='accordion__panel--analysis'>
                    <AnalysisElementWrapper>
                      <AnalysisElement>
                        <ElementTitle>H2 count</ElementTitle>
                        <ElementText>
                          {keyword_analysis.h2.h2_count}
                        </ElementText>
                      </AnalysisElement>
                      <AnalysisElement>
                        <ElementTitle>H2</ElementTitle>
                        {keyword_analysis.h2.h2.map((h2, i) => (
                          <ElementText key={i}>{h2}</ElementText>
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
                      H3-H6
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel className='accordion__panel--analysis'>
                    <AnalysisElementWrapper>
                      <AnalysisElement>
                        <ElementTitle>H3-H6 count</ElementTitle>
                        <ElementText>
                          {keyword_analysis.other_h.other_h_count}
                        </ElementText>
                      </AnalysisElement>
                      <AnalysisElement>
                        <ElementTitle>H3-H6 </ElementTitle>
                        {keyword_analysis.other_h.other_h.map((other_h, i) => (
                          <ElementText key={i}>{other_h}</ElementText>
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
                      External links
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel className='accordion__panel--analysis'>
                    <AnalysisElementWrapper>
                      <AnalysisElement>
                        <ElementTitle>External links count</ElementTitle>
                        <ElementText>
                          {keyword_analysis.external_links.external_links_count}
                        </ElementText>
                      </AnalysisElement>
                      <AnalysisElement>
                        <ElementTitle>External links</ElementTitle>
                        {keyword_analysis.external_links.external_links.map(
                          (external_link, i) => (
                            <ElementText key={i}>{external_link}</ElementText>
                          )
                        )}
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
                      Internal links
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel className='accordion__panel--analysis'>
                    <AnalysisElementWrapper>
                      <AnalysisElement>
                        <ElementTitle>Internal links count</ElementTitle>
                        <ElementText>
                          {keyword_analysis.internal_links.internal_links_count}
                        </ElementText>
                      </AnalysisElement>
                      <AnalysisElement>
                        <ElementTitle>Internal links</ElementTitle>
                        {keyword_analysis.internal_links.internal_links.map(
                          (internal_link, i) => (
                            <ElementText key={i}>{internal_link}</ElementText>
                          )
                        )}
                      </AnalysisElement>
                    </AnalysisElementWrapper>
                  </AccordionItemPanel>
                </AccordionItem>
              </Accordion>
            </ExpandableAnalysisContainer>
          </ColumnContainerBasic>
        </AuditAnalysisContainer>
      ))}
      <PaginationContainer>
        <Pagination
          showQuickJumper
          showSizeChanger
          defaultPageSize={1}
          defaultCurrent={1}
          current={currentPage}
          total={keywordAnalysisData.keyword_analysis.results.length}
          onChange={handlePageChange}
          locale={localeInfo}
          prevIcon={<PreviousIcon />}
          nextIcon={<NextIcon />}
          jumpPrevIcon='...'
          jumpNextIcon='...'
        />
      </PaginationContainer>
    </>
  ) : null;
};

export default KeywordData;
