import { HeaderContainer, LogoWrap, Logo } from './HeaderElements';

import logo from '../../../images/logo.svg';

const Header = () => {
  return (
    <>
      <HeaderContainer>
        <LogoWrap>
          <Logo src={logo} />
        </LogoWrap>
        
      </HeaderContainer>
    </>
  );
};

export default Header;
