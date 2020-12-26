import { PublicContainer } from './PublicContainer';

const PublicLayout = ({ children }) => {
  return (
    <>
      <PublicContainer>{children}</PublicContainer>
    </>
  );
};

export default PublicLayout;
