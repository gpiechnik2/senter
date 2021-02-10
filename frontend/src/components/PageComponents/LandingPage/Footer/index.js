import {
  FooterContainer,
  FooterWrapper,
  FooterTitle,
  FooterLinkWrap,
  FooterLink,
} from './FooterElements';

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterWrapper>
          <FooterTitle>Have an idea? Tell us about it.</FooterTitle>
          <FooterLinkWrap>
            <FooterLink
              href='https://github.com/gpiechnik2/senter'
              target='_blank'>
              Send message
            </FooterLink>
          </FooterLinkWrap>
        </FooterWrapper>
      </FooterContainer>
    </>
  );
};

export default Footer;
