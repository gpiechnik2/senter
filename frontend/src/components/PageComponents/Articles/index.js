import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getarticles } from '../../../actions/articles';

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
  WarnMessage,
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
} from '../../PageComponents/Dashboard/DashboardElements';
import { StyledSpinner } from '../../Common/StyledSpinner';

import graphic from '../../../images/myarticles.jpg';

const Articles = () => {
  const { articlesData, isError, isLoading } = useSelector(
    (state) => state.articlesReducer
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getarticles());
  }, [dispatch]);

  useEffect(() => {
    console.log('articles', articlesData);
    console.log('loading?', isLoading);
  }, [articlesData, isLoading]);

  return (
    <>
      <SingleElementContainer>
        <ColumnContainerBasic>
          <StaticContentWrap>
            <GraphicWrap>
              <GraphicImg src={graphic} />
            </GraphicWrap>
            <StaticTextWrap>
              <StaticTitle>My articles</StaticTitle>
              <StaticText>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy.
              </StaticText>
            </StaticTextWrap>
          </StaticContentWrap>
          <DynamicContentWrap>
            {isLoading ? (
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
            ) : articlesData?.length ? (
              <>
                {articlesData.map((article) => (
                  <DynamicContentUnit key={article.id}>
                    <ContentTitle>
                      <IconContentWrap>
                        <ArticleIcon className='unitIcon' />
                      </IconContentWrap>
                      <Title>{article.keyword}</Title>
                    </ContentTitle>
                    <ContentText>{article.page_title}</ContentText>
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
                ))}
              </>
            ) : (
              <WarnMessage>
                No articles found. To add article go to
                <ContentLink
                  style={{ marginLeft: '5px' }}
                  to='/content-analysis'>
                  Content analysis
                </ContentLink>
              </WarnMessage>
            )}
          </DynamicContentWrap>
        </ColumnContainerBasic>
      </SingleElementContainer>
    </>
  );
};

export default Articles;
