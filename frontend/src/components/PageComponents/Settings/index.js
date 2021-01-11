import { Switch, Route } from 'react-router-dom';

import ProfilePage from './ProfilePage/index';
import PrivatePage from './PrivatePage/index';
import WebScrapingPage from './WebScrapingPage/index';

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
              <MenuLink to='/dashboard/settings'>Profile</MenuLink>
            </MenuElement>
            <MenuElement>
              <MenuLink to='/dashboard/settings/private'>Private</MenuLink>
            </MenuElement>
            <MenuElement>
              <MenuLink to='/dashboard/settings/web-scraping'>
                Web scraping
              </MenuLink>
            </MenuElement>
          </MenuList>
        </SettingsMenu>
        <SettingsSwitchContainer>
          <Switch>
            <Route exact path='/dashboard/settings' component={ProfilePage} />
            <Route path='/dashboard/settings/private' component={PrivatePage} />
            <Route
              path='/dashboard/settings/web-scraping'
              component={WebScrapingPage}
            />
          </Switch>
        </SettingsSwitchContainer>
      </SettingsWrapper>
    </>
  );
};

export default Settings;
