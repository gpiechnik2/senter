import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import {
  UserPanelContainer,
  UserPanelWrapper,
  UserHello,
  UserPanelList,
  UserPanelElement,
  UserPanelLink,
  UserPanelLogout,
  UserPanelLinkExternal,
} from './UserPanelElements';

const UserPanelPrivate = ({ isOpen, setIsOpen }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const logout = () => {
    dispatch({ type: 'LOGOUT' });

    history.push('/login');
  };

  return (
    <>
      <UserPanelContainer onClick={() => setIsOpen(!isOpen)} isOpen={isOpen}>
        <UserPanelWrapper>
          <UserHello>Hello!</UserHello>
          <UserPanelList>
            <UserPanelElement>
              <UserPanelLink to='/support'>Support Us</UserPanelLink>
            </UserPanelElement>
            <UserPanelElement>
              <UserPanelLink to='/settings/profile'>Settings</UserPanelLink>
            </UserPanelElement>
            <UserPanelElement>
              <UserPanelLinkExternal
                href='https://github.com/gpiechnik2/senter'
                target='_blank'>
                Report / Feedback
              </UserPanelLinkExternal>
            </UserPanelElement>
            <UserPanelElement>
              <UserPanelLogout onClick={logout}>Logout</UserPanelLogout>
            </UserPanelElement>
          </UserPanelList>
        </UserPanelWrapper>
      </UserPanelContainer>
    </>
  );
};

export default UserPanelPrivate;
