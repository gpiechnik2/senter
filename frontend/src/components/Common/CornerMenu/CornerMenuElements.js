import styled from 'styled-components';

import { BsGrid3X3Gap } from 'react-icons/bs';

export const CornerMenuContainer = styled.div`
  grid-area: corner-panel;

  position: relative;
  z-index: 10;
  background: #5d38db;

  position: ${({ isScroll }) => (isScroll ? 'fixed' : 'relative')};
  top: ${({ isScroll }) => (isScroll ? '0' : 'auto')};
  right: ${({ isScroll }) => (isScroll ? '0' : 'auto')};
  width: ${({ isScroll }) => (isScroll ? '55px' : 'auto')};
  height: ${({ isScroll }) => (isScroll ? '50px' : 'auto')};
`;

export const CornerMenuWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  border-left: 1px solid #d8d8d8;
`;
export const IconWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
export const IconGrid = styled(BsGrid3X3Gap)`
  font-size: 21px;
  color: #fff;
`;
