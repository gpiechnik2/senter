// import {useState} from 'react'
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
} from './UserPanelElements';

const UserPanelPrivate = ({ isOpen, setIsOpen }) => {
  // const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  const history = useHistory();

  const logout = () => {
    dispatch({ type: 'LOGOUT' });

    history.push('/login');

    // setUser(null)
  };

  return (
    <>
      <UserPanelContainer onClick={() => setIsOpen(!isOpen)} isOpen={isOpen}>
        <UserPanelWrapper>
          <UserHello>Hello!</UserHello>
          <UserPanelList>
            <UserPanelElement>
              <UserPanelLink to='/dashboard/settings'>Support Us</UserPanelLink>
            </UserPanelElement>
            <UserPanelElement>
              <UserPanelLink to='/settings/profile'>Settings</UserPanelLink>
            </UserPanelElement>
            <UserPanelElement>
              <UserPanelLink to='/dashboard/settings'>
                Report / Feedback
              </UserPanelLink>
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
