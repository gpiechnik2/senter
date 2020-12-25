import Dropdown from 'react-dropdown-aria';

import {
  WebAnalysisWrapper,
  WebAnalysisMenu,
  MenuList,
  MenuElement,
  MenuLink,
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
} from './WebsiteAnalysisElements';

import './Dropdown.css';

import { ButtonBasic } from '../../Common/ButtonElements';

const WebsiteAnalysis = () => {
  const options2 = [
    { title: 'all', value: 'Wszystkie' },
    { title: 'op1', value: 'opcja 1' },
    { title: 'op2', value: 'opcja 2' },
    { title: 'op3', value: 'opcja 3' },
  ];

  return (
    <>
      <WebAnalysisWrapper>
        <WebAnalysisMenu>
          <MenuList>
            <MenuElement>
              <MenuLink>SEO</MenuLink>
            </MenuElement>
            <MenuElement>
              <MenuLink>Techniczne błędy</MenuLink>
            </MenuElement>
            <MenuElement>
              <MenuLink>Search Console</MenuLink>
            </MenuElement>
          </MenuList>
        </WebAnalysisMenu>
        <WebSelectWrap>
          <SelectWrap>
            <Dropdown
              className='dropdownMain'
              contentClassName='dropdownList'
              placeholder='Wybierz'
              options={options2}
              optionClassName='dropdownOption'
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
      </WebAnalysisWrapper>
    </>
  );
};

export default WebsiteAnalysis;
