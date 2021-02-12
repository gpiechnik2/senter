import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';
import { HiArrowNarrowLeft } from 'react-icons/hi';

export const CrumbNavContainer = styled.div`
  grid-area: crumb-nav;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const CrumbNavWrap = styled.div`
  padding-left: 2%;
  padding-right: 2%;

  width: 100%;
  height: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  border-bottom: 1px solid #e6e8f1;
`;
export const CrumbNavList = styled.ul`
  display: flex;
  align-items: center;
  font-size: 12px;
`;
export const CrumbNavElement = styled.li`
  margin-right: 2px;
`;
export const CrumbNavLink = styled(LinkRouter)`
  color: #a4a5a6;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    color: #757575;
  }
`;
export const CrumbNavBackWrap = styled.div``;
export const CrumbNavBackLink = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 12px;
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
export const IconArrowLeft = styled(HiArrowNarrowLeft)`
  font-size: 16px;
`;

export const EdgeElement = styled.div`
  position: fixed;
  top: 50px;
  left: 40px;

  width: 20px;
  height: 20px;

  border: none;
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
