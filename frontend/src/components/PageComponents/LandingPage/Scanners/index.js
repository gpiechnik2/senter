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
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy.
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
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy.
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
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy.
                        </TextP>
                      </TextWrap>
                    </AccordionItemPanel>
                  </AccordionItem>
                </Accordion>
              </AccordionWrapper>
            </ContentWrap>
          </Column1>
          <Column2>
            <ImgWrap>
              <Img src={image} alt='website scanners' />
            </ImgWrap>
          </Column2>
        </ScannersWrapper>
      </ScannersContainer>
    </>
  );
};

export default Scanners;
