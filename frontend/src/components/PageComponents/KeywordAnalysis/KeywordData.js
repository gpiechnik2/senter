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
  const { auditCheckData, isError, isLoading, errorMsg } = useSelector(
    (state) => state.auditCheckReducer
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [analysisPerPage] = useState(1);

  const indexOfLastAnalysis = currentPage * analysisPerPage;
  const indexOfFirstAnalysis = indexOfLastAnalysis - analysisPerPage;
  const currentAnalysis = auditCheckData?.analysis.length
    ? auditCheckData.analysis.slice(indexOfFirstAnalysis, indexOfLastAnalysis)
    : null;

  const handlePageChange = (current) => {
    setCurrentPage(current);
  };

  useEffect(() => {
    setCurrentPage(1);
  }, []);

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
  ) : auditCheckData?.analysis.length ? (
    <>
      {currentAnalysis.map((analysis, i) => (
        <AuditAnalysisContainer>
          <TableLargeContainer>
            <TableIconWrapper>
              <IconUrl />
            </TableIconWrapper>
            <TableTextWrapper>
              <TableTextTitle>Url</TableTextTitle>
              <TableTextContentWrap>
                <TableText>{analysis.url}</TableText>
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
                <TableText>{analysis.keyword}</TableText>
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
                <TableText>{analysis.description.main_description}</TableText>
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
                <TableText>{analysis.description.main_description}</TableText>
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
                    <TableText>{analysis.url_title.url_title}</TableText>
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
                    <TableText>{analysis.url_status}</TableText>
                  </TableTextContentWrap>
                </TableTextWrapper>
              </SmallTableWrapper>
            </TableSmallContainer>
          </ColumnContainerBasic>

          <ColumnContainerBasic>
            <ExpandableAnalysisContainer>
              <Accordion allowMultipleExpanded={true} allowZeroExpanded={true}>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton className='accordion__button--analysis'>
                      H2
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel className='accordion__panel--analysis'>
                    <AnalysisElementWrapper>
                      <AnalysisElement>
                        <ElementTitle>H2 count</ElementTitle>
                        <ElementText>{keywordData.keyword}</ElementText>
                      </AnalysisElement>
                      <AnalysisElement>
                        <ElementTitle>H2 </ElementTitle>
                        <ElementText>{keywordData.language}</ElementText>
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
                        <ElementText>{keywordData.keyword}</ElementText>
                      </AnalysisElement>
                      <AnalysisElement>
                        <ElementTitle>H3-H6 </ElementTitle>
                        <ElementText>{keywordData.language}</ElementText>
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
                        <ElementText>{keywordData.keyword}</ElementText>
                      </AnalysisElement>
                      <AnalysisElement>
                        <ElementTitle>External links</ElementTitle>
                        <ElementText>{keywordData.language}</ElementText>
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
                        <ElementText>{keywordData.keyword}</ElementText>
                      </AnalysisElement>
                      <AnalysisElement>
                        <ElementTitle>Internal links</ElementTitle>
                        <ElementText>{keywordData.language}</ElementText>
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
          total={auditCheckData.analysis.length}
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
