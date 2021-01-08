import styled from 'styled-components';

import { BsGrid3X3Gap } from 'react-icons/bs';

export const CornerMenuContainer = styled.div`
  grid-area: corner-panel;

  position: relative;
  z-index: 10;
  background: #fff;

  position: ${({ isScroll }) => (isScroll ? 'fixed' : 'relative')};
  top: ${({ isScroll }) => (isScroll ? '0' : 'auto')};
  right: ${({ isScroll }) => (isScroll ? '0' : 'auto')};
  width: ${({ isScroll }) => (isScroll ? '80px' : 'auto')};
  height: ${({ isScroll }) => (isScroll ? '70px' : 'auto')};
`;

export const CornerMenuWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  border-left: 1px solid #e6e8f1;
  border-bottom: 1px solid #e6e8f1;
`;
export const IconWrap = styled.div`
  cursor: pointer;
`;
export const IconGrid = styled(BsGrid3X3Gap)`
  font-size: 26px;
  color: #5d38db;
`;
