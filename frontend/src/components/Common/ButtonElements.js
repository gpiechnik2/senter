import styled from 'styled-components';
import { FcGoogle } from 'react-icons/fc';
import { GrFormPrevious, GrFormNext } from 'react-icons/gr';

export const ButtonBasic = styled.button`
  padding: 10px 35px;
  min-height: 40px;
  min-width: 138px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 13px;
  background-color: #5d38db;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export const IconGoogle = styled(FcGoogle)`
  margin-right: 10px;
  font-size: 24px;
`;

export const ButtonGoogle = styled.button`
  width: 100%;
  min-height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 13px;
  color: #707070;
  background-color: #ffffff;
  border: 1px solid #171717;
  border-radius: 3px;
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    color: #fff;
    background-color: #707070;
  }
`;

export const PreviousIcon = styled(GrFormPrevious)`
  font-size: 16px;
  line-height: 42px;
  color: #707070;
`;
export const NextIcon = styled(GrFormNext)`
  font-size: 16px;
  line-height: 42px;
  color: #707070;
`;
