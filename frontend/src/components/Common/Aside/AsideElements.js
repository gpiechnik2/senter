import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';

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
  height: 100vh;
  transition: width 0.3s ease;
  z-index: 9;
  overflow: hidden;
  background: #5d38db;

  &:hover {
    width: 165px;
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

  &:hover {
    border-right: 2.5px solid #fff;
  }
  &:hover a {
    color: #fff;
    overflow: hidden;
  }
`;
export const NavLink = styled(LinkRouter)`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 10px;
  font-weight: 100;
  font-size: 11px;
  color: #fff;

  &:hover {
    color: #fff;
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
  margin-left: 20px;
`;
export const HelpWrap = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  overflow: hidden;
  transition: all 0.1s ease;
  cursor: pointer;

  &:hover {
    border-right: 2.5px solid #fff;
  }
  &:hover a {
    color: #fff;
    overflow: hidden;
  }
`;
export const HelpLink = styled(LinkRouter)`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 10px;
  font-weight: 100;
  font-size: 11px;
  color: #fff;
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
