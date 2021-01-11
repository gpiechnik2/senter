import {
  DashboardWrapper,
  UpdatesWrap,
  UpdateSection,
  UpdateTitle,
  UpdateArticle,
  UpdateArticleSmall,
  UpdateArticleTitle,
  UpdateText,
  UpdateLink,
  BtnWrap,
  ButtonLink,
} from './DashboardElements';

import {
  NotificationWrapper,
  TextWrap,
  NotificationText,
  LinkRefresh,
  IconWrap,
  IconClose,
} from '../../Common/NotificationElements';

import toast from 'react-hot-toast';

const Dashboard = () => {
  const notify = () =>
    toast((t) => (
      <NotificationWrapper>
        <TextWrap>
          <NotificationText>
            This page have been updated by another person.
            <LinkRefresh onClick={() => window.location.reload()}>
              Refresh
            </LinkRefresh>
          </NotificationText>
        </TextWrap>
        <IconWrap onClick={() => toast.dismiss(t.id)}>
          <IconClose />
        </IconWrap>
      </NotificationWrapper>
    ));
  return (
    <>
      <DashboardWrapper>
        <UpdatesWrap>
          <UpdateSection>
            <UpdateTitle>Update 1</UpdateTitle>
            <UpdateArticle>
              <UpdateArticleTitle>1.0</UpdateArticleTitle>
              <UpdateText>
                User Experience is much wider than User Interface and refers to
                designing apps in a way that optimizes usability and
                accessibility. The overriding aim of a good UX is customer
                delight, or delivering maximum possible pleasure to the users
                interacting with the app. UI is delivering a good UX through a
                good interface. UI may be regarded as one element,
              </UpdateText>
              <UpdateLink>Read More</UpdateLink>
            </UpdateArticle>
          </UpdateSection>
          <UpdateSection>
            <UpdateTitle>Update 2</UpdateTitle>
            <UpdateArticleSmall>
              <UpdateArticleTitle>1.0</UpdateArticleTitle>
              <UpdateText>
                User Experience is much wider than User Interface and refers to
                designing apps in a way that optimizes usability and
                accessibility. The overriding aim designing apps in a way that
                optimizes usability and accessibility. The overriding aim
              </UpdateText>
            </UpdateArticleSmall>
          </UpdateSection>
        </UpdatesWrap>
        <BtnWrap>
          <ButtonLink onClick={notify}>Więcej</ButtonLink>
        </BtnWrap>
      </DashboardWrapper>
    </>
  );
};

export default Dashboard;
