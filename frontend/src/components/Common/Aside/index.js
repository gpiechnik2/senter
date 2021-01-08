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
  IconCompetitionAnalysis,
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
                  <NavName>Home</NavName>
                </NavLink>
              </NavElement>
              <NavElement>
                <NavLink to='/dashboard/website-analysis'>
                  <IconWrap>
                    <IconWebsiteAnalysis />
                  </IconWrap>
                  <NavName>Website analysis</NavName>
                </NavLink>
              </NavElement>
              <NavElement>
                <NavLink to='/dashboard/keywords-analysis'>
                  <IconWrap>
                    <IconKeywordsAnalysis />
                  </IconWrap>
                  <NavName>Keywords analysis</NavName>
                </NavLink>
              </NavElement>
              <NavElement>
                <NavLink to='/dashboard/competition-analysis'>
                  <IconWrap>
                    <IconCompetitionAnalysis />
                  </IconWrap>
                  <NavName>Competition analysis</NavName>
                </NavLink>
              </NavElement>
              <NavElement>
                <NavLink to='/dashboard/content-analysis'>
                  <IconWrap>
                    <IconContentAnalysis />
                  </IconWrap>
                  <NavName>Analiza kontentu</NavName>
                </NavLink>
              </NavElement>
              <NavElement>
                <NavLink to='/dashboard/website-rank-tracker'>
                  <IconWrap>
                    <IconWebsiteRankTracker />
                  </IconWrap>
                  <NavName>Website rank tracker</NavName>
                </NavLink>
              </NavElement>
              <NavElement>
                <NavLink to='/dashboard/documents'>
                  <IconWrap>
                    <IconDocuments />
                  </IconWrap>
                  <NavName>Dokumenty</NavName>
                </NavLink>
              </NavElement>
            </NavUl>
          </Nav>
          <HelpWrap>
            <HelpLink to='/dashboard/help'>
              <IconHelpWrap>
                <IconHelp />
              </IconHelpWrap>
              <HelpText>Pomoc</HelpText>
            </HelpLink>
          </HelpWrap>
        </AsideWrap>
      </AsideContainer>
    </>
  );
};

export default Aside;
