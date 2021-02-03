import { useState } from 'react';
import { useSelector } from 'react-redux';

import Pagination from 'rc-pagination';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import localeInfo from 'rc-pagination/lib/locale/en_US';

import { NewsPaginationWrap } from './NewsElements';
import {
  ExpandableAnalysisContainer,
  AnalysisElementWrapper,
  AnalysisElement,
  ElementText,
} from '../../Common/AnalysisElements';
import { PreviousIcon, NextIcon } from '../../Common/ButtonElements';
import { StyledSpinner } from '../../Common/StyledSpinner';

// const newsData = [
//   {
//     id: 1,
//     update:
//       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.",
//     publish_date: '2021-05-02',
//   },
//   {
//     id: 2,
//     update:
//       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.",
//     publish_date: '2021-04-02',
//   },
//   {
//     id: 3,
//     update:
//       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.",
//     publish_date: '2021-03-02',
//   },
//   {
//     id: 4,
//     update:
//       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.",
//     publish_date: '2021-02-02',
//   },
//   {
//     id: 5,
//     update:
//       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.",
//     publish_date: '2021-02-02',
//   },
//   {
//     id: 6,
//     update:
//       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.",
//     publish_date: '2021-02-02',
//   },
//   {
//     id: 7,
//     update:
//       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.",
//     publish_date: '2021-02-02',
//   },
// ];

const NewsList = () => {
  const { newsData, isError, isLoading } = useSelector(
    (state) => state.getNewsReducer
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [analysisPerPage] = useState(3);

  const indexOfLastAnalysis = currentPage * analysisPerPage;
  const indexOfFirstAnalysis = indexOfLastAnalysis - analysisPerPage;
  const currentAnalysis = newsData?.length
    ? newsData.slice(indexOfFirstAnalysis, indexOfLastAnalysis)
    : null;

  const handlePageChange = (current) => {
    setCurrentPage(current);
  };

  // useEffect(() => {
  //   console.log(newsData);
  // }, [newsData]);

  if (!newsData?.length) return <span>no news</span>;

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
  ) : newsData?.length ? (
    <>
      <ExpandableAnalysisContainer>
        <Accordion allowMultipleExpanded={true} allowZeroExpanded={true}>
          {currentAnalysis.map((item, i) => (
            <AccordionItem key={i}>
              <AccordionItemHeading>
                <AccordionItemButton className='accordion__button--analysis'>
                  {item.publish_date}
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className='accordion__panel--analysis'>
                <AnalysisElementWrapper>
                  <AnalysisElement>
                    <ElementText>{item.update}</ElementText>
                  </AnalysisElement>
                </AnalysisElementWrapper>
              </AccordionItemPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </ExpandableAnalysisContainer>
      <NewsPaginationWrap>
        <Pagination
          showQuickJumper
          showSizeChanger
          defaultPageSize={1}
          defaultCurrent={1}
          current={currentPage}
          total={Math.ceil(newsData.length / analysisPerPage)}
          onChange={handlePageChange}
          locale={localeInfo}
          prevIcon={<PreviousIcon />}
          nextIcon={<NextIcon />}
          jumpPrevIcon='...'
          jumpNextIcon='...'
        />
      </NewsPaginationWrap>
    </>
  ) : null;
};

export default NewsList;
