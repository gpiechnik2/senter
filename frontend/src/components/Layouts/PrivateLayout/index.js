import { PrivateContainer } from './PrivateContainer';

const PrivateLayout = ({ children }) => {
  return (
    <>
      <PrivateContainer>{children}</PrivateContainer>
    </>
  );
};

export default PrivateLayout;
