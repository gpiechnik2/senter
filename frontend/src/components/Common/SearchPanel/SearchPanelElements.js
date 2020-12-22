import styled from 'styled-components';
import { FiSearch } from 'react-icons/fi';

export const SearchPanelContainer = styled.div`
  height: 100%;
  width: 25%;
`;

export const SearchPanelWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
`;
export const SearchForm = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  /* display: block; */
`;

export const SearchBtn = styled.button`
  margin-right: 5px;
  border: none;
  background: transparent;
  color: inherit;
  font: inherit;
  cursor: pointer;
`;

export const IconSearch = styled(FiSearch)`
  color: #757575;
  font-size: 26px;
`;

export const Input = styled.input`
  width: 70%;
  font-size: 13px;
  border: none;
  color: #a4a5a6;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;

  &::placeholder {
    color: #a4a5a6;
    opacity: 1;
  }
`;
