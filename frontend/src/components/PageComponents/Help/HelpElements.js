import styled from 'styled-components';

export const HelpContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 10%;
  padding-left: 4vw;
  padding-right: 4vw;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const CollapsibleWrap = styled.div`
  width: 530px;

  display: flex;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;

export const CollapsibleTitle = styled.h1`
  margin-bottom: 11px;
  font-size: 14px;
  color: #686868;
`;
export const CollapsibleText = styled.p`
  line-height: 25px;
  color: rgba(104, 104, 104, 0.8);
`;
export const CollapsibleLink = styled.a`
  margin-top: 20px;
  display: block;
  font-size: 13px;
  color: #4a90e2;
  border: none;
  background-color: #fff;
  cursor: pointer;
`;
