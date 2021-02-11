import {
  UserPanelPublicContainer,
  UserPanelPublicWrapper,
  UserHelloPublic,
  UserPanelPublicList,
  UserPanelPublicElement,
  UserPanelPublicLink,
} from './UserPanelPublicElements';

const UserPanelPublic = ({ isOpen, setIsOpen }) => {
  return (
    <>
      <UserPanelPublicContainer
        onClick={() => setIsOpen(!isOpen)}
        isOpen={isOpen}>
        <UserPanelPublicWrapper>
          <UserHelloPublic>Hello!</UserHelloPublic>
          <UserPanelPublicList>
            <UserPanelPublicElement>
              <UserPanelPublicLink to='/login' style={{ color: '#5D38DB' }}>
                Login
              </UserPanelPublicLink>
            </UserPanelPublicElement>
            <UserPanelPublicElement>
              <UserPanelPublicLink to='/register' style={{ color: '#5D38DB' }}>
                Register
              </UserPanelPublicLink>
            </UserPanelPublicElement>
            <UserPanelPublicElement>
              <UserPanelPublicLink to='/about'>About us</UserPanelPublicLink>
            </UserPanelPublicElement>
            <UserPanelPublicElement>
              <UserPanelPublicLink to='/support'>
                Support us
              </UserPanelPublicLink>
            </UserPanelPublicElement>
            <UserPanelPublicElement>
              <UserPanelPublicLink to='/news'>News</UserPanelPublicLink>
            </UserPanelPublicElement>
            <UserPanelPublicElement>
              <UserPanelPublicLink to='/login'>
                Helpdesk / Github
              </UserPanelPublicLink>
            </UserPanelPublicElement>
          </UserPanelPublicList>
        </UserPanelPublicWrapper>
      </UserPanelPublicContainer>
    </>
  );
};

export default UserPanelPublic;
