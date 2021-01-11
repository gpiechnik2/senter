import styled from 'styled-components';

import { CgAdd } from 'react-icons/cg';

export const WebsiteRankTrackerContainer = styled.div`
  width: 100%;
  height: 100%;

  margin-top: 6%;
  padding-left: 4vw;
  padding-right: 4vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const CardsContainer = styled.div`
  margin-top: 8%;
  width: 100%;

  display: flex;
  flex-direction: column;
`;
export const CardsTitle = styled.h1`
  font-size: 17px;
  color: #686868;
  margin-bottom: 3%;
`;
export const CardElementsWrap = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
`;
export const CardLargeElement = styled.div`
  margin-right: 15px;
  margin-bottom: 15px;
  width: 360px;
  height: 220px;

  border: 1px solid red;
`;
export const CardsBtnWrap = styled.div`
  width: 100%;

  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const CardPlusIcon = styled(CgAdd)`
  margin-right: 4px;
  font-size: 16px;
`;
