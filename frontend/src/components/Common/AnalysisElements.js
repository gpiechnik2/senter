import styled from 'styled-components';
import { CgHome } from 'react-icons/cg';

export const TableLargeContainer = styled.div`
  min-width: 530px;
  padding: 14px;
  margin-bottom: 15px;

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
