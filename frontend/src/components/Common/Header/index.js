import { useState, useEffect } from 'react';

import {
  HeaderContainer,
  HeaderWrapper,
  LogoWrapLink,
  Logo,
} from './HeaderElements';

import logo from '../../../images/logo_main.svg';

const Header = ({ children, isPrivate }) => {
  const [isScroll, setIsScroll] = useState(false);

  const changeHeader = () => {
    if (window.scrollY > 0) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeHeader);

    return () => {
      window.removeEventListener('scroll', changeHeader);
    };
  }, []);

  return (
    <>
      <HeaderContainer isScroll={isScroll}>
        <HeaderWrapper>
          <LogoWrapLink to={isPrivate ? '/dashboard' : '/'}>
            <Logo src={logo} />
          </LogoWrapLink>
          {children}
        </HeaderWrapper>
      </HeaderContainer>
    </>
  );
};

export default Header;
