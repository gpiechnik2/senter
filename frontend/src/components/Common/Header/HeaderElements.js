import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';

export const HeaderContainer = styled.header`
  grid-area: header;

  z-index: 10;
  background-color: #5d38db;

  position: ${({ isScroll }) => (isScroll ? 'fixed' : 'static')};
  top: ${({ isScroll }) => (isScroll ? '0' : 'auto')};
  width: ${({ isScroll }) => (isScroll ? 'calc(100% - 55px)' : 'auto')};
  height: ${({ isScroll }) => (isScroll ? '50px' : 'auto')};
`;

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 4px 10px;

  display: flex;
  justify-content: space-between;
`;

export const LogoWrapLink = styled(LinkRouter)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 14px;
  cursor: pointer;
`;
export const Logo = styled.img`
  -o-object-fit: cover;
  object-fit: cover;
`;
