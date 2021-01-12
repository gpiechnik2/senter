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
  IconKeywordsAnalysis,
  IconContentAnalysis,
  IconWebsiteRankTracker,
  IconDocuments,
  NavName,
  HelpWrap,
  HelpLink,
  IconHelpWrap,
  IconHelp,
  HelpText,
} from './AsideElements';

const Aside = () => {
  return (
    <>
      <AsideContainer>
        <AsideWrap>
          <ToggleWrap></ToggleWrap>
          <Nav>
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
                    <IconKeywordsAnalysis />
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
                    <IconKeywordsAnalysis />
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
                    <IconWebsiteRankTracker />
                  </IconWrap>
                  <NavName>Website info</NavName>
                </NavLink>
              </NavElement>
              <NavElement>
                <NavLink to='/audit'>
                  <IconWrap>
                    <IconDocuments />
                  </IconWrap>
                  <NavName>Audit</NavName>
                </NavLink>
              </NavElement>
            </NavUl>
          </Nav>
          <HelpWrap>
            <HelpLink to='/help'>
              <IconHelpWrap>
                <IconHelp />
              </IconHelpWrap>
              <HelpText>Helpdesk</HelpText>
            </HelpLink>
          </HelpWrap>
        </AsideWrap>
      </AsideContainer>
    </>
  );
};

export default Aside;
