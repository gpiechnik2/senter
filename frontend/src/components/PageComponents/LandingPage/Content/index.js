import {
  ContentContainer,
  ContentWrapper,
  Column1,
  TextWrap,
  TextElement,
  Title,
  Text,
  Column2,
  ImgWrap,
  Img,
} from './ContentElements';

import image from '../../../../images/landing_content.jpg';

const Content = () => {
  return (
    <>
      <ContentContainer>
        <ContentWrapper>
          <Column1>
            <TextWrap>
              <TextElement>
                <Title>Content analysis</Title>
                <Text>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy.
                </Text>
              </TextElement>
            </TextWrap>
          </Column1>
          <Column2>
            <ImgWrap>
              <Img src={image} alt='content analysis' />
            </ImgWrap>
          </Column2>
        </ContentWrapper>
      </ContentContainer>
    </>
  );
};

export default Content;
