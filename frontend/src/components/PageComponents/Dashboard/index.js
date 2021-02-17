import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getnews } from '../../../actions/getNews';

import {
  DashboardContainer,
  DashboardTextWrap,
  DashboardUpdateWrap,
  DashboardTitle,
  DashboardDate,
  DashboardText,
  DashboardUserContentWrap,
  ContentUnit,
  ContentTitle,
  IconContentWrap,
  Title,
  ContentText,
  ContentLink,
  DashboardTechnicalWrap,
  TechnicalUnit,
  LinkIconWrap,
  LinkIcon,
  ArticleIcon,
  KeywordIcon,
  AuditIcon,
  DocumentationIcon,
  FeedbackIcon,
  ExternalContentLink,
} from './DashboardElements';
import { SingleElementContainer } from '../../Common/ContainerElements';

const Dashboard = () => {
  const { newsData } = useSelector((state) => state.getNewsReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getnews());
  }, [dispatch]);

  useEffect(() => {
    console.log('news', newsData);
  }, [newsData]);
  return (
    <>
      <SingleElementContainer>
        <DashboardContainer>
          <DashboardTextWrap>
            <DashboardUpdateWrap>
              <DashboardTitle>Last update</DashboardTitle>
              <DashboardDate>20-03-2021</DashboardDate>
            </DashboardUpdateWrap>
            <DashboardText>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
              ex. Consectetur, eaque autem? Maxime dolor facere dolores
              accusamus culpa
            </DashboardText>
          </DashboardTextWrap>
          <DashboardUserContentWrap>
            <ContentUnit>
              <ContentTitle>
                <IconContentWrap>
                  <ArticleIcon />
                </IconContentWrap>
                <Title>My articles</Title>
              </ContentTitle>
              <ContentText>Your saved documents.</ContentText>
              <ContentLink to='/articles'>
                <LinkIconWrap>
                  <LinkIcon />
                </LinkIconWrap>
                Check articles
              </ContentLink>
            </ContentUnit>
            <ContentUnit>
              <ContentTitle>
                <IconContentWrap>
                  <KeywordIcon />
                </IconContentWrap>
                <Title>My keywords</Title>
              </ContentTitle>
              <ContentText>Your saved planners.</ContentText>
              <ContentLink to='/keywords'>
                <LinkIconWrap>
                  <LinkIcon />
                </LinkIconWrap>
                Check keywords
              </ContentLink>
            </ContentUnit>
            <ContentUnit>
              <ContentTitle>
                <IconContentWrap>
                  <AuditIcon />
                </IconContentWrap>
                <Title>My audits</Title>
              </ContentTitle>
              <ContentText>Your saved website audits.</ContentText>
              <ContentLink to='/audits'>
                <LinkIconWrap>
                  <LinkIcon />
                </LinkIconWrap>
                Check audits
              </ContentLink>
            </ContentUnit>
          </DashboardUserContentWrap>
          <DashboardTechnicalWrap>
            <TechnicalUnit>
              <ContentTitle>
                <IconContentWrap>
                  <DocumentationIcon />
                </IconContentWrap>
                <Title>Documentation</Title>
              </ContentTitle>
              <ContentText>
                Check the detailed documentation on the github.
              </ContentText>
              <ExternalContentLink
                href='https://github.com/gpiechnik2/senter'
                target='_blank'>
                <LinkIconWrap>
                  <LinkIcon />
                </LinkIconWrap>
                Github
              </ExternalContentLink>
            </TechnicalUnit>
            <TechnicalUnit>
              <ContentTitle>
                <IconContentWrap>
                  <FeedbackIcon />
                </IconContentWrap>
                <Title>Send feedback</Title>
              </ContentTitle>
              <ContentText>
                Send feedback message to us, what can be corrected.
              </ContentText>
              <ExternalContentLink
                href='https://github.com/gpiechnik2/senter'
                target='_blank'>
                <LinkIconWrap>
                  <LinkIcon />
                </LinkIconWrap>
                Send feedback
              </ExternalContentLink>
            </TechnicalUnit>
          </DashboardTechnicalWrap>
        </DashboardContainer>
      </SingleElementContainer>
    </>
  );
};

export default Dashboard;
