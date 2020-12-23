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
                <NavLink href='#'>
                  <IconWrap>
                    <IconHome />
                  </IconWrap>
                  <NavName>Home</NavName>
                </NavLink>
              </NavElement>
              <NavElement>
                <NavLink>
                  <IconWrap>
                    <IconWebsiteAnalysis />
                  </IconWrap>
                  <NavName>Website analysis</NavName>
                </NavLink>
              </NavElement>
              <NavElement>
                <NavLink>
                  <IconWrap>
                    <IconKeywordsAnalysis />
                  </IconWrap>
                  <NavName>Keywords analysis</NavName>
                </NavLink>
              </NavElement>
              <NavElement>
                <NavLink>
                  <IconWrap>
                    <IconCompetitionAnalysis />
                  </IconWrap>
                  <NavName>Competition analysis</NavName>
                </NavLink>
              </NavElement>
              <NavElement>
                <NavLink>
                  <IconWrap>
                    <IconContentAnalysis />
                  </IconWrap>
                  <NavName>Analiza kontentu</NavName>
                </NavLink>
              </NavElement>
              <NavElement>
                <NavLink>
                  <IconWrap>
                    <IconWebsiteRankTracker />
                  </IconWrap>
                  <NavName>Website rank tracker</NavName>
                </NavLink>
              </NavElement>
              <NavElement>
                <NavLink>
                  <IconWrap>
                    <IconDocuments />
                  </IconWrap>
                  <NavName>Dokumenty</NavName>
                </NavLink>
              </NavElement>
            </NavUl>
          </Nav>
          <HelpWrap>
            <HelpLink href='#'>
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
