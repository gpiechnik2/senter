import styled from 'styled-components';
import { CgTrash } from 'react-icons/cg';

export const StaticContentWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const GraphicWrap = styled.div`
  width: 100%;
`;
export const StaticTextWrap = styled.div`
  width: 100%;
`;
export const StaticTitle = styled.h1`
  margin-bottom: 15px;
  font-size: 22px;
  color: #686868;
`;
export const StaticText = styled.p`
  margin-bottom: 20px;
  font-size: 13px;
  line-height: 20px;
  color: rgba(104, 104, 104, 0.8);
`;

export const DynamicContentWrap = styled.div`
  margin-top: 40px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

export const DeleteIconWrap = styled.div`
  margin-left: 20px;
  display: flex;
  align-items: center;
  font-size: 20px;
`;

export const DeleteIcon = styled(CgTrash)`
  color: #d56767;
`;
export const LinkWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const DynamicContentUnit = styled.div`
  margin-bottom: 18px;
  flex-basis: 33.333333%;
`;
