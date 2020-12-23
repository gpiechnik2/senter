import styled from 'styled-components';
import { FiSearch } from 'react-icons/fi';

import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from '@reach/combobox';
import '@reach/combobox/styles.css';

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
  justify-content: flex-start;
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

export const Input = styled(ComboboxInput)`
  width: 90%;
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

export const MyCombobox = styled(Combobox)`
  width: 70%;
  display: flex;
  align-items: center;
`;

export const MyComboboxPopover = styled(ComboboxPopover)`
  position: absolute;
  top: 70px;
  right: -1px;
  width: 75%;
  max-height: 275px;

  padding: 30px 0 15px 0;

  white-space: nowrap;
  overflow-x: hidden;
  text-overflow: ellipsis;
  overflow-y: scroll;

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
  padding: 8px 20px;
  cursor: pointer;

  &:hover {
    background-color: #f6f7fa;
    color: #8954ba;
  }
`;
