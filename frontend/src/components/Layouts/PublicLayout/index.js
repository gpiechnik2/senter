import { SigninContainer } from './SigninContainer';

const SigninLayout = (props) => {
  return (
    <>
      <SigninContainer>{props.children}</SigninContainer>
    </>
  );
};

export default SigninLayout;
