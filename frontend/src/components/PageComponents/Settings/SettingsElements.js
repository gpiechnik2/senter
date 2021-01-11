import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';

export const SettingsWrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
`;
export const SettingsMenu = styled.nav`
  width: 100%;
  height: 45px;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  border-bottom: 1px solid #e6e8f1;
`;
export const MenuList = styled.ul`
  padding-left: 3vw;
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
  padding-bottom: 7px;

  display: flex;
  justify-content: flex-start;
  align-items: flex-end;

  font-size: 12px;
  color: #707070;
  transition: 0.1s ease;

  &:hover {
    border-bottom: 2.5px solid #5d38db;
    color: #5d38db;
  }
`;

export const SettingsSwitchContainer = styled.div`
  width: 100%;
  height: 100%;
`;
