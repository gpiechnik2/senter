import {
  SingleElementContainer,
  ColumnContainerBasic,
  GraphicContainer,
  GraphicImg,
} from '../../Common/ContainerElements';
import { FormTitle, FormText } from '../../Common/FormElements';

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
          <FormText>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy.
          </FormText>
        </ColumnContainerBasic>
      </SingleElementContainer>
    </>
  );
};

export default AboutUs;
