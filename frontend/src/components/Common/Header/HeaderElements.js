import styled from 'styled-components';

export const HeaderContainer = styled.header`
  grid-area: header;

  z-index: 10;
  background-color: #5d38db;

  position: ${({ isScroll }) => (isScroll ? 'fixed' : 'static')};
  top: ${({ isScroll }) => (isScroll ? '0' : 'auto')};
  width: ${({ isScroll }) => (isScroll ? 'calc(100% - 80px)' : 'auto')};
  height: ${({ isScroll }) => (isScroll ? '70px' : 'auto')};
`;

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 4px 10px;

  display: flex;
  justify-content: space-between;
`;

export const LogoWrap = styled.div`
  width: 60px;
  height: 60px;
`;
export const Logo = styled.img`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
`;
