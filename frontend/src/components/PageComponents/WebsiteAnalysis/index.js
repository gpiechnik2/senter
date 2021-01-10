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
              <MenuLink to='/dashboard/website-analysis/seo'>SEO</MenuLink>
            </MenuElement>
            <MenuElement>
              <MenuLink to='/dashboard/website-analysis/pagespeed'>
                Techniczne błędy
              </MenuLink>
            </MenuElement>
            <MenuElement>
              <MenuLink to='/dashboard/website-analysis/search-console'>
                Search Console
              </MenuLink>
            </MenuElement>
          </MenuList>
        </WebAnalysisMenu>
        <WebSwitchContainer>
          <Switch>
            <Route
              exact
              path='/dashboard/website-analysis'
              component={MainPage}
            />
            <Route path='/dashboard/website-analysis/seo' component={SeoPage} />
            <Route
              path='/dashboard/website-analysis/pagespeed'
              component={PageSpeedPage}
            />
            <Route
              path='/dashboard/website-analysis/search-console'
              component={SearchConsolePage}
            />
          </Switch>
        </WebSwitchContainer>
      </WebAnalysisWrapper>
    </>
  );
};

export default WebsiteAnalysis;
