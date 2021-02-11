import { Switch, Route } from 'react-router-dom';

import ProfilePage from './ProfilePage/index';
import PrivatePage from './PrivatePage/index';
import WebScrapingPage from './WebScrapingPage/index';
import NotFoundPage from '../../../pages/notfound';

import {
  SettingsWrapper,
  SettingsMenu,
  MenuList,
  MenuElement,
  MenuLink,
  SettingsSwitchContainer,
} from './SettingsElements';

const Settings = () => {
  return (
    <>
      <SettingsWrapper>
        <SettingsMenu>
          <MenuList>
            <MenuElement>
              <MenuLink to='/settings/profile'>Profile</MenuLink>
            </MenuElement>
            <MenuElement>
              <MenuLink to='/settings/private'>Private</MenuLink>
            </MenuElement>
            <MenuElement>
              <MenuLink to='/settings/web-scraping'>Web scraping</MenuLink>
            </MenuElement>
          </MenuList>
        </SettingsMenu>
        <SettingsSwitchContainer>
          <Switch>
            <Route exact path='/settings/profile' component={ProfilePage} />
            <Route exact path='/settings/private' component={PrivatePage} />
            <Route
              exact
              path='/settings/web-scraping'
              component={WebScrapingPage}
            />
            <Route component={NotFoundPage} />
          </Switch>
        </SettingsSwitchContainer>
      </SettingsWrapper>
    </>
  );
};

export default Settings;
