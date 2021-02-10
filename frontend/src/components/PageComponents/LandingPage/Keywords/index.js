import {
  KeywordsContainer,
  KeywordsWrapper,
  Column1,
  ImgWrap,
  Img,
  Column2,
  TextWrap,
  TextElement,
  Title,
  Text,
} from './KeywordsElements';

import image from '../../../../images/landing_keywords.jpg';

const Keywords = () => {
  return (
    <>
      <KeywordsContainer>
        <KeywordsWrapper>
          <Column1>
            <ImgWrap>
              <Img src={image} alt='keywords' />
            </ImgWrap>
          </Column1>
          <Column2>
            <TextWrap>
              <TextElement>
                <Title>Keyword planner</Title>
                <Text>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy.
                </Text>
              </TextElement>
              <TextElement>
                <Title>Keyword analysis</Title>
                <Text>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy.
                </Text>
              </TextElement>
            </TextWrap>
          </Column2>
        </KeywordsWrapper>
      </KeywordsContainer>
    </>
  );
};

export default Keywords;
