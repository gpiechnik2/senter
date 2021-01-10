import styled from 'styled-components';
import { HiArrowNarrowLeft } from 'react-icons/hi';

export const CrumbNavContainer = styled.div`
  grid-area: crumb-nav;
  /* background: #5d38db; */
`;
export const CrumbNavWrap = styled.div`
  padding-left: 4%;
  padding-right: 4%;

  width: 100%;
  height: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  /* border-top-left-radius: 10px; */
  background: #fff;
  border-bottom: 1px solid #e6e8f1;
`;
export const CrumbNavList = styled.ul`
  display: flex;
  align-items: center;

  font-size: 10px;

  li + li::before {
    content: '/ ';
    color: #a4a5a6;
  }
`;
export const CrumbNavElement = styled.li`
  margin-right: 2px;
`;
export const CrumbNavLink = styled.a`
  cursor: pointer;
  color: #a4a5a6;
  transition: 0.3s;

  &:hover {
    color: #757575;
  }
`;
export const CrumbNavBackWrap = styled.div``;
export const CrumbNavBackLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 16px;
  color: #a4a5a6;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    color: #757575;
  }
`;
export const IconWrap = styled.div`
  margin-right: 4%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const IconArrowLeft = styled(HiArrowNarrowLeft)``;

export const EdgeElement = styled.div`
  position: fixed;
  top: 70px;
  left: 70px;

  width: 20px;
  height: 20px;

  background: #5d38db;
  overflow: hidden;
`;
export const EdgeElement2 = styled.div`
  position: absolute;
  bottom: 0px;
  right: 0px;

  width: 20px;
  height: 20px;

  border-top-left-radius: 10px;
  background: #fff;
`;
