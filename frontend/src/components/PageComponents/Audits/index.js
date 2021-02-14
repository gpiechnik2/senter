import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Moment from 'react-moment';

import { getaudits, deleteAudit, getAudit } from '../../../actions/audits';

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
  AuditIcon,
} from '../../PageComponents/Dashboard/DashboardElements';
import { StyledSpinner } from '../../Common/StyledSpinner';

import graphic from '../../../images/myaudits.jpg';

const Audits = () => {
  const { auditsData, isLoading } = useSelector((state) => state.auditsReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getaudits());
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
              <StaticTitle>My audits</StaticTitle>
              <StaticText>Check your saved audits.</StaticText>
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
            ) : auditsData?.length ? (
              <>
                {auditsData.map((audit) => (
                  <DynamicContentUnit key={audit.id}>
                    <ContentTitle>
                      <IconContentWrap>
                        <AuditIcon className='unitIcon' />
                      </IconContentWrap>
                      <Title>{audit.url}</Title>
                    </ContentTitle>
                    <ContentText>
                      <Moment format='DD-MM-YYYY'>{audit.publish_date}</Moment>
                    </ContentText>
                    <LinkWrapper>
                      <ContentLink
                        onClick={() => dispatch(getAudit(audit.id))}
                        to='/audit'>
                        <LinkIconWrap>
                          <LinkIcon />
                        </LinkIconWrap>
                        Check audit
                      </ContentLink>
                      <DeleteIconWrap
                        onClick={() => dispatch(deleteAudit(audit.id))}>
                        <DeleteIcon />
                      </DeleteIconWrap>
                    </LinkWrapper>
                  </DynamicContentUnit>
                ))}
              </>
            ) : (
              <WarnMessage>
                No audits found. To add audit go to
                <ContentLink style={{ marginLeft: '5px' }} to='/audit'>
                  Audit
                </ContentLink>
              </WarnMessage>
            )}
          </DynamicContentWrap>
        </ColumnContainerBasic>
      </SingleElementContainer>
    </>
  );
};

export default Audits;
