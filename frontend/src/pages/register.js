import Register from '../components/PageComponents/Register';
import ScrollToTop from '../components/Common/ScrollToTop';
import PageTransition from '../components/animations/PageTransition';

const RegisterPage = () => {
  return (
    <PageTransition>
      <ScrollToTop />
      <Register />
    </PageTransition>
  );
};

export default RegisterPage;
