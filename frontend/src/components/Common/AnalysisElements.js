import styled from 'styled-components';
import {
  CgCodeSlash,
  CgReorder,
  CgNotes,
  CgCode,
  CgLink,
  CgImage,
  CgAttribution,
  CgFontHeight,
  CgAlbum,
} from 'react-icons/cg';

export const AuditAnalysisContainer = styled.div`
  max-width: 530px;
`;

export const TableLargeContainer = styled.div`
  min-width: 530px;
  margin-bottom: 15px;
  padding: 14px;
  padding-bottom: 10px;

  display: flex;
  border: 1px solid #d0d6e6;

  @media screen and (max-width: 768px) {
    min-width: auto;
    width: 100%;
  }
`;

export const TableSmallContainer = styled.div`
  width: 100%;
  margin-bottom: 15px;

  display: flex;
  justify-content: space-between;
`;

export const SmallTableWrapper = styled.div`
  width: 48%;
  padding: 14px;

  display: flex;
  border: 1px solid #d0d6e6;
`;

export const TableIconWrapper = styled.div`
  margin-right: 10px;
  width: 5%;
  height: 100%;

  display: flex;
  justify-content: center;
  color: #6caa89;
`;

export const TableTextWrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const TitleCountWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const TableTextTitle = styled.h1`
  margin-bottom: 5px;
  font-size: 13px;
  font-weight: bold;
`;

export const CountNumber = styled.span`
  font-size: 14px;
  color: #5d38db;
  font-weight: bold;
`;

export const TableTextContentWrap = styled.ul`
  display: flex;
  flex-direction: column;
`;
export const TableText = styled.li`
  margin-bottom: 4px;
  font-size: 13px;
  color: #707070;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ExpandableAnalysisContainer = styled.div`
  min-width: 530px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media screen and (max-width: 768px) {
    min-width: auto;
    width: 100%;
  }
`;

export const AnalysisElementWrapper = styled.div`
  min-width: 530px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  overflow-x: scroll;
  @media screen and (max-width: 768px) {
    min-width: auto;
    width: 100%;
  }
`;
export const AnalysisElement = styled.div`
  margin-bottom: 9px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
export const ElementTitle = styled.h1`
  margin-bottom: 4px;
  font-size: 13px;
  font-weight: bold;
`;
export const ElementText = styled.p`
  font-size: 13px;
  color: rgba(104, 104, 104, 0.8);
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const MessageAnalysisWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ObjectMappingWrap = styled.div`
  width: 100%;
`;

export const MessageAnalysisElementWrap = styled.div`
  padding: 10px 10px 10px 0;
  width: 100%;

  display: flex;
  justify-content: space-between;

  border-bottom: 1px solid #d0d6e6;
`;
export const StatusElement = styled.div`
  justify-self: flex-start;
  width: 20%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;
export const StatusBar = styled.span`
  width: 20px;
  height: 20px;
  margin-right: 10px;
  display: block;
  border-radius: 2px;
  border: 1px solid #979797;
`;
export const StatusText = styled.p`
  line-height: 20px;
  font-size: 13px;
  color: #000000;
`;
export const MessageElement = styled.div`
  width: 78%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;
// ElementText
export const MessageText = styled.p`
  line-height: 20px;
  font-size: 13px;
  color: #000000;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const IconUrl = styled(CgCodeSlash)``;
export const IconTitle = styled(CgFontHeight)``;
export const IconDescription = styled(CgNotes)``;
export const IconUrlTitle = styled(CgCode)``;
export const IconKeyword = styled(CgReorder)``;
export const IconH1 = styled(CgAlbum)``;
export const IconH2 = styled(CgAlbum)``;
export const IconOtherH = styled(CgAlbum)``;
export const IconInternalLinks = styled(CgLink)``;
export const IconExternalLinks = styled(CgLink)``;
export const IconImagesCount = styled(CgImage)``;
export const IconUrlStatus = styled(CgAttribution)``;
