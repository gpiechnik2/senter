import styled from 'styled-components';

export const WebAnalysisWrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
`;
export const WebAnalysisMenu = styled.nav`
  width: 100%;
  height: 70px;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  border-bottom: 1px solid #e6e8f1;
`;
export const MenuList = styled.ul`
  padding-left: 4vw;
  padding-right: 4vw;

  height: 100%;
  width: 100%;

  display: flex;
  align-items: center;
`;

export const MenuElement = styled.li`
  margin-right: 4%;
  height: 100%;

  cursor: pointer;
`;

export const MenuLink = styled.a`
  height: 100%;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  font-size: 12px;
  color: #757575;
  transition: 0.1s ease;

  &:hover {
    border-bottom: 2.5px solid #8954ba;
    color: #8954ba;
  }
`;

export const WebSelectWrap = styled.div`
  padding-left: 4vw;
  padding-right: 4vw;
  margin-bottom: 4vw;

  height: 65px;
  width: 100%;

  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;
export const SelectForm = styled.div``;
export const SelectLabel = styled.div``;

export const TableContainer = styled.div`
  padding-left: 4vw;
  padding-right: 4vw;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const TableWrapper = styled.div`
  height: 300px;
  width: 100%;
  margin-bottom: 50px;

  display: flex;
  flex-direction: column;
`;
export const ButtonWrap = styled.div`
  padding-left: 4vw;
  padding-right: 4vw;
  margin-bottom: 5%;
  width: 100%;

  display: flex;
  justify-content: flex-end;
`;

export const TableTitle = styled.h2`
  font-size: 15px;
  color: #686868;
  margin-bottom: 5%;
`;
export const TableElementsWrapper = styled.div`
  width: 100%;
  overflow-x: scroll;

  display: flex;
  flex-direction: column;
`;
export const TableElement = styled.div`
  width: 100%;
  height: 60px;

  display: flex;
  align-items: center;

  border-bottom: 1px solid #e6e8f1;
`;
export const ElementWrapFirst = styled.div`
  width: 10%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const ElementWrapSecond = styled.div`
  width: 20%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const ElementWrap = styled.div`
  width: 35%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const ElementBox = styled.span`
  width: 20px;
  height: 20px;
  margin-right: 10px;

  display: block;
  border-radius: 2px;
  border: 1px solid #979797;
`;
export const ElementText = styled.p`
  font-size: 12px;
  color: #686868;
`;
export const SelectWrap = styled.div`
  width: 20%;
`;
