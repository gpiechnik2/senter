import Login from '../components/PageComponents/Login';
import ScrollToTop from '../components/Common/ScrollToTop';
import PageTransition from '../components/animations/PageTransition';

const LoginPage = () => {
  return (
    <PageTransition>
      <ScrollToTop />
      <Login />
    </PageTransition>
  );
};

export default LoginPage;
