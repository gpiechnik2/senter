import Help from '../components/PageComponents/Help';
import ScrollToTop from '../components/Common/ScrollToTop';
import PageTransition from '../components/animations/PageTransition';

const HelpPage = () => {
  return (
    <PageTransition>
      <ScrollToTop />
      <Help />
    </PageTransition>
  );
};

export default HelpPage;
