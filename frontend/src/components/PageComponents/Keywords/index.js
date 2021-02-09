import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Moment from 'react-moment';

import {
  getkeywords,
  deleteKeyword,
  getKeyword,
} from '../../../actions/keywords';

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
  KeywordIcon,
} from '../../PageComponents/Dashboard/DashboardElements';
import { StyledSpinner } from '../../Common/StyledSpinner';

import graphic from '../../../images/keyword_planner.jpg';

const Keywords = () => {
  const { keywordsData, isLoading } = useSelector(
    (state) => state.keywordsReducer
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getkeywords());
  }, [dispatch]);

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
              <StaticText>Check your saved keyword planners.</StaticText>
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
            ) : keywordsData?.length ? (
              <>
                {keywordsData.map((keyword) => (
                  <DynamicContentUnit key={keyword.id}>
                    <ContentTitle>
                      <IconContentWrap>
                        <KeywordIcon className='unitIcon' />
                      </IconContentWrap>
                      <Title>{keyword.keyword}</Title>
                    </ContentTitle>
                    <ContentText>
                      <Moment format='DD-MM-YYYY'>
                        {keyword.publish_date}
                      </Moment>
                    </ContentText>
                    <LinkWrapper>
                      <ContentLink
                        onClick={() => dispatch(getKeyword(keyword.id))}
                        to='/keyword-planner'>
                        <LinkIconWrap>
                          <LinkIcon />
                        </LinkIconWrap>
                        Check planner
                      </ContentLink>
                      <DeleteIconWrap
                        onClick={() => dispatch(deleteKeyword(keyword.id))}>
                        <DeleteIcon />
                      </DeleteIconWrap>
                    </LinkWrapper>
                  </DynamicContentUnit>
                ))}
              </>
            ) : (
              <WarnMessage>
                No planners found. To add planner go to
                <ContentLink
                  style={{ marginLeft: '5px' }}
                  to='/keyword-planner'>
                  Keyword planner
                </ContentLink>
              </WarnMessage>
            )}
          </DynamicContentWrap>
        </ColumnContainerBasic>
      </SingleElementContainer>
    </>
  );
};

export default Keywords;
