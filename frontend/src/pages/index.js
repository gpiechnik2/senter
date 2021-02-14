import LandingPage from '../components/PageComponents/LandingPage';
import ScrollToTop from '../components/Common/ScrollToTop';
import PageTransition from '../components/animations/PageTransition';

const HomePage = () => {
  return (
    <PageTransition>
      <ScrollToTop />
      <LandingPage />
    </PageTransition>
  );
};

export default HomePage;
