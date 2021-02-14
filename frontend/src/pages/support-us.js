import SupportUs from '../components/PageComponents/SupportUs';
import ScrollToTop from '../components/Common/ScrollToTop';
import PageTransition from '../components/animations/PageTransition';

const SupportUsPage = () => {
  return (
    <PageTransition>
      <ScrollToTop />
      <SupportUs />
    </PageTransition>
  );
};

export default SupportUsPage;
