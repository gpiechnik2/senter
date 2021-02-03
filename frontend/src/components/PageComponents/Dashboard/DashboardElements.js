import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';
import {
  CgFileDocument,
  CgArrowBottomRightR,
  CgList,
  CgWebsite,
} from 'react-icons/cg';
import { HiOutlineMail } from 'react-icons/hi';

export const DashboardContainer = styled.div`
  max-width: 530px;
  margin-bottom: 30px;
`;
export const DashboardTextWrap = styled.div`
  margin-bottom: 40px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const DashboardUpdateWrap = styled.div`
  margin-bottom: 10px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;
export const DashboardTitle = styled.h1`
  font-size: 22px;
  font-weight: normal;
  color: #686868;
`;
export const DashboardDate = styled.span`
  font-size: 13px;
  color: #707070;
`;
export const DashboardText = styled.p`
  font-size: 13px;
  line-height: 20px;
  color: #707070;
`;
export const DashboardUserContentWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
export const ContentUnit = styled.div``;
export const ContentTitle = styled.div`
  margin-bottom: 10px;
  padding-left: 5px;
  display: flex;
  align-items: center;
`;

export const LinkIconWrap = styled.div`
  margin-right: 10px;
  display: flex;
  align-items: center;
  font-size: 18px;
`;

export const IconContentWrap = styled.div`
  margin-right: 10px;

  display: flex;
  align-items: center;
  font-size: 18px;
`;
export const ContentIcon = styled(CgFileDocument)``;
export const Title = styled.h2`
  font-size: 13px;
  color: #000000;
  font-weight: bold;
`;
export const ContentText = styled.p`
  margin-bottom: 9px;
  font-size: 12px;
  color: #707070;
`;
export const ContentLink = styled(LinkRouter)`
  display: flex;
  align-items: center;
  font-size: 12px;
  color: #5d38db;
`;
export const ExternalContentLink = styled.a`
  display: flex;
  align-items: center;
  font-size: 12px;
  color: #5d38db;
`;
export const DashboardTechnicalWrap = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
`;
export const TechnicalUnit = styled.div`
  margin-bottom: 24px;
`;

export const LinkIcon = styled(CgArrowBottomRightR)`
  transform: rotate(-90deg);
`;
export const ArticleIcon = styled(CgFileDocument)`
  color: #d28861;
`;
export const DocumentationIcon = styled(CgFileDocument)`
  color: #6caa89;
`;
export const KeywordIcon = styled(CgList)`
  color: #5d38db;
`;
export const AuditIcon = styled(CgWebsite)`
  color: #d56767;
`;
export const FeedbackIcon = styled(HiOutlineMail)`
  color: #ca629d;
`;
