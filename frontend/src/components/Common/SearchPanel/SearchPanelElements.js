import styled, { keyframes } from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';

import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from '@reach/combobox';
import '@reach/combobox/styles.css';

const searchPanelAnimation = keyframes`
 from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export const SearchPanelContainer = styled.div`
  height: 100%;

  @media screen and (max-width: 768px) {
    display: none;
  }
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
  justify-content: flex-start;
  align-items: center;
`;

export const SearchBtn = styled.button`
  margin-right: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background: transparent;
  color: inherit;
  font: inherit;
  cursor: pointer;
`;

export const IconSearch = styled(FiSearch)`
  color: #fff;
  font-size: 18px;
`;

export const Input = styled(ComboboxInput)`
  width: 195px;
  font-size: 12px;
  border: none;
  background: #5d38db;
  color: #fff;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;

  &::placeholder {
    color: #fff;
    opacity: 1;
  }
  &:focus {
    border-bottom: none;
  }
`;

export const MyCombobox = styled(Combobox)`
  padding-right: 10px;
  display: flex;
  align-items: center;
`;

export const MyComboboxPopover = styled(ComboboxPopover)`
  position: absolute;
  top: 70px;
  right: -1px;
  max-height: 275px;

  padding: 30px 0 15px 0;

  white-space: nowrap;
  overflow-x: hidden;
  text-overflow: ellipsis;
  overflow-y: scroll;
  animation: ${searchPanelAnimation} 0.3s ease;

  background-color: #fff;
  border: 1px solid #e8ebf2;
  border-top: none;
  box-shadow: -10px 9px 21px rgba(128, 152, 213, 0.07);
`;

export const MyComboboxList = styled(ComboboxList)`
  margin: 0;
  padding-top: 10px;
  list-style: none;

  user-select: none;
`;

export const MyComboboxOption = styled(ComboboxOption)`
  margin: 0;
  padding: 11px 20px;
  font-size: 12px;
  color: #747474;
  font-weight: normal !important;
  cursor: pointer;

  &:hover {
    background-color: #f6f7fa;
    color: #8954ba;
  }
`;
export const LinkElement = styled(LinkRouter)``;
