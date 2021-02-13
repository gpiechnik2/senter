import onClickOutside from 'react-onclickoutside';

import SearchPanelMobile from '../SearchPanel/Mobile';
import UserPanelMobile from '../UserPanelPrivate/Mobile/index';

import {
  AsideContainer,
  AsideWrap,
  ToggleWrap,
  Nav,
  NavUl,
  NavElement,
  NavLink,
  IconWrap,
  IconHome,
  IconWebsiteAnalysis,
  IconKeywordAnalysis,
  IconKeywordPlanner,
  IconContentAnalysis,
  IconWebsiteInfo,
  IconAudit,
  NavName,
  HelpWrap,
  HelpLink,
  IconHelpWrap,
  IconHelp,
  HelpText,
  UserPanelMobileIconWrap,
  IconGrid,
} from './AsideElements';

function Aside({
  isAsideOpen,
  setIsAsideOpen,
  isPanelMobileOpen,
  setIsPanelMobileOpen,
  togglePanelMobile,
}) {
  Aside.handleClickOutside = () => setIsAsideOpen(false);

  return (
    <>
      <AsideContainer isAsideOpen={isAsideOpen}>
        <AsideWrap>
          <SearchPanelMobile setIsAsideOpen={setIsAsideOpen} />
          <ToggleWrap></ToggleWrap>
          <Nav onClick={() => setIsAsideOpen(false)}>
            <NavUl>
              <NavElement>
                <NavLink to='/dashboard'>
                  <IconWrap>
                    <IconHome />
                  </IconWrap>
                  <NavName>Dashboard</NavName>
                </NavLink>
              </NavElement>
              <NavElement>
                <NavLink to='/keyword-planner'>
                  <IconWrap>
                    <IconKeywordPlanner />
                  </IconWrap>
                  <NavName>Keyword planner</NavName>
                </NavLink>
              </NavElement>
              <NavElement>
                <NavLink to='/website-analysis'>
                  <IconWrap>
                    <IconWebsiteAnalysis />
                  </IconWrap>
                  <NavName>Website analysis</NavName>
                </NavLink>
              </NavElement>
              <NavElement>
                <NavLink to='/keyword-analysis'>
                  <IconWrap>
                    <IconKeywordAnalysis />
                  </IconWrap>
                  <NavName>Keyword analysis</NavName>
                </NavLink>
              </NavElement>
              <NavElement>
                <NavLink to='/content-analysis'>
                  <IconWrap>
                    <IconContentAnalysis />
                  </IconWrap>
                  <NavName>Content analysis</NavName>
                </NavLink>
              </NavElement>
              <NavElement>
                <NavLink to='/website-info'>
                  <IconWrap>
                    <IconWebsiteInfo />
                  </IconWrap>
                  <NavName>Website info</NavName>
                </NavLink>
              </NavElement>
              <NavElement>
                <NavLink to='/audit'>
                  <IconWrap>
                    <IconAudit />
                  </IconWrap>
                  <NavName>Audit</NavName>
                </NavLink>
              </NavElement>
            </NavUl>
          </Nav>
          <HelpWrap>
            <HelpLink
              to='/help'
              onClick={() => {
                setIsAsideOpen(false);
                setIsPanelMobileOpen(false);
              }}>
              <IconHelpWrap>
                <IconHelp />
              </IconHelpWrap>
              <HelpText>Helpdesk</HelpText>
            </HelpLink>
            <UserPanelMobileIconWrap
              className='ignore-react-onclickoutside'
              onClick={togglePanelMobile}>
              <IconGrid />
            </UserPanelMobileIconWrap>
            <UserPanelMobile
              isPanelMobileOpen={isPanelMobileOpen}
              setIsPanelMobileOpen={setIsPanelMobileOpen}
              setIsAsideOpen={setIsAsideOpen}
            />
          </HelpWrap>
        </AsideWrap>
      </AsideContainer>
    </>
  );
}

const clickOutsideConfig = {
  handleClickOutside: () => Aside.handleClickOutside,
};

export default onClickOutside(Aside, clickOutsideConfig);
