import { Fade } from 'react-awesome-reveal';

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

import {
  ScannersContainer,
  ScannersWrapper,
  Column1,
  Column2,
  ContentWrap,
  Title,
  AccordionWrapper,
  TextWrap,
  TextP,
  ImgWrap,
  Img,
} from './ScannersElements';

import image from '../../../../images/landing_scanners.jpg';

const Scanners = () => {
  return (
    <>
      <ScannersContainer>
        <ScannersWrapper>
          <Fade direction='left' triggerOnce delay={150}>
            <Column1>
              <ContentWrap>
                <Title>Website scanners</Title>
                <AccordionWrapper>
                  <Accordion preExpanded={['1']}>
                    <AccordionItem uuid='1'>
                      <AccordionItemHeading>
                        <AccordionItemButton className='accordion__button--analysis'>
                          Website analysis
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel className='accordion__panel--analysis'>
                        <TextWrap>
                          <TextP>
                            It allows you to invetigate the web page code for
                            SEO. You get an analysis and tips on how to improve
                            the performance of the page and increase their
                            position in search engine. The analysis is detailed
                            and provides information of specific actions.
                          </TextP>
                        </TextWrap>
                      </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem>
                      <AccordionItemHeading>
                        <AccordionItemButton className='accordion__button--analysis'>
                          Audit
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel className='accordion__panel--analysis'>
                        <TextWrap>
                          <TextP>
                            Audit analyzes the entire domain for SEO and
                            provides you detailed analysis and improvement
                            opportunities. This is an extended web analysis.
                          </TextP>
                        </TextWrap>
                      </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem>
                      <AccordionItemHeading>
                        <AccordionItemButton className='accordion__button--analysis'>
                          Website info
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel className='accordion__panel--analysis'>
                        <TextWrap>
                          <TextP>
                            Thanks to it, you get basic information about page,
                            such as its keywords/keyphrase, description, or
                            external links. It’s truly recommended for research
                            in a specific competitor.
                          </TextP>
                        </TextWrap>
                      </AccordionItemPanel>
                    </AccordionItem>
                  </Accordion>
                </AccordionWrapper>
              </ContentWrap>
            </Column1>
          </Fade>
          <Fade direction='right' triggerOnce delay={150}>
            <Column2>
              <ImgWrap>
                <Img src={image} alt='website scanners' />
              </ImgWrap>
            </Column2>
          </Fade>
        </ScannersWrapper>
      </ScannersContainer>
    </>
  );
};

export default Scanners;
