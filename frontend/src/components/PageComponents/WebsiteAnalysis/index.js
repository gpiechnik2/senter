import { Switch, Route } from 'react-router-dom';

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
              <MenuLink to='/website-analysis/seo'>SEO</MenuLink>
            </MenuElement>
            <MenuElement>
              <MenuLink to='/website-analysis/pagespeed'>
                Techniczne błędy
              </MenuLink>
            </MenuElement>
            <MenuElement>
              <MenuLink to='/website-analysis/search-console'>
                Search Console
              </MenuLink>
            </MenuElement>
          </MenuList>
        </WebAnalysisMenu>
        <WebSwitchContainer>
          <Switch>
            <Route exact path='/website-analysis' component={MainPage} />
            <Route path='/website-analysis/seo' component={SeoPage} />
            <Route
              path='/website-analysis/pagespeed'
              component={PageSpeedPage}
            />
            <Route
              path='/website-analysis/search-console'
              component={SearchConsolePage}
            />
          </Switch>
        </WebSwitchContainer>
      </WebAnalysisWrapper>
    </>
  );
};

export default WebsiteAnalysis;
