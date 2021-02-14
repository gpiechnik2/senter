import { Fade } from 'react-awesome-reveal';

import {
  InfoContainer,
  InfoWrapper,
  Column1,
  Column2,
  Column3,
  TextContainer,
  TextTitle,
  TextP,
  ImgWrap,
  Img,
} from './InfoFirstElements';

import image from '../../../../images/landing_info.jpg';

const InfoFirst = () => {
  return (
    <>
      <InfoContainer id='inside'>
        <InfoWrapper>
          <Fade direction='left' triggerOnce delay={150}>
            <Column1>
              <TextContainer>
                <TextTitle>Easy to use</TextTitle>
                <TextP>You don’t need expert knowledge to use the tool.</TextP>
              </TextContainer>

              <TextContainer>
                <TextTitle>Free</TextTitle>
                <TextP>
                  You don’t have to pay for anything. Everything is completely
                  free.
                </TextP>
              </TextContainer>

              <TextContainer>
                <TextTitle>Suggestions</TextTitle>
                <TextP>
                  Along with the error analysis, you get a suggestions, how you
                  can improve your webpage.
                </TextP>
              </TextContainer>
            </Column1>
          </Fade>
          <Column2>
            <ImgWrap>
              <Img src={image} alt='info' />
            </ImgWrap>
          </Column2>
          <Fade direction='right' triggerOnce delay={150}>
            <Column3>
              <TextContainer>
                <TextTitle>One platform</TextTitle>
                <TextP>All the tools in one place.</TextP>
              </TextContainer>

              <TextContainer>
                <TextTitle>Open source</TextTitle>
                <TextP>
                  If you are a developer, you can check the source code at any
                  time.
                </TextP>
              </TextContainer>

              <TextContainer>
                <TextTitle>Save audits, keyword planner & articles</TextTitle>
                <TextP>
                  You can save your audits, text analytics, or keyword planner
                  at any time.
                </TextP>
              </TextContainer>
            </Column3>
          </Fade>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoFirst;
