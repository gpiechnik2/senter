import {
  HeaderContainer,
  HeaderWrapper,
  LogoWrap,
  Logo,
} from './HeaderElements';

import logo from '../../../images/logo.svg';

const Header = ({ children }) => {
  return (
    <>
      <HeaderContainer>
        <HeaderWrapper>
          <LogoWrap>
            <Logo src={logo} />
          </LogoWrap>
          {children}
        </HeaderWrapper>
      </HeaderContainer>
    </>
  );
};

export default Header;
