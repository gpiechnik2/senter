import { Fade } from 'react-awesome-reveal';

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
          <Fade direction='left' triggerOnce delay={150}>
            <Column1>
              <TextWrap>
                <TextElement>
                  <Title>Content analysis</Title>
                  <Text>
                    It provides real time text analysis, meta description, page
                    title, and keywords or keyphrase in terms of SEO. This helps
                    you write more friendly text under search engine.
                  </Text>
                </TextElement>
              </TextWrap>
            </Column1>
          </Fade>
          <Fade direction='right' triggerOnce delay={150}>
            <Column2>
              <ImgWrap>
                <Img src={image} alt='content analysis' />
              </ImgWrap>
            </Column2>
          </Fade>
        </ContentWrapper>
      </ContentContainer>
    </>
  );
};

export default Content;
