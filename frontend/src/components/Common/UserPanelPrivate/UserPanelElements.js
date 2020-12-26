import styled, { keyframes } from 'styled-components';

export const panelAnimation = keyframes`
from {
  opacity:0;
}
to {
  opacity:1;
}
`;

export const UserPanelContainer = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};

  transition: all 0.5s linear;
  width: 280px;
  height: 250px;
  position: absolute;
  top: 70px;
  right: 0;

  animation: ${panelAnimation} 0.3s ease;

  border: 1px solid #e6e8f1;
  border-top: none;
  background-color: #fff;
  color: #686868;
  box-shadow: -10px 9px 21px rgba(128, 152, 213, 0.07);
`;
export const UserPanelWrapper = styled.div`
  padding: 32px 102px 32px 40px;
`;
export const UserHello = styled.div`
  height: 31px;
  width: 163px;
  font-size: 13px;
  text-align: left;
  border-bottom: 1px solid #e6e8f1;
`;
export const UserName = styled.span`
  color: #8954ba;
`;
export const UserPanelList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 115px;
  height: 132px;
  margin-top: 23px;
`;
export const UserPanelElement = styled.li`
  font-size: 12px;
  color: #686868;
`;
export const UserPanelLink = styled.a`
  cursor: pointer;

  &:hover {
    color: #5d38db;
    transition: 0.3s ease;
  }
`;
