import styled from 'styled-components';

export const FooterContainer = styled.footer`
  padding: 0 30px;
  width: 100%;
  height: 240px;
  background-color: #5d38db;
`;
export const FooterWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const FooterTitle = styled.h3`
  margin-bottom: 17px;
  text-align: center;
  font-size: 34px;
  font-weight: 900;
  color: #fff;
`;
export const FooterLinkWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FooterLink = styled.a`
  padding: 12px 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #fff;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 900;
  background-color: #fff;
  color: #5d38db;
  cursor: pointer;
`;
