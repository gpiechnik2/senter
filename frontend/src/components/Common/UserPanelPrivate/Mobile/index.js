import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import onClickOutside from 'react-onclickoutside';

import {
  UserPanelMobileContainer,
  UserPanelMobileWrapper,
  UserHelloMobile,
  UserPanelMobileList,
  UserPanelMobileElement,
  UserPanelMobileLink,
  UserPanelMobileLogout,
} from './UserPanelMobileElements';

function UserPanelMobile({
  isPanelMobileOpen,
  setIsPanelMobileOpen,
  setIsAsideOpen,
}) {
  const dispatch = useDispatch();
  const history = useHistory();
  UserPanelMobile.handleClickOutside = () => setIsPanelMobileOpen(false);

  const logout = () => {
    dispatch({ type: 'LOGOUT' });

    history.push('/login');
  };
  return (
    <>
      <UserPanelMobileContainer
        isPanelMobileOpen={isPanelMobileOpen}
        onClick={() => {
          setIsPanelMobileOpen(false);
          setIsAsideOpen(false);
        }}>
        <UserPanelMobileWrapper>
          <UserHelloMobile>Hello!</UserHelloMobile>
          <UserPanelMobileList>
            <UserPanelMobileElement>
              <UserPanelMobileLink to='/support'>
                Support Us
              </UserPanelMobileLink>
            </UserPanelMobileElement>
            <UserPanelMobileElement>
              <UserPanelMobileLink to='/settings/profile'>
                Settings
              </UserPanelMobileLink>
            </UserPanelMobileElement>
            <UserPanelMobileElement>
              <UserPanelMobileLink to='/dashboard'>
                Report / Feedback
              </UserPanelMobileLink>
            </UserPanelMobileElement>
            <UserPanelMobileElement>
              <UserPanelMobileLogout onClick={logout}>
                Logout
              </UserPanelMobileLogout>
            </UserPanelMobileElement>
          </UserPanelMobileList>
        </UserPanelMobileWrapper>
      </UserPanelMobileContainer>
    </>
  );
}

const clickOutsideConfig = {
  handleClickOutside: () => UserPanelMobile.handleClickOutside,
};

export default onClickOutside(UserPanelMobile, clickOutsideConfig);
