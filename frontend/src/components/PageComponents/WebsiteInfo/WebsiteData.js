import { useSelector } from 'react-redux';

import {
  TableLargeContainer,
  TableIconWrapper,
  TableTextWrapper,
  TitleCountWrap,
  TableTextTitle,
  CountNumber,
  TableTextContentWrap,
  TableText,
  IconUrl,
  IconTitle,
  IconDescription,
  IconUrlTitle,
  IconKeyword,
  IconH1,
  IconH2,
  IconOtherH,
  IconInternalLinks,
  IconExternalLinks,
  IconImagesCount,
} from '../../Common/AnalysisElements';
import { StyledSpinner } from '../../Common/StyledSpinner';

const WebsiteData = () => {
  const { websiteInfoData, isError, isLoading, errorMsg } = useSelector(
    (state) => state.websiteInfoReducer
  );

  if (isError)
    return (
      <span style={{ color: '#EB6969', fontWeight: 'bold' }}>
        {errorMsg.url ? errorMsg.url[0] : null}
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
  ) : websiteInfoData ? (
    <>
      <TableLargeContainer>
        <TableIconWrapper>
          <IconUrl />
        </TableIconWrapper>
        <TableTextWrapper>
          <TableTextTitle>Url</TableTextTitle>
          <TableTextContentWrap>
            <TableText>{websiteInfoData.website_analysis.url}</TableText>
          </TableTextContentWrap>
        </TableTextWrapper>
      </TableLargeContainer>

      <TableLargeContainer>
        <TableIconWrapper>
          <IconTitle />
        </TableIconWrapper>
        <TableTextWrapper>
          <TableTextTitle>Title</TableTextTitle>
          <TableTextContentWrap>
            <TableText>{websiteInfoData.website_analysis.title}</TableText>
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
              {websiteInfoData.website_analysis.description}
            </TableText>
          </TableTextContentWrap>
        </TableTextWrapper>
      </TableLargeContainer>

      <TableLargeContainer>
        <TableIconWrapper>
          <IconUrlTitle />
        </TableIconWrapper>
        <TableTextWrapper>
          <TableTextTitle>Url title</TableTextTitle>
          <TableTextContentWrap>
            <TableText>{websiteInfoData.website_analysis.url_title}</TableText>
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
            <TableText>{websiteInfoData.website_analysis.keywords}</TableText>
          </TableTextContentWrap>
        </TableTextWrapper>
      </TableLargeContainer>

      <TableLargeContainer>
        <TableIconWrapper>
          <IconH1 />
        </TableIconWrapper>
        <TableTextWrapper>
          <TableTextTitle>H1</TableTextTitle>
          <TableTextContentWrap>
            <TableText>{websiteInfoData.website_analysis.h1}</TableText>
          </TableTextContentWrap>
        </TableTextWrapper>
      </TableLargeContainer>

      <TableLargeContainer>
        <TableIconWrapper>
          <IconH2 />
        </TableIconWrapper>
        <TableTextWrapper>
          <TitleCountWrap>
            <TableTextTitle>H2</TableTextTitle>
            <CountNumber>
              {websiteInfoData.website_analysis.h2.h2_count}
            </CountNumber>
          </TitleCountWrap>

          <TableTextContentWrap>
            {Array.isArray(websiteInfoData.website_analysis.h2.h2) ? (
              <>
                {websiteInfoData.website_analysis.h2.h2.map((h2, i) => (
                  <TableText key={i}>{h2}</TableText>
                ))}
              </>
            ) : (
              <TableText>{websiteInfoData.website_analysis.h2.h2}</TableText>
            )}
          </TableTextContentWrap>
        </TableTextWrapper>
      </TableLargeContainer>

      <TableLargeContainer>
        <TableIconWrapper>
          <IconOtherH />
        </TableIconWrapper>
        <TableTextWrapper>
          <TitleCountWrap>
            <TableTextTitle>Other h</TableTextTitle>
            <CountNumber>
              {websiteInfoData.website_analysis.other_h.other_h_count}
            </CountNumber>
          </TitleCountWrap>

          <TableTextContentWrap>
            {Array.isArray(websiteInfoData.website_analysis.other_h.other_h) ? (
              <>
                {websiteInfoData.website_analysis.other_h.other_h.map(
                  (otherH, i) => (
                    <TableText key={i}>{otherH}</TableText>
                  )
                )}
              </>
            ) : (
              <TableText>
                {websiteInfoData.website_analysis.other_h.other_h}
              </TableText>
            )}
          </TableTextContentWrap>
        </TableTextWrapper>
      </TableLargeContainer>

      <TableLargeContainer>
        <TableIconWrapper>
          <IconInternalLinks />
        </TableIconWrapper>
        <TableTextWrapper>
          <TitleCountWrap>
            <TableTextTitle>Internal links</TableTextTitle>
            <CountNumber>
              {
                websiteInfoData.website_analysis['internal links']
                  .internal_links_count
              }
            </CountNumber>
          </TitleCountWrap>

          <TableTextContentWrap>
            {Array.isArray(
              websiteInfoData.website_analysis['internal links'].internal_links
            ) ? (
              <>
                {websiteInfoData.website_analysis[
                  'internal links'
                ].internal_links.map((link, i) => (
                  <TableText key={i}>{link}</TableText>
                ))}
              </>
            ) : (
              <TableText>
                {
                  websiteInfoData.website_analysis['internal links']
                    .internal_links
                }
              </TableText>
            )}
          </TableTextContentWrap>
        </TableTextWrapper>
      </TableLargeContainer>

      <TableLargeContainer>
        <TableIconWrapper>
          <IconExternalLinks />
        </TableIconWrapper>
        <TableTextWrapper>
          <TitleCountWrap>
            <TableTextTitle>External links</TableTextTitle>
            <CountNumber>
              {
                websiteInfoData.website_analysis.external_links
                  .external_links_count
              }
            </CountNumber>
          </TitleCountWrap>

          <TableTextContentWrap>
            {Array.isArray(
              websiteInfoData.website_analysis.external_links.external_links
            ) ? (
              <>
                {websiteInfoData.website_analysis.external_links.external_links.map(
                  (link, i) => (
                    <TableText key={i}>{link}</TableText>
                  )
                )}
              </>
            ) : (
              <TableText>
                {websiteInfoData.website_analysis.external_links.external_links}
              </TableText>
            )}
          </TableTextContentWrap>
        </TableTextWrapper>
      </TableLargeContainer>

      <TableLargeContainer>
        <TableIconWrapper>
          <IconImagesCount />
        </TableIconWrapper>
        <TableTextWrapper>
          <TableTextTitle>Images count</TableTextTitle>
          <TableTextContentWrap>
            <TableText>
              {websiteInfoData.website_analysis.images_count}
            </TableText>
          </TableTextContentWrap>
        </TableTextWrapper>
      </TableLargeContainer>

      {/* <TableSmallContainer>
        <SmallTableWrapper>ASD</SmallTableWrapper>
        <SmallTableWrapper>ASD</SmallTableWrapper>
      </TableSmallContainer> */}
    </>
  ) : null;
};

export default WebsiteData;
