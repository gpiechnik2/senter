import {
  UserPanelContainer,
  UserPanelWrapper,
  UserHello,
  UserName,
  UserPanelList,
  UserPanelElement,
  UserPanelLink,
} from './UserPanelElements';

const UserPanelPrivate = ({ isOpen }) => {
  return (
    <>
      <UserPanelContainer isOpen={isOpen}>
        <UserPanelWrapper>
          <UserHello>
            Cześć, <UserName>Lorem ipsum</UserName>
          </UserHello>
          <UserPanelList>
            <UserPanelElement>
              <UserPanelLink to='/dashboard/settings'>
                Wesprzyj nas
              </UserPanelLink>
            </UserPanelElement>
            <UserPanelElement>
              <UserPanelLink to='/dashboard/settings'>Ustawienia</UserPanelLink>
            </UserPanelElement>
            <UserPanelElement>
              <UserPanelLink to='/dashboard/settings'>
                Report / Feedback
              </UserPanelLink>
            </UserPanelElement>
            <UserPanelElement>
              <UserPanelLink to='/dashboard/settings'>Wyloguj</UserPanelLink>
            </UserPanelElement>
          </UserPanelList>
        </UserPanelWrapper>
      </UserPanelContainer>
    </>
  );
};

export default UserPanelPrivate;
