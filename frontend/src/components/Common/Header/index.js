import { useState, useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';

import {
  HeaderContainer,
  HeaderWrapper,
  LogoWrapLink,
  Logo,
} from './HeaderElements';

import logo from '../../../images/logo_main.svg';

const Header = ({ children, isUserLoggedIn }) => {
  const [isScroll, setIsScroll] = useState(false);

  const changeHeader = () => {
    if (window.scrollY > 0) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  };

  const toggleHome = () => {
    scroll.scrollToTop();
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
          <LogoWrapLink
            to={isUserLoggedIn ? '/dashboard' : '/home'}
            onClick={isUserLoggedIn ? null : toggleHome}>
            <Logo src={logo} />
          </LogoWrapLink>
          {children}
        </HeaderWrapper>
      </HeaderContainer>
    </>
  );
};

export default Header;
