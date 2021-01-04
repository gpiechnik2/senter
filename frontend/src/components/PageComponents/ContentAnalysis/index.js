import {
  ContentAnalysisContainer,
  FormContainer,
  BtnWrap,
  BtnIcon,
  FormWrapper,
  FormItemsWrap,
  FormInput,
  MetaDiv,
  MetaP,
  MetaTextArea,
  ContentDiv,
  ContentP,
  ContentTextArea,
  TableContainer,
  TableWrapper,
  TableTitle,
  TableElementsWrapper,
  TableElement,
  ElementWrapFirst,
  ElementBox,
  ElementText,
  ElementWrapSecond,
  ElementWrap,
} from './ContentAnalysisElements';

import { ButtonBasic } from '../../Common/ButtonElements';

const ContentAnalysis = () => {
  return (
    <>
      <ContentAnalysisContainer>
        <FormContainer>
          <BtnWrap>
            <ButtonBasic>
              <BtnIcon />
              Ściągnij analizę
            </ButtonBasic>
          </BtnWrap>
          <FormWrapper>
            <FormItemsWrap>
              <FormInput placeholder='Tytuł*' required />
              <FormInput placeholder='Słowo bądź fraza kluczowa' />
              <FormInput placeholder='Page title' />
              <MetaDiv>
                <MetaP>Meta description</MetaP>
                <MetaTextArea cols='30' rows='10' />
              </MetaDiv>
              <ContentDiv>
                <ContentP>Content</ContentP>
                <ContentTextArea cols='30' rows='10' />
              </ContentDiv>
            </FormItemsWrap>
          </FormWrapper>
        </FormContainer>
        <TableContainer>
          <TableWrapper>
            <TableTitle>Słowo kluczowe</TableTitle>
            <TableElementsWrapper>
              <TableElement>
                <ElementWrapFirst>
                  <ElementBox />
                  <ElementText>Status</ElementText>
                </ElementWrapFirst>

                <ElementWrapSecond>
                  <ElementText>Typ</ElementText>
                </ElementWrapSecond>

                <ElementWrap>
                  <ElementText>Wiadomość</ElementText>
                </ElementWrap>
              </TableElement>

              <TableElement>
                <ElementWrapFirst>
                  <ElementBox />
                  <ElementText>Pozytywny</ElementText>
                </ElementWrapFirst>

                <ElementWrapSecond>
                  <ElementText>Fraza kluczowa</ElementText>
                </ElementWrapSecond>

                <ElementWrap>
                  <ElementText>
                    Created dashboard with shipment value and sales. Lorem ipsum
                    dolor mit set. Created dashboard with shipment value and
                    sales. Lorem ipsum dolor mit set. Created dashboard with
                    shipment value and sales. Lorem ipsum dolor mit set. Created
                    dashboard with shipment value and sales. Lorem ipsum dolor
                    mit set.
                  </ElementText>
                </ElementWrap>
              </TableElement>
              <TableElement>
                <ElementWrapFirst>
                  <ElementBox />
                  <ElementText>Pozytywny</ElementText>
                </ElementWrapFirst>

                <ElementWrapSecond>
                  <ElementText>Page title</ElementText>
                </ElementWrapSecond>

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
                  <ElementText>Meta description</ElementText>
                </ElementWrapSecond>

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
            <TableTitle>Page title</TableTitle>
            <TableElementsWrapper>
              <TableElement>
                <ElementWrapFirst>
                  <ElementBox />
                  <ElementText>Status</ElementText>
                </ElementWrapFirst>

                <ElementWrapSecond>
                  <ElementText>Typ</ElementText>
                </ElementWrapSecond>

                <ElementWrap>
                  <ElementText>Wiadomość</ElementText>
                </ElementWrap>
              </TableElement>

              <TableElement>
                <ElementWrapFirst>
                  <ElementBox />
                  <ElementText>Pozytywny</ElementText>
                </ElementWrapFirst>

                <ElementWrapSecond>
                  <ElementText>Content</ElementText>
                </ElementWrapSecond>

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
                  <ElementText>Fraza kluczowa</ElementText>
                </ElementWrapSecond>

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
                  <ElementText>Fraza kluczowa</ElementText>
                </ElementWrapSecond>

                <ElementWrap>
                  <ElementText>
                    Created dashboard with shipment value and sales. Lorem ipsum
                    dolor mit set.
                  </ElementText>
                </ElementWrap>
              </TableElement>
            </TableElementsWrapper>
          </TableWrapper>
        </TableContainer>
      </ContentAnalysisContainer>
    </>
  );
};

export default ContentAnalysis;
