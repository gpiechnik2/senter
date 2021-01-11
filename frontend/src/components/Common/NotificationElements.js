import styled from 'styled-components';
import { GrClose } from 'react-icons/gr';

export const NotificationWrapper = styled.span`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
`;

export const TextWrap = styled.span`
  text-align: center;
`;

export const NotificationText = styled.span`
  color: #fff;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LinkRefresh = styled.a`
  margin-left: 8px;
  display: block;
  color: #f8e71c;
  cursor: pointer;
`;

export const IconWrap = styled.span`
  margin-left: 25px;
  color: #fff;
  cursor: pointer;
`;

export const IconClose = styled(GrClose)`
  color: #fff;
`;
