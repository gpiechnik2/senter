import { Fade } from 'react-awesome-reveal';

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
          <Fade direction='left' triggerOnce delay={150}>
            <Column1>
              <ImgWrap>
                <Img src={image} alt='keywords' />
              </ImgWrap>
            </Column1>
          </Fade>
          <Fade direction='right' triggerOnce delay={150}>
            <Column2>
              <TextWrap>
                <TextElement>
                  <Title>Keyword planner</Title>
                  <Text>
                    With the keyword planner you can automate selection of
                    keywords or keyphrase which will help with positioning of
                    your website. There are several sources to do this - you can
                    get up to six types of suggestions. It will save your time
                    and help you to avoid manual researches.
                  </Text>
                </TextElement>
                <TextElement>
                  <Title>Keyword analysis</Title>
                  <Text>
                    You get information about the competition pages. Keyword
                    analysis helps you to scan all of the pages that interest
                    you. You can do a quick research of first positions for a
                    keywords or keyphrase. This gives us the opportunity to
                    „look” what we could change on our website to get a similar
                    result.
                  </Text>
                </TextElement>
              </TextWrap>
            </Column2>
          </Fade>
        </KeywordsWrapper>
      </KeywordsContainer>
    </>
  );
};

export default Keywords;
