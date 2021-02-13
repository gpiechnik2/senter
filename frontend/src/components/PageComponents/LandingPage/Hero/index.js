import {
  HeroContainer,
  HeroContent,
  HeroH1,
  HeroP,
  HeroButtonWrap,
  LandingButton,
  HeroLinkWrap,
  HeroLink,
  HeroLogosContainer,
  HeroLogoWrap,
  HeroLogoElement,
} from './HeroElements';

import logo1 from '../../../../images/logo_1.svg';
import logo2 from '../../../../images/logo_2.svg';
import logo3 from '../../../../images/logo_3.svg';
import logo4 from '../../../../images/logo_4.svg';
import logo5 from '../../../../images/logo_5.svg';
import logo6 from '../../../../images/logo_6.svg';
import logo7 from '../../../../images/logo_7.svg';

import { textAnimation, textTransition } from '../../../animations/animations';

const logosData = [
  { src: logo1 },
  { src: logo2 },
  { src: logo3 },
  { src: logo4 },
  { src: logo5 },
  { src: logo6 },
  { src: logo7 },
];

const Hero = () => {
  return (
    <>
      <HeroContainer
        initial='hidden'
        animate='visible'
        variants={textAnimation}
        transition={textTransition}>
        <HeroContent>
          <HeroH1>
            All the tools you need to take care of positioning yourself, from
            scratch.
          </HeroH1>
          <HeroP>Analyze, audit, and analyze keywords from one place.</HeroP>
          <HeroButtonWrap>
            <LandingButton to='/register'>Start now</LandingButton>
          </HeroButtonWrap>
          <HeroLinkWrap>
            <HeroLink
              to='inside'
              smooth={true}
              duration={200}
              exact='true'
              offset={-100}>
              Learn more
            </HeroLink>
          </HeroLinkWrap>
          <HeroLogosContainer>
            {logosData.map((logo, i) => (
              <HeroLogoWrap key={i}>
                <HeroLogoElement src={logo.src} />
              </HeroLogoWrap>
            ))}
          </HeroLogosContainer>
        </HeroContent>
      </HeroContainer>
    </>
  );
};

export default Hero;
