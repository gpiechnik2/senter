import { useState, useEffect } from 'react';

import {
  HeaderContainer,
  HeaderWrapper,
  LogoWrap,
  Logo,
} from './HeaderElements';

import logo from '../../../images/logo.svg';

const Header = ({ children }) => {
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
