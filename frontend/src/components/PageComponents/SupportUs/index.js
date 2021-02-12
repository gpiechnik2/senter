import {
  SingleElementContainer,
  ColumnContainerBasic,
  GraphicContainer,
  GraphicImg,
} from '../../Common/ContainerElements';
import { FormTitle } from '../../Common/FormElements';
import { ExternalLink } from '../../Common/UserContentElements';
import { AboutUsText } from '../AboutUs/AboutUsElements';

import graphic from '../../../images/support_us.jpg';

const SupportUs = () => {
  return (
    <>
      <SingleElementContainer>
        <ColumnContainerBasic>
          <GraphicContainer>
            <GraphicImg src={graphic} />
          </GraphicContainer>
          <FormTitle>Support us</FormTitle>
          <AboutUsText>
            If you found a bug or have an idea, how we can upgrade our product,
            send us a message on:
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

export default SupportUs;
