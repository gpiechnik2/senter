import styled from 'styled-components';
import { CgHome } from 'react-icons/cg';

export const TableLargeContainer = styled.div`
  min-width: 530px;
  margin-bottom: 15px;
  padding: 14px;

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
`;

export const TableTextWrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const TableTextTitle = styled.h1`
  margin-bottom: 5px;
  font-size: 13px;
  font-weight: bold;
`;
export const TableTextContentWrap = styled.div`
  display: flex;
  flex-direction: column;
`;
export const TableText = styled.p`
  font-size: 13px;
  color: #707070;
`;
export const TableIcon = styled(CgHome)`
  color: #6caa89;
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
  justify-content: flex-start;

  border-bottom: 1px solid #d0d6e6;
`;
export const StatusElement = styled.div`
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
export const MessageText = styled.p`
  line-height: 20px;
  font-size: 13px;
  color: #000000;
`;
