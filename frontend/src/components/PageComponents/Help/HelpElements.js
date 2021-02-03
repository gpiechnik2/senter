import styled from 'styled-components';

export const HelpContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 6%;
  padding-left: 4vw;
  padding-right: 4vw;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const ColumnContainerHelpdesk = styled.div`
  max-width: 530px;

  @media screen and (max-width: 768px) {
    max-width: auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
