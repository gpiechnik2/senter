import styled from 'styled-components';
import { NavLink as LinkRouter } from 'react-router-dom';
import { BsGrid3X3Gap } from 'react-icons/bs';

import {
  CgHome,
  CgList,
  CgBrowse,
  CgDatabase,
  CgFileDocument,
  CgDesktop,
  CgWebsite,
  CgComment,
} from 'react-icons/cg';

export const AsideContainer = styled.aside`
  background-color: #ffffff;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 40px;
  transition: width 0.3s ease;
  z-index: 9;
  overflow: hidden;
  background: #5d38db;
  transition: 0.4s ease;

  @media (min-width: 769px) {
    &:hover,
    &:hover a {
      width: 165px;
    }
  }
  @media screen and (max-width: 768px) {
    width: 240px;
    left: ${({ isAsideOpen }) => (isAsideOpen ? 0 : '-240px')};
    z-index: 15;
  }
`;
export const AsideWrap = styled.div`
  height: 100%;
  width: 100%;
  padding-top: 80px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 9;
`;
export const ToggleWrap = styled.div``;
export const Nav = styled.nav`
  width: 165px;
  overflow: hidden;
  background-color: #5d38db;
  z-index: 9;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
export const NavUl = styled.ul`
  display: flex;
  flex-direction: column;
`;
export const NavElement = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 12%;
  overflow: hidden;
  transition: all 0.1s ease;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    margin-bottom: 9%;
  }
`;
export const NavLink = styled(LinkRouter)`
  @media (min-width: 769px) {
    width: 30px;
    height: 19px;
    overflow: hidden;
  }
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 10px;
  font-weight: 100;
  font-size: 12px;
  color: #fff;

  &.active {
    border-right: 4px solid #fff;
  }

  @media screen and (max-width: 768px) {
    margin-left: 24px;
  }
`;
export const IconWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 19px;
`;
export const IconHome = styled(CgHome)``;
export const IconKeywordPlanner = styled(CgList)``;
export const IconWebsiteAnalysis = styled(CgBrowse)``;
export const IconKeywordAnalysis = styled(CgDatabase)``;
export const IconContentAnalysis = styled(CgFileDocument)``;
export const IconWebsiteInfo = styled(CgDesktop)``;
export const IconAudit = styled(CgWebsite)``;

export const NavName = styled.span`
  display: flex;
  align-items: center;
  margin-left: 20px;
  height: 19px;
  transition: 0.3s ease;
`;
export const HelpWrap = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  overflow: hidden;
  transition: all 0.1s ease;
  cursor: pointer;
`;
export const HelpLink = styled(LinkRouter)`
  @media (min-width: 769px) {
    width: 30px;
    overflow: hidden;
    &.active {
      border-right: 4px solid #fff;
    }
  }
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 10px;
  font-weight: 100;
  font-size: 12px;
  color: #fff;

  @media screen and (max-width: 768px) {
    margin-left: 24px;
  }
`;
export const IconHelpWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 20px;
  height: 25px;
  background: #fff;

  border-radius: 5px;
`;
export const IconHelp = styled(CgComment)`
  font-size: 19px;
  color: #5d38db;
`;
export const HelpText = styled.span`
  margin-left: 20px;
`;
export const UserPanelMobileIconWrap = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    margin-right: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
export const IconGrid = styled(BsGrid3X3Gap)`
  font-size: 21px;
  color: #fff;
`;
