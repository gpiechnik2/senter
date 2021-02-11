import styled, { keyframes } from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';

export const panelAnimation = keyframes`
from {
  opacity:0;
}
to {
  opacity:1;
}
`;

export const UserPanelPublicContainer = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};

  transition: all 0.5s linear;
  width: 280px;
  position: absolute;
  top: 51px;
  right: 0;

  animation: ${panelAnimation} 0.3s ease;

  border: 1px solid #e6e8f1;
  border-top: none;
  background-color: #fff;
  color: #686868;
  box-shadow: -10px 9px 21px rgba(128, 152, 213, 0.07);

  @media screen and (max-width: 768px) {
    position: fixed;
    left: ${({ isOpen }) => (isOpen ? 0 : '-245px')};
    top: 0;
    bottom: 0;
    right: auto;
    width: 245px;
    display: block;
    transition: 0.3s ease;
    box-shadow: none;
  }
`;
export const UserPanelPublicWrapper = styled.div`
  padding: 32px 102px 32px 40px;

  @media screen and (max-width: 768px) {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;
export const UserHelloPublic = styled.div`
  height: 31px;
  width: 163px;
  font-size: 13px;
  text-align: left;
  border-bottom: 1px solid #e6e8f1;
`;
export const UserPanelPublicList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 115px;
  margin-top: 18px;
`;
export const UserPanelPublicElement = styled.li`
  margin-bottom: 18px;

  @media screen and (max-width: 768px) {
    margin-bottom: 26px;
  }
`;
export const UserPanelPublicLink = styled(LinkRouter)`
  font-size: 13px;
  color: #686868;
  cursor: pointer;

  &:hover {
    color: #5d38db;
    transition: 0.3s ease;
  }
`;
