import { NotFoundContainer, ImageWrap, Img } from './NotFoundElements';

import image from '../../../images/not_found.svg';

const NotFound = () => {
  return (
    <>
      <NotFoundContainer>
        <ImageWrap>
          <Img src={image} alt='page not found' />
        </ImageWrap>
      </NotFoundContainer>
    </>
  );
};

export default NotFound;
