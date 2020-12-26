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
              <UserPanelLink>Wesprzyj nas</UserPanelLink>
            </UserPanelElement>
            <UserPanelElement>
              <UserPanelLink>Ustawienia</UserPanelLink>
            </UserPanelElement>
            <UserPanelElement>
              <UserPanelLink>Report / Feedback</UserPanelLink>
            </UserPanelElement>
            <UserPanelElement>
              <UserPanelLink>Wyloguj</UserPanelLink>
            </UserPanelElement>
          </UserPanelList>
        </UserPanelWrapper>
      </UserPanelContainer>
    </>
  );
};

export default UserPanelPrivate;
