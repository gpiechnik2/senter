import {
  WebsiteRankTrackerContainer,
  CardsContainer,
  CardsTitle,
  CardElementsWrap,
  CardLargeElement,
  CardsBtnWrap,
  CardPlusIcon,
} from './WebsiteRankTrackerElements';

import {
  FormContainer,
  FormTitle,
  FormText,
  FormWrap,
  FormInput,
  FormBtnWrap,
} from '../../Common/FormElements';

import { ButtonBasic } from '../../Common/ButtonElements';

const WebsiteRankTracker = () => {
  return (
    <>
      <WebsiteRankTrackerContainer>
        <FormContainer>
          <FormTitle>Analiza pozycji strony</FormTitle>
          <FormText>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy.
          </FormText>
          <FormWrap>
            <FormInput placeholder='Adres strony do analizy' />
            <FormBtnWrap>
              <ButtonBasic>Analizuj</ButtonBasic>
            </FormBtnWrap>
          </FormWrap>
        </FormContainer>
        <CardsContainer>
          <CardsTitle>Obserwowane słowa bądź frazy kluczowe </CardsTitle>
          <CardElementsWrap>
            <CardLargeElement></CardLargeElement>
            <CardLargeElement></CardLargeElement>
            <CardLargeElement></CardLargeElement>
          </CardElementsWrap>
          <CardsBtnWrap>
            <ButtonBasic>
              <CardPlusIcon />
              Dodaj słowo kluczowe
            </ButtonBasic>
          </CardsBtnWrap>
        </CardsContainer>
      </WebsiteRankTrackerContainer>
    </>
  );
};

export default WebsiteRankTracker;
