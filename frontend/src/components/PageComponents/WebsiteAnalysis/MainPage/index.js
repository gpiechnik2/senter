import Select from 'react-select';

import {
  WebSelectWrap,
  SelectWrap,
  TableContainer,
  TableWrapper,
  ButtonWrap,
  TableTitle,
  TableElementsWrapper,
  TableElement,
  ElementWrap,
  ElementBox,
  ElementText,
  ElementWrapFirst,
  ElementWrapSecond,
} from './MainPageElements';

import { ButtonBasic } from '../../../Common/ButtonElements';

import './Dropdown.css';

const MainPage = () => {
  const options1 = [
    { label: 'all', value: 'Wszystkie' },
    { label: 'op1', value: 'opcja 1' },
    { label: 'op2', value: 'opcja 2' },
    { label: 'op3', value: 'opcja 3' },
  ];
  return (
    <>
      <WebSelectWrap>
        <SelectWrap>
          <Select
            className='react-select-container-web'
            classNamePrefix='react-select-web'
            theme={(theme) => ({
              ...theme,
              borderRadius: 0,
              colors: {
                ...theme.colors,
                primary: 'white',
              },
            })}
            options={options1}
            placeholder='Wybierz'
          />
        </SelectWrap>
      </WebSelectWrap>
      <TableContainer>
        <TableWrapper>
          <TableTitle>Title tags</TableTitle>
          <TableElementsWrapper>
            <TableElement>
              <ElementWrapFirst>
                <ElementBox />
                <ElementText>Status</ElementText>
              </ElementWrapFirst>

              <ElementWrapSecond>
                <ElementText>Lokalizacja</ElementText>
              </ElementWrapSecond>

              <ElementWrap>
                <ElementText>Treść</ElementText>
              </ElementWrap>

              <ElementWrap>
                <ElementText>Analiza</ElementText>
              </ElementWrap>
            </TableElement>

            <TableElement>
              <ElementWrapFirst>
                <ElementBox />
                <ElementText>Pozytywny</ElementText>
              </ElementWrapFirst>

              <ElementWrapSecond>
                <ElementText>https://52studio.co/about-u</ElementText>
              </ElementWrapSecond>

              <ElementWrap>
                <ElementText>
                  Created dashboard with shipment value and sales. Lorem ipsum
                  dolor mit set.
                </ElementText>
              </ElementWrap>

              <ElementWrap>
                <ElementText>
                  Created dashboard with shipment value and sales. Lorem ipsum
                  dolor mit set.
                </ElementText>
              </ElementWrap>
            </TableElement>
            <TableElement>
              <ElementWrapFirst>
                <ElementBox />
                <ElementText>Pozytywny</ElementText>
              </ElementWrapFirst>

              <ElementWrapSecond>
                <ElementText>https://52studio.co/abou</ElementText>
              </ElementWrapSecond>

              <ElementWrap>
                <ElementText>
                  Created dashboard with shipment value and sales. Lorem ipsum
                  dolor mit set.
                </ElementText>
              </ElementWrap>

              <ElementWrap>
                <ElementText>
                  Created dashboard with shipment value and sales. Lorem ipsum
                  dolor mit set.
                </ElementText>
              </ElementWrap>
            </TableElement>
          </TableElementsWrapper>
        </TableWrapper>

        <TableWrapper>
          <TableTitle>Zdjęcia</TableTitle>
          <TableElementsWrapper>
            <TableElement>
              <ElementWrapFirst>
                <ElementBox />
                <ElementText>Status</ElementText>
              </ElementWrapFirst>

              <ElementWrapSecond>
                <ElementText>Lokalizacja</ElementText>
              </ElementWrapSecond>

              <ElementWrap>
                <ElementText>Treść</ElementText>
              </ElementWrap>

              <ElementWrap>
                <ElementText>Analiza</ElementText>
              </ElementWrap>
            </TableElement>

            <TableElement>
              <ElementWrapFirst>
                <ElementBox />
                <ElementText>Pozytywny</ElementText>
              </ElementWrapFirst>

              <ElementWrapSecond>
                <ElementText>https://52studio.co/about-u</ElementText>
              </ElementWrapSecond>

              <ElementWrap>
                <ElementText>
                  52-studio-projektowanie-stron-i-sklepow-inter…
                </ElementText>
              </ElementWrap>

              <ElementWrap>
                <ElementText>Wielkość zdjęcia poniżej 180MB.</ElementText>
              </ElementWrap>
            </TableElement>
          </TableElementsWrapper>
        </TableWrapper>
      </TableContainer>

      <ButtonWrap>
        <ButtonBasic>Eksportuj analizę</ButtonBasic>
      </ButtonWrap>
    </>
  );
};

export default MainPage;
