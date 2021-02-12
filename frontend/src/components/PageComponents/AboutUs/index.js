import { AboutUsText } from './AboutUsElements';
import {
  SingleElementContainer,
  ColumnContainerBasic,
  GraphicContainer,
  GraphicImg,
} from '../../Common/ContainerElements';
import { FormTitle } from '../../Common/FormElements';
import { ExternalLink } from '../../Common/UserContentElements';

import graphic from '../../../images/about_us.jpg';

const AboutUs = () => {
  return (
    <>
      <SingleElementContainer>
        <ColumnContainerBasic>
          <GraphicContainer>
            <GraphicImg src={graphic} />
          </GraphicContainer>
          <FormTitle>About us</FormTitle>
          <AboutUsText>
            We are the group of developers that creates and provides tools to
            improve SEO on websites. If you need to contact with us, send us a
            message on
            <ExternalLink
              href='https://github.com/gpiechnik2/senter'
              target='_blank'>
              https://github.com/gpiechnik2/senter
            </ExternalLink>
          </AboutUsText>
        </ColumnContainerBasic>
      </SingleElementContainer>
    </>
  );
};

export default AboutUs;
