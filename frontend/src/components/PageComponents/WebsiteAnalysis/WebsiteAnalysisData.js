import { useSelector } from 'react-redux';

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

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
import { StyledSpinner } from '../../Common/StyledSpinner';

const WebsiteAnalysisData = () => {
  const { websiteAnalysisData, isError, isLoading, errorMsg } = useSelector(
    (state) => state.websiteAnalysisReducer
  );

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

  if (isError)
    return (
      <span style={{ color: '#EB6969' }}>
        {errorMsg.url ? errorMsg.url[0] : null}
      </span>
    );

  if (websiteAnalysisData?.analysis.length === 0) {
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
  ) : websiteAnalysisData?.analysis ? (
    <>
      <AuditAnalysisContainer>
        <TableLargeContainer>
          <TableIconWrapper>
            <IconUrl />
          </TableIconWrapper>
          <TableTextWrapper>
            <TableTextTitle>Url</TableTextTitle>
            <TableTextContentWrap>
              <TableText>{websiteAnalysisData.analysis.url}</TableText>
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
              <TableText>{websiteAnalysisData.analysis.keyword}</TableText>
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
              <TableText>
                {websiteAnalysisData.analysis.description.main_description}
              </TableText>
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
                  <TableText>
                    {websiteAnalysisData.analysis.url_title.url_title}
                  </TableText>
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
                  <TableText>
                    {websiteAnalysisData.analysis.url_status}
                  </TableText>
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
                      <ElementText>
                        {websiteAnalysisData.analysis.response_time.time}
                      </ElementText>
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
                  <StatusText style={{ fontWeight: 'bold' }}>Status</StatusText>
                </StatusElement>
                <MessageElement>
                  <MessageText style={{ fontWeight: 'bold' }}>
                    Message
                  </MessageText>
                </MessageElement>
              </MessageAnalysisElementWrap>

              {websiteAnalysisData.analysis.ssl.analysis.map((ssl, i) => (
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

              {websiteAnalysisData.analysis.meta_robots.map(
                (meta_robots, i) => (
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
                )
              )}

              {websiteAnalysisData.analysis.response_time.analysis.map(
                (response_time, i) => (
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
                )
              )}
            </MessageAnalysisWrapper>
          </ExpandableAnalysisContainer>
        </ColumnContainerBasic>

        <ColumnContainerBasic>
          <ExpandableAnalysisContainer>
            <Accordion allowMultipleExpanded={true} allowZeroExpanded={true}>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton className='accordion__button--analysis'>
                    Title
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className='accordion__panel--analysis'>
                  <AnalysisElementWrapper>
                    <AnalysisElement>
                      <ElementTitle>Title count</ElementTitle>
                      <ElementText>
                        {websiteAnalysisData.analysis.title.title_count}
                      </ElementText>
                    </AnalysisElement>
                    <AnalysisElement>
                      <ElementTitle>Main title</ElementTitle>
                      <ElementText>
                        {websiteAnalysisData.analysis.title.main_title}
                      </ElementText>
                    </AnalysisElement>
                    <AnalysisElement>
                      <ElementTitle>Titles</ElementTitle>
                      {websiteAnalysisData.analysis.title.titles.map(
                        (title, i) => (
                          <ElementText key={i}>{title}</ElementText>
                        )
                      )}
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
                  <StatusText style={{ fontWeight: 'bold' }}>Status</StatusText>
                </StatusElement>
                <MessageElement>
                  <MessageText style={{ fontWeight: 'bold' }}>
                    Message
                  </MessageText>
                </MessageElement>
              </MessageAnalysisElementWrap>

              {websiteAnalysisData.analysis.title.analysis.map((title, i) => (
                <MessageAnalysisElementWrap key={i}>
                  <StatusElement>
                    <StatusBar
                      style={{ borderColor: `${statusColor(title.status)}` }}
                    />
                    <StatusText style={{ color: 'rgba(104,104,104,.8)' }}>
                      {title.status}
                    </StatusText>
                  </StatusElement>
                  <MessageElement>
                    <MessageText style={{ color: 'rgba(104,104,104,.8)' }}>
                      {title.message}
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
                    Description
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className='accordion__panel--analysis'>
                  <AnalysisElementWrapper>
                    <AnalysisElement>
                      <ElementTitle>Description count</ElementTitle>
                      <ElementText>
                        {
                          websiteAnalysisData.analysis.description
                            .descriptions_count
                        }
                      </ElementText>
                    </AnalysisElement>
                    <AnalysisElement>
                      <ElementTitle>Main description</ElementTitle>
                      <ElementText>
                        {
                          websiteAnalysisData.analysis.description
                            .main_description
                        }
                      </ElementText>
                    </AnalysisElement>
                    <AnalysisElement>
                      <ElementTitle>Descriptions</ElementTitle>
                      {websiteAnalysisData.analysis.description.descriptions.map(
                        (description, i) => (
                          <ElementText key={i}>{description}</ElementText>
                        )
                      )}
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
                  <StatusText style={{ fontWeight: 'bold' }}>Status</StatusText>
                </StatusElement>
                <MessageElement>
                  <MessageText style={{ fontWeight: 'bold' }}>
                    Message
                  </MessageText>
                </MessageElement>
              </MessageAnalysisElementWrap>

              {websiteAnalysisData.analysis.description.analysis.map(
                (description, i) => (
                  <MessageAnalysisElementWrap key={i}>
                    <StatusElement>
                      <StatusBar
                        style={{
                          borderColor: `${statusColor(description.status)}`,
                        }}
                      />
                      <StatusText style={{ color: 'rgba(104,104,104,.8)' }}>
                        {description.status}
                      </StatusText>
                    </StatusElement>
                    <MessageElement>
                      <MessageText style={{ color: 'rgba(104,104,104,.8)' }}>
                        {description.message}
                      </MessageText>
                    </MessageElement>
                  </MessageAnalysisElementWrap>
                )
              )}
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
                      <ElementText>
                        {websiteAnalysisData.analysis.h1.h1_count}
                      </ElementText>
                    </AnalysisElement>
                    <AnalysisElement>
                      <ElementTitle>Main h1</ElementTitle>
                      <ElementText>
                        {websiteAnalysisData.analysis.h1.main_h1}
                      </ElementText>
                    </AnalysisElement>
                    <AnalysisElement>
                      <ElementTitle>H1</ElementTitle>
                      {websiteAnalysisData.analysis.h1.h1.map((h1, i) => (
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
                  <StatusText style={{ fontWeight: 'bold' }}>Status</StatusText>
                </StatusElement>
                <MessageElement>
                  <MessageText style={{ fontWeight: 'bold' }}>
                    Message
                  </MessageText>
                </MessageElement>
              </MessageAnalysisElementWrap>

              {websiteAnalysisData.analysis.h1.analysis.map((h1, i) => (
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
                      <ElementText>
                        {websiteAnalysisData.analysis.h2.h2_count}
                      </ElementText>
                    </AnalysisElement>
                    <AnalysisElement>
                      <ElementTitle>H2</ElementTitle>
                      {websiteAnalysisData.analysis.h2.h2.map((h2, i) => (
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
                  <StatusText style={{ fontWeight: 'bold' }}>Status</StatusText>
                </StatusElement>
                <MessageElement>
                  <MessageText style={{ fontWeight: 'bold' }}>
                    Message
                  </MessageText>
                </MessageElement>
              </MessageAnalysisElementWrap>

              {websiteAnalysisData.analysis.h2.analysis.map((h2, i) => (
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
                        {websiteAnalysisData.analysis.other_h.other_h_count}
                      </ElementText>
                    </AnalysisElement>
                    <AnalysisElement>
                      <ElementTitle>H3-H6</ElementTitle>
                      {websiteAnalysisData.analysis.other_h.other_h.map(
                        (other_h, i) => (
                          <ElementText key={i}>{other_h}</ElementText>
                        )
                      )}
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
                  <StatusText style={{ fontWeight: 'bold' }}>Status</StatusText>
                </StatusElement>
                <MessageElement>
                  <MessageText style={{ fontWeight: 'bold' }}>
                    Message
                  </MessageText>
                </MessageElement>
              </MessageAnalysisElementWrap>

              {websiteAnalysisData.analysis.other_h.analysis.map(
                (other_h, i) => (
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
                )
              )}
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
                        {
                          websiteAnalysisData.analysis.external_links
                            .external_links_count
                        }
                      </ElementText>
                    </AnalysisElement>
                    <AnalysisElement>
                      <ElementTitle>External links</ElementTitle>
                      {websiteAnalysisData.analysis.external_links.external_links.map(
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

          {websiteAnalysisData.analysis.external_links.status ? (
            <ExpandableAnalysisContainer style={{ marginBottom: '30px' }}>
              <MessageAnalysisWrapper>
                <MessageAnalysisElementWrap>
                  <StatusElement style={{ width: '20%' }}>
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

                {websiteAnalysisData.analysis.external_links.status.map(
                  (external_links, i) => (
                    <MessageAnalysisElementWrap key={i}>
                      <StatusElement style={{ width: '20%' }}>
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
                  )
                )}
              </MessageAnalysisWrapper>
            </ExpandableAnalysisContainer>
          ) : null}

          <ExpandableAnalysisContainer>
            <MessageAnalysisWrapper>
              <MessageAnalysisElementWrap>
                <StatusElement>
                  <StatusBar />
                  <StatusText style={{ fontWeight: 'bold' }}>Status</StatusText>
                </StatusElement>
                <MessageElement>
                  <MessageText style={{ fontWeight: 'bold' }}>
                    Message
                  </MessageText>
                </MessageElement>
              </MessageAnalysisElementWrap>

              {websiteAnalysisData.analysis.external_links.analysis.map(
                (external_links, i) => (
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
                )
              )}
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
                        {
                          websiteAnalysisData.analysis.internal_links
                            .internal_links_count
                        }
                      </ElementText>
                    </AnalysisElement>
                    <AnalysisElement>
                      <ElementTitle>Internal links</ElementTitle>
                      {websiteAnalysisData.analysis.internal_links.internal_links.map(
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

          {websiteAnalysisData.analysis.internal_links.status ? (
            <ExpandableAnalysisContainer style={{ marginBottom: '30px' }}>
              <MessageAnalysisWrapper>
                <MessageAnalysisElementWrap>
                  <StatusElement style={{ width: '20%' }}>
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

                {websiteAnalysisData.analysis.internal_links.status.map(
                  (internal_links, i) => (
                    <MessageAnalysisElementWrap key={i}>
                      <StatusElement style={{ width: '20%' }}>
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
                  )
                )}
              </MessageAnalysisWrapper>
            </ExpandableAnalysisContainer>
          ) : null}

          <ExpandableAnalysisContainer>
            <MessageAnalysisWrapper>
              <MessageAnalysisElementWrap>
                <StatusElement>
                  <StatusBar />
                  <StatusText style={{ fontWeight: 'bold' }}>Status</StatusText>
                </StatusElement>
                <MessageElement>
                  <MessageText style={{ fontWeight: 'bold' }}>
                    Message
                  </MessageText>
                </MessageElement>
              </MessageAnalysisElementWrap>

              {websiteAnalysisData.analysis.internal_links.analysis.map(
                (internal_links, i) => (
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
                )
              )}
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
                        {websiteAnalysisData.analysis.images.images_counts}
                      </ElementText>
                    </AnalysisElement>
                    <AnalysisElement>
                      <ElementTitle>Images</ElementTitle>
                      {websiteAnalysisData.analysis.images.images.map(
                        (images, i) => (
                          <ElementText key={i}>{images}</ElementText>
                        )
                      )}
                    </AnalysisElement>
                  </AnalysisElementWrapper>
                </AccordionItemPanel>
              </AccordionItem>
            </Accordion>
          </ExpandableAnalysisContainer>
          <ExpandableAnalysisContainer>
            <MessageAnalysisWrapper>
              <MessageAnalysisElementWrap>
                <StatusElement style={{ width: '20%' }}>
                  <StatusBar />
                  <StatusText style={{ fontWeight: 'bold' }}>Status</StatusText>
                </StatusElement>
                <MessageElement style={{ width: '20%' }}>
                  <MessageText style={{ fontWeight: 'bold' }}>
                    Filename
                  </MessageText>
                </MessageElement>
                <MessageElement style={{ width: '30%' }}>
                  <MessageText style={{ fontWeight: 'bold' }}>Url</MessageText>
                </MessageElement>
                <MessageElement style={{ width: '30%' }}>
                  <MessageText style={{ fontWeight: 'bold' }}>
                    Message
                  </MessageText>
                </MessageElement>
              </MessageAnalysisElementWrap>

              {websiteAnalysisData.analysis.images.analysis.map((image, i) => (
                <MessageAnalysisElementWrap key={i}>
                  <StatusElement style={{ width: '20%' }}>
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
    </>
  ) : null;
};

export default WebsiteAnalysisData;
