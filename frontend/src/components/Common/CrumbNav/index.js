import { useHistory, useLocation } from 'react-router-dom';
import {
  CrumbNavContainer,
  CrumbNavWrap,
  CrumbNavList,
  CrumbNavElement,
  CrumbNavLink,
  CrumbNavBackWrap,
  CrumbNavBackLink,
  IconWrap,
  IconArrowLeft,
  EdgeElement,
  EdgeElement2,
} from './CrumbNavElements';

const CrumbNav = () => {
  const location = useLocation();
  let history = useHistory();

  const locationName = (pathname) => {
    switch (pathname) {
      case '/dashboard':
        return 'Dashboard';
      case '/keyword-planner':
        return 'Keyword planner';
      case '/website-analysis':
        return 'Website analysis';
      case '/keyword-analysis':
        return 'Keyword analysis';
      case '/content-analysis':
        return 'Content analysis';
      case '/website-info':
        return 'Website info';
      case '/audit':
        return 'Audit';
      case '/help':
        return 'Helpdesk';
      case '/settings/profile':
        return 'Settings';
      case '/settings/private':
        return 'Settings';
      case '/settings/web-scraping':
        return 'Settings';
      case '/articles':
        return 'My articles';
      case '/keywords':
        return 'My keywords';
      case '/audits':
        return 'My audits';
      default:
        return 'Dashboard';
    }
  };

  return (
    <>
      <CrumbNavContainer>
        <EdgeElement>
          <EdgeElement2 />
        </EdgeElement>
        <CrumbNavWrap>
          <CrumbNavList>
            <CrumbNavElement>
              <CrumbNavLink to={location.pathname}>
                {locationName(location.pathname)}
              </CrumbNavLink>
            </CrumbNavElement>
          </CrumbNavList>
          <CrumbNavBackWrap>
            <CrumbNavBackLink onClick={() => history.goBack()}>
              <IconWrap>
                <IconArrowLeft />
              </IconWrap>
              Back
            </CrumbNavBackLink>
          </CrumbNavBackWrap>
        </CrumbNavWrap>
      </CrumbNavContainer>
    </>
  );
};

export default CrumbNav;
