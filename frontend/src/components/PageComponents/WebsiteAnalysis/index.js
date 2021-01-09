import MainPage from './MainPage';
import PageSpeedPage from './PageSpeedPage';
import SeoPage from './SeoPage/index';
import SearchConsolePage from './SearchConsolePage/index';

import {
  WebAnalysisWrapper,
  WebAnalysisMenu,
  MenuList,
  MenuElement,
  MenuLink,
  WebSwitchContainer,
} from './WebsiteAnalysisElements';

const WebsiteAnalysis = () => {
  return (
    <>
      <WebAnalysisWrapper>
        <WebAnalysisMenu>
          <MenuList>
            <MenuElement>
              <MenuLink>SEO</MenuLink>
            </MenuElement>
            <MenuElement>
              <MenuLink>Techniczne błędy</MenuLink>
            </MenuElement>
            <MenuElement>
              <MenuLink>Search Console</MenuLink>
            </MenuElement>
          </MenuList>
        </WebAnalysisMenu>
        <WebSwitchContainer>
          {/* <MainPage /> */}
          {/* <SeoPage /> */}
          {/* <PageSpeedPage /> */}
          <SearchConsolePage />
        </WebSwitchContainer>
      </WebAnalysisWrapper>
    </>
  );
};

export default WebsiteAnalysis;
