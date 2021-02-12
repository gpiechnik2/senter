import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';

export const UserPanelMobileContainer = styled.div`
  display: none;

  border: 1px solid #e6e8f1;
  background-color: #fff;
  color: #686868;

  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    position: fixed;
    right: auto;
    top: 0;
    bottom: 15%;
    left: ${({ isPanelMobileOpen }) => (isPanelMobileOpen ? 0 : '-240px')};
    width: 240px;
    transition: 0.3s ease;
    z-index: 16;
  }
`;
export const UserPanelMobileWrapper = styled.div`
  padding: 32px 102px 10px 40px;
`;
export const UserHelloMobile = styled.div`
  height: 31px;
  width: 163px;
  font-size: 13px;
  text-align: left;
  border-bottom: 1px solid #e6e8f1;
`;
export const UserPanelMobileList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 115px;
  margin-top: 18px;
`;
export const UserPanelMobileElement = styled.li`
  margin-bottom: 18px;
`;
export const UserPanelMobileLink = styled(LinkRouter)`
  font-size: 13px;
  color: #686868;
  cursor: pointer;

  &:hover {
    color: #5d38db;
    transition: 0.3s ease;
  }
`;

export const UserPanelMobileLogout = styled.button`
  padding: 0 !important;
  border: none;
  font-size: 13px;
  background: none !important;
  color: #686868;
  cursor: pointer;

  &:hover {
    color: #5d38db;
    transition: 0.3s ease;
  }
`;
