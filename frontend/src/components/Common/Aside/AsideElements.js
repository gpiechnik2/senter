import styled from 'styled-components';
import {
  CgHello,
  CgBrowse,
  CgPlayListSearch,
  CgFormatColor,
  // CgListTree,
  CgBrowser,
  CgFileDocument,
  CgReadme,
} from 'react-icons/cg';
import { VscSymbolKeyword } from 'react-icons/vsc';

export const AsideContainer = styled.aside`
  background-color: #ffffff;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 70px;
  height: 100vh;
  border-right: 1px solid #e6e8f1;
  transition: width 0.3s ease;
  z-index: 9;
  overflow: hidden;

  &:hover {
    width: 211px;
  }
`;
export const AsideWrap = styled.div`
  height: 100%;
  width: 100%;
  padding-top: 80px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const ToggleWrap = styled.div``;
export const Nav = styled.nav`
  width: 210px;
  overflow: hidden;
  background-color: #ffffff;
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
    border-right: 2.5px solid #8954ba;
  }
  &:hover a {
    color: #8954ba;
    overflow: hidden;
  }
`;
export const NavLink = styled.a`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 25px;
  font-weight: 100;
  font-size: 11px;
  color: #767676;

  &:hover {
    color: #8954ba;
  }
`;
export const IconWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 20px;
`;
export const IconHome = styled(CgHello)``;
export const IconWebsiteAnalysis = styled(CgBrowse)``;
export const IconKeywordsAnalysis = styled(VscSymbolKeyword)``;
export const IconCompetitionAnalysis = styled(CgPlayListSearch)``;
export const IconContentAnalysis = styled(CgFormatColor)``;
export const IconWebsiteRankTracker = styled(CgBrowser)``;
export const IconDocuments = styled(CgFileDocument)``;

export const NavName = styled.span`
  margin-left: 25px;
`;
export const HelpWrap = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  overflow: hidden;
  transition: all 0.1s ease;
  cursor: pointer;

  &:hover {
    border-right: 2.5px solid #8954ba;
  }
  &:hover a {
    color: #8954ba;
    overflow: hidden;
  }
`;
export const HelpLink = styled.a`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 25px;
  font-weight: 100;
  font-size: 11px;
  color: #767676;

  &:hover {
    color: #8954ba;
  }
`;
export const IconHelpWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 20px;
`;
export const IconHelp = styled(CgReadme)``;
export const HelpText = styled.span`
  margin-left: 25px;
`;
