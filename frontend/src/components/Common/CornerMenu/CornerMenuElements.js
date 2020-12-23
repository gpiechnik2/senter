import styled from 'styled-components';

import { BsGrid3X3Gap } from 'react-icons/bs';

export const CornerMenuContainer = styled.div`
  grid-area: corner-panel;

  position: relative;
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
