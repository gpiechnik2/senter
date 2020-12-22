import styled from 'styled-components';

export const HeaderContainer = styled.header`
  grid-area: header;
  width: 100%;
  padding: 4px 10px;

  display: flex;
  justify-content: space-between;

  background-color: #fff;
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
