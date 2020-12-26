import styled from 'styled-components';

export const HeaderContainer = styled.header`
  grid-area: header;

  z-index: 10;
  background-color: #fff;
`;

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 4px 10px;

  display: flex;
  justify-content: space-between;

  border-bottom: 1px solid #e6e8f1;
`;

export const LogoWrap = styled.div`
  width: 60px;
  height: 60px;
`;
export const Logo = styled.img`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
`;
