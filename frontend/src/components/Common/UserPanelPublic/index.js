import {
  UserPanelContainer,
  UserPanelWrapper,
  UserHello,
  UserPanelList,
  UserPanelElement,
  UserPanelLink,
} from '../UserPanelPrivate/UserPanelElements';

const UserPanelPublic = ({ isOpen, setIsOpen }) => {
  return (
    <>
      <UserPanelContainer onClick={() => setIsOpen(!isOpen)} isOpen={isOpen}>
        <UserPanelWrapper>
          <UserHello>Hello!</UserHello>
          <UserPanelList>
            <UserPanelElement>
              <UserPanelLink to='/login'>Login</UserPanelLink>
            </UserPanelElement>
            <UserPanelElement>
              <UserPanelLink to='/register'>Register</UserPanelLink>
            </UserPanelElement>
            <UserPanelElement>
              <UserPanelLink to='/login'>About us</UserPanelLink>
            </UserPanelElement>
            <UserPanelElement>
              <UserPanelLink to='/login'>Support us</UserPanelLink>
            </UserPanelElement>
            <UserPanelElement>
              <UserPanelLink to='/login'>News</UserPanelLink>
            </UserPanelElement>
            <UserPanelElement>
              <UserPanelLink to='/login'>Helpdesk / Github</UserPanelLink>
            </UserPanelElement>
          </UserPanelList>
        </UserPanelWrapper>
      </UserPanelContainer>
    </>
  );
};

export default UserPanelPublic;
