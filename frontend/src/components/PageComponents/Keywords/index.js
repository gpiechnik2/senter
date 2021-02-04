import {
  StaticContentWrap,
  GraphicWrap,
  StaticTextWrap,
  StaticTitle,
  StaticText,
  DynamicContentWrap,
  DeleteIconWrap,
  DeleteIcon,
  LinkWrapper,
  DynamicContentUnit,
} from '../../Common/UserContentElements';
import {
  ColumnContainerBasic,
  GraphicImg,
  SingleElementContainer,
} from '../../Common/ContainerElements';
import {
  ContentTitle,
  IconContentWrap,
  Title,
  ContentText,
  ContentLink,
  LinkIconWrap,
  LinkIcon,
  ArticleIcon,
  KeywordIcon,
} from '../../PageComponents/Dashboard/DashboardElements';

import graphic from '../../../images/keyword_planner.jpg';

const Keywords = () => {
  return (
    <>
      <SingleElementContainer>
        <ColumnContainerBasic>
          <StaticContentWrap>
            <GraphicWrap>
              <GraphicImg src={graphic} />
            </GraphicWrap>
            <StaticTextWrap>
              <StaticTitle>My keywords</StaticTitle>
              <StaticText>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy.
              </StaticText>
            </StaticTextWrap>
          </StaticContentWrap>
          <DynamicContentWrap>
            <DynamicContentUnit>
              <ContentTitle>
                <IconContentWrap>
                  <KeywordIcon />
                </IconContentWrap>
                <Title>Keyword</Title>
              </ContentTitle>
              <ContentText>page_title</ContentText>
              <LinkWrapper>
                <ContentLink to='/articles'>
                  <LinkIconWrap>
                    <LinkIcon />
                  </LinkIconWrap>
                  Check article
                </ContentLink>
                <DeleteIconWrap>
                  <DeleteIcon />
                </DeleteIconWrap>
              </LinkWrapper>
            </DynamicContentUnit>
            <DynamicContentUnit>
              <ContentTitle>
                <IconContentWrap>
                  <KeywordIcon />
                </IconContentWrap>
                <Title>Keyword</Title>
              </ContentTitle>
              <ContentText>page_title</ContentText>
              <LinkWrapper>
                <ContentLink to='/articles'>
                  <LinkIconWrap>
                    <LinkIcon />
                  </LinkIconWrap>
                  Check article
                </ContentLink>
                <DeleteIconWrap>
                  <DeleteIcon />
                </DeleteIconWrap>
              </LinkWrapper>
            </DynamicContentUnit>
            <DynamicContentUnit>
              <ContentTitle>
                <IconContentWrap>
                  <KeywordIcon />
                </IconContentWrap>
                <Title>Keyword</Title>
              </ContentTitle>
              <ContentText>page_title</ContentText>
              <LinkWrapper>
                <ContentLink to='/articles'>
                  <LinkIconWrap>
                    <LinkIcon />
                  </LinkIconWrap>
                  Check article
                </ContentLink>
                <DeleteIconWrap>
                  <DeleteIcon />
                </DeleteIconWrap>
              </LinkWrapper>
            </DynamicContentUnit>
          </DynamicContentWrap>
        </ColumnContainerBasic>
      </SingleElementContainer>
    </>
  );
};

export default Keywords;
