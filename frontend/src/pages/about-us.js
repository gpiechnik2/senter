import AboutUs from '../components/PageComponents/AboutUs';
import ScrollToTop from '../components/Common/ScrollToTop';
import PageTransition from '../components/animations/PageTransition';

const AboutUsPage = () => {
  return (
    <PageTransition>
      <ScrollToTop />
      <AboutUs />
    </PageTransition>
  );
};

export default AboutUsPage;
