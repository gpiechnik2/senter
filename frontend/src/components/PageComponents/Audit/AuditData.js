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

const AuditData = () => {
  const { auditCheckData, isError, isLoading, errorMsg } = useSelector(
    (state) => state.auditCheckReducer
  );
  const { auditToCheck, isChecking } = useSelector(
    (state) => state.auditsReducer
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [analysisPerPage] = useState(1);

  const dataToDisplay = isChecking
    ? auditToCheck?.audit
    : auditCheckData?.analysis;

  const indexOfLastAnalysis = currentPage * analysisPerPage;
  const indexOfFirstAnalysis = indexOfLastAnalysis - analysisPerPage;
  const currentAnalysis = dataToDisplay?.length
    ? dataToDisplay.slice(indexOfFirstAnalysis, indexOfLastAnalysis)
    : null;

  const handlePageChange = (current) => {
    setCurrentPage(current);
  };

  const statusColor = (status) => {
    switch (status) {
      case 'Valid':
        return '#72BC39';
      case 'Invalid':
        return '#D35454';
      case 'Undefined':
        return '#D3C954';
      default:
        return '#72BC39';
    }
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [isLoading]);

  if (isError)
    return (
      <span style={{ color: '#EB6969' }}>
        {errorMsg.url ? errorMsg.url[0] : null}
      </span>
    );

  if (dataToDisplay?.length === 0) {
    return (
      <span style={{ color: '#EB6969' }}>
        Something went wrong, try again later.
      </span>
    );
  }

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
  ) : dataToDisplay?.length ? (
    <>
      {currentAnalysis.map((analysis, i) => (
        <AuditAnalysisContainer key={i}>
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
                  <TableTextTitle>Url status</TableTextTitle>
                  <TableTextContentWrap>
                    <TableText>{analysis.url_status}</TableText>
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
                      Basic info
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel className='accordion__panel--analysis'>
                    <AnalysisElementWrapper>
                      <AnalysisElement>
                        <ElementTitle>Response time</ElementTitle>
                        <ElementText>{analysis.response_time.time}</ElementText>
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

                {analysis.ssl.analysis.map((ssl, i) => (
                  <MessageAnalysisElementWrap key={i}>
                    <StatusElement>
                      <StatusBar
                        style={{ borderColor: `${statusColor(ssl.status)}` }}
                      />
                      <StatusText style={{ color: 'rgba(104,104,104,.8)' }}>
                        {ssl.status}
                      </StatusText>
                    </StatusElement>
                    <MessageElement>
                      <MessageText style={{ color: 'rgba(104,104,104,.8)' }}>
                        {ssl.message}
                      </MessageText>
                    </MessageElement>
                  </MessageAnalysisElementWrap>
                ))}

                {analysis.meta_robots.map((meta_robots, i) => (
                  <MessageAnalysisElementWrap key={i}>
                    <StatusElement>
                      <StatusBar
                        style={{
                          borderColor: `${statusColor(meta_robots.status)}`,
                        }}
                      />
                      <StatusText style={{ color: 'rgba(104,104,104,.8)' }}>
                        {meta_robots.status}
                      </StatusText>
                    </StatusElement>
                    <MessageElement>
                      <MessageText style={{ color: 'rgba(104,104,104,.8)' }}>
                        {meta_robots.message}
                      </MessageText>
                    </MessageElement>
                  </MessageAnalysisElementWrap>
                ))}

                {analysis.response_time.analysis.map((response_time, i) => (
                  <MessageAnalysisElementWrap key={i}>
                    <StatusElement>
                      <StatusBar
                        style={{
                          borderColor: `${statusColor(response_time.status)}`,
                        }}
                      />
                      <StatusText style={{ color: 'rgba(104,104,104,.8)' }}>
                        {response_time.status}
                      </StatusText>
                    </StatusElement>
                    <MessageElement>
                      <MessageText style={{ color: 'rgba(104,104,104,.8)' }}>
                        {response_time.message}
                      </MessageText>
                    </MessageElement>
                  </MessageAnalysisElementWrap>
                ))}
              </MessageAnalysisWrapper>
            </ExpandableAnalysisContainer>
          </ColumnContainerBasic>

          <ColumnContainerBasic>
            <ExpandableAnalysisContainer>
              <Accordion allowMultipleExpanded={true} allowZeroExpanded={true}>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton className='accordion__button--analysis'>
                      H1
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel className='accordion__panel--analysis'>
                    <AnalysisElementWrapper>
                      <AnalysisElement>
                        <ElementTitle>H1 count</ElementTitle>
                        <ElementText>{analysis.h1.h1_count}</ElementText>
                      </AnalysisElement>
                      <AnalysisElement>
                        <ElementTitle>Main h1</ElementTitle>
                        <ElementText>{analysis.h1.main_h1}</ElementText>
                      </AnalysisElement>
                      <AnalysisElement>
                        <ElementTitle>H1</ElementTitle>
                        {analysis.h1.h1.map((h1, i) => (
                          <ElementText key={i}>{h1}</ElementText>
                        ))}
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

                {analysis.h1.analysis.map((h1, i) => (
                  <MessageAnalysisElementWrap key={i}>
                    <StatusElement>
                      <StatusBar
                        style={{ borderColor: `${statusColor(h1.status)}` }}
                      />
                      <StatusText style={{ color: 'rgba(104,104,104,.8)' }}>
                        {h1.status}
                      </StatusText>
                    </StatusElement>
                    <MessageElement>
                      <MessageText style={{ color: 'rgba(104,104,104,.8)' }}>
                        {h1.message}
                      </MessageText>
                    </MessageElement>
                  </MessageAnalysisElementWrap>
                ))}
              </MessageAnalysisWrapper>
            </ExpandableAnalysisContainer>
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
                        <ElementText>{analysis.h2.h2_count}</ElementText>
                      </AnalysisElement>
                      <AnalysisElement>
                        <ElementTitle>H2</ElementTitle>
                        {analysis.h2.h2.map((h2, i) => (
                          <ElementText key={i}>{h2}</ElementText>
                        ))}
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

                {analysis.h2.analysis.map((h2, i) => (
                  <MessageAnalysisElementWrap key={i}>
                    <StatusElement>
                      <StatusBar
                        style={{ borderColor: `${statusColor(h2.status)}` }}
                      />
                      <StatusText style={{ color: 'rgba(104,104,104,.8)' }}>
                        {h2.status}
                      </StatusText>
                    </StatusElement>
                    <MessageElement>
                      <MessageText style={{ color: 'rgba(104,104,104,.8)' }}>
                        {h2.message}
                      </MessageText>
                    </MessageElement>
                  </MessageAnalysisElementWrap>
                ))}
              </MessageAnalysisWrapper>
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
                          {analysis.other_h.other_h_count}
                        </ElementText>
                      </AnalysisElement>
                      <AnalysisElement>
                        <ElementTitle>H3-H6</ElementTitle>
                        {analysis.other_h.other_h.map((other_h, i) => (
                          <ElementText key={i}>{other_h}</ElementText>
                        ))}
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

                {analysis.other_h.analysis.map((other_h, i) => (
                  <MessageAnalysisElementWrap key={i}>
                    <StatusElement>
                      <StatusBar
                        style={{
                          borderColor: `${statusColor(other_h.status)}`,
                        }}
                      />
                      <StatusText style={{ color: 'rgba(104,104,104,.8)' }}>
                        {other_h.status}
                      </StatusText>
                    </StatusElement>
                    <MessageElement>
                      <MessageText style={{ color: 'rgba(104,104,104,.8)' }}>
                        {other_h.message}
                      </MessageText>
                    </MessageElement>
                  </MessageAnalysisElementWrap>
                ))}
              </MessageAnalysisWrapper>
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
                          {analysis.external_links.external_links_count}
                        </ElementText>
                      </AnalysisElement>
                      <AnalysisElement>
                        <ElementTitle>External links</ElementTitle>
                        {analysis.external_links.external_links.map(
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

            {analysis.external_links.status ? (
              <ExpandableAnalysisContainer>
                <MessageAnalysisWrapper>
                  <MessageAnalysisElementWrap>
                    <StatusElement style={{ width: '15%' }}>
                      <StatusBar />
                      <StatusText style={{ fontWeight: 'bold' }}>
                        Status
                      </StatusText>
                    </StatusElement>
                    <MessageElement style={{ width: '20%' }}>
                      <MessageText style={{ fontWeight: 'bold' }}>
                        Url status
                      </MessageText>
                    </MessageElement>
                    <MessageElement style={{ width: '30%' }}>
                      <MessageText style={{ fontWeight: 'bold' }}>
                        Url
                      </MessageText>
                    </MessageElement>
                    <MessageElement style={{ width: '30%' }}>
                      <MessageText style={{ fontWeight: 'bold' }}>
                        Message
                      </MessageText>
                    </MessageElement>
                  </MessageAnalysisElementWrap>

                  {analysis.external_links.status.map((external_links, i) => (
                    <MessageAnalysisElementWrap key={i}>
                      <StatusElement style={{ width: '15%' }}>
                        <StatusBar
                          style={{
                            borderColor: `${statusColor(
                              external_links.status
                            )}`,
                          }}
                        />
                        <StatusText style={{ color: 'rgba(104,104,104,.8)' }}>
                          {external_links.status}
                        </StatusText>
                      </StatusElement>
                      <MessageElement style={{ width: '20%' }}>
                        <MessageText
                          title={external_links.url_status}
                          style={{ color: 'rgba(104,104,104,.8)' }}>
                          {external_links.url_status}
                        </MessageText>
                      </MessageElement>
                      <MessageElement style={{ width: '30%' }}>
                        <MessageText
                          title={external_links.url}
                          style={{ color: 'rgba(104,104,104,.8)' }}>
                          {external_links.url}
                        </MessageText>
                      </MessageElement>
                      <MessageElement style={{ width: '30%' }}>
                        <MessageText style={{ color: 'rgba(104,104,104,.8)' }}>
                          {external_links.message}
                        </MessageText>
                      </MessageElement>
                    </MessageAnalysisElementWrap>
                  ))}
                </MessageAnalysisWrapper>
              </ExpandableAnalysisContainer>
            ) : null}

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

                {analysis.external_links.analysis.map((external_links, i) => (
                  <MessageAnalysisElementWrap key={i}>
                    <StatusElement>
                      <StatusBar
                        style={{
                          borderColor: `${statusColor(external_links.status)}`,
                        }}
                      />
                      <StatusText style={{ color: 'rgba(104,104,104,.8)' }}>
                        {external_links.status}
                      </StatusText>
                    </StatusElement>
                    <MessageElement>
                      <MessageText style={{ color: 'rgba(104,104,104,.8)' }}>
                        {external_links.message}
                      </MessageText>
                    </MessageElement>
                  </MessageAnalysisElementWrap>
                ))}
              </MessageAnalysisWrapper>
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
                          {analysis.internal_links.internal_links_count}
                        </ElementText>
                      </AnalysisElement>
                      <AnalysisElement>
                        <ElementTitle>Internal links</ElementTitle>
                        {analysis.internal_links.internal_links.map(
                          (internal_links, i) => (
                            <ElementText key={i}>{internal_links}</ElementText>
                          )
                        )}
                      </AnalysisElement>
                    </AnalysisElementWrapper>
                  </AccordionItemPanel>
                </AccordionItem>
              </Accordion>
            </ExpandableAnalysisContainer>

            {analysis.internal_links.status ? (
              <ExpandableAnalysisContainer>
                <MessageAnalysisWrapper>
                  <MessageAnalysisElementWrap>
                    <StatusElement style={{ width: '15%' }}>
                      <StatusBar />
                      <StatusText style={{ fontWeight: 'bold' }}>
                        Status
                      </StatusText>
                    </StatusElement>
                    <MessageElement style={{ width: '20%' }}>
                      <MessageText style={{ fontWeight: 'bold' }}>
                        Url status
                      </MessageText>
                    </MessageElement>
                    <MessageElement style={{ width: '30%' }}>
                      <MessageText style={{ fontWeight: 'bold' }}>
                        Url
                      </MessageText>
                    </MessageElement>
                    <MessageElement style={{ width: '30%' }}>
                      <MessageText style={{ fontWeight: 'bold' }}>
                        Message
                      </MessageText>
                    </MessageElement>
                  </MessageAnalysisElementWrap>

                  {analysis.internal_links.status.map((internal_links, i) => (
                    <MessageAnalysisElementWrap key={i}>
                      <StatusElement style={{ width: '15%' }}>
                        <StatusBar
                          style={{
                            borderColor: `${statusColor(
                              internal_links.status
                            )}`,
                          }}
                        />
                        <StatusText style={{ color: 'rgba(104,104,104,.8)' }}>
                          {internal_links.status}
                        </StatusText>
                      </StatusElement>
                      <MessageElement style={{ width: '20%' }}>
                        <MessageText
                          title={internal_links.url_status}
                          style={{ color: 'rgba(104,104,104,.8)' }}>
                          {internal_links.url_status}
                        </MessageText>
                      </MessageElement>
                      <MessageElement style={{ width: '30%' }}>
                        <MessageText
                          title={internal_links.url}
                          style={{ color: 'rgba(104,104,104,.8)' }}>
                          {internal_links.url}
                        </MessageText>
                      </MessageElement>
                      <MessageElement style={{ width: '30%' }}>
                        <MessageText style={{ color: 'rgba(104,104,104,.8)' }}>
                          {internal_links.message}
                        </MessageText>
                      </MessageElement>
                    </MessageAnalysisElementWrap>
                  ))}
                </MessageAnalysisWrapper>
              </ExpandableAnalysisContainer>
            ) : null}

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

                {analysis.internal_links.analysis.map((internal_links, i) => (
                  <MessageAnalysisElementWrap key={i}>
                    <StatusElement>
                      <StatusBar
                        style={{
                          borderColor: `${statusColor(internal_links.status)}`,
                        }}
                      />
                      <StatusText style={{ color: 'rgba(104,104,104,.8)' }}>
                        {internal_links.status}
                      </StatusText>
                    </StatusElement>
                    <MessageElement>
                      <MessageText style={{ color: 'rgba(104,104,104,.8)' }}>
                        {internal_links.message}
                      </MessageText>
                    </MessageElement>
                  </MessageAnalysisElementWrap>
                ))}
              </MessageAnalysisWrapper>
            </ExpandableAnalysisContainer>
          </ColumnContainerBasic>

          <ColumnContainerBasic>
            <ExpandableAnalysisContainer>
              <Accordion allowMultipleExpanded={true} allowZeroExpanded={true}>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton className='accordion__button--analysis'>
                      Images
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel className='accordion__panel--analysis'>
                    <AnalysisElementWrapper>
                      <AnalysisElement>
                        <ElementTitle>Images count</ElementTitle>
                        <ElementText>
                          {analysis.images.images_counts}
                        </ElementText>
                      </AnalysisElement>
                      <AnalysisElement>
                        <ElementTitle>Images</ElementTitle>
                        {analysis.images.images.map((images, i) => (
                          <ElementText key={i}>{images}</ElementText>
                        ))}
                      </AnalysisElement>
                    </AnalysisElementWrapper>
                  </AccordionItemPanel>
                </AccordionItem>
              </Accordion>
            </ExpandableAnalysisContainer>
            <ExpandableAnalysisContainer>
              <MessageAnalysisWrapper>
                <MessageAnalysisElementWrap>
                  <StatusElement style={{ width: '15%' }}>
                    <StatusBar />
                    <StatusText style={{ fontWeight: 'bold' }}>
                      Status
                    </StatusText>
                  </StatusElement>
                  <MessageElement style={{ width: '20%' }}>
                    <MessageText style={{ fontWeight: 'bold' }}>
                      Filename
                    </MessageText>
                  </MessageElement>
                  <MessageElement style={{ width: '30%' }}>
                    <MessageText style={{ fontWeight: 'bold' }}>
                      Url
                    </MessageText>
                  </MessageElement>
                  <MessageElement style={{ width: '30%' }}>
                    <MessageText style={{ fontWeight: 'bold' }}>
                      Message
                    </MessageText>
                  </MessageElement>
                </MessageAnalysisElementWrap>

                {analysis.images.analysis.map((image, i) => (
                  <MessageAnalysisElementWrap key={i}>
                    <StatusElement style={{ width: '15%' }}>
                      <StatusBar
                        style={{
                          borderColor: `${statusColor(image.status)}`,
                        }}
                      />
                      <StatusText style={{ color: 'rgba(104,104,104,.8)' }}>
                        {image.status}
                      </StatusText>
                    </StatusElement>
                    <MessageElement style={{ width: '20%' }}>
                      <MessageText
                        title={image.file_name}
                        style={{ color: 'rgba(104,104,104,.8)' }}>
                        {image.file_name}
                      </MessageText>
                    </MessageElement>
                    <MessageElement style={{ width: '30%' }}>
                      <MessageText
                        title={image.url}
                        style={{ color: 'rgba(104,104,104,.8)' }}>
                        {image.url}
                      </MessageText>
                    </MessageElement>
                    <MessageElement style={{ width: '30%' }}>
                      <MessageText style={{ color: 'rgba(104,104,104,.8)' }}>
                        {image.message}
                      </MessageText>
                    </MessageElement>
                  </MessageAnalysisElementWrap>
                ))}
              </MessageAnalysisWrapper>
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
          total={dataToDisplay.length}
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

export default AuditData;
