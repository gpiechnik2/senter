import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';

export const WebAnalysisWrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
`;
export const WebAnalysisMenu = styled.nav`
  width: 100%;
  height: 70px;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  border-bottom: 1px solid #e6e8f1;
`;
export const MenuList = styled.ul`
  padding-left: 4vw;
  padding-right: 4vw;

  height: 100%;
  width: 100%;

  display: flex;
  align-items: center;
`;

export const MenuElement = styled.li`
  margin-right: 4%;
  height: 100%;

  cursor: pointer;
`;

export const MenuLink = styled(LinkRouter)`
  height: 100%;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  font-size: 12px;
  color: #757575;
  transition: 0.1s ease;

  &:hover {
    border-bottom: 2.5px solid #8954ba;
    color: #8954ba;
  }
`;

export const WebSwitchContainer = styled.div`
  width: 100%;
  height: 100%;
`;
