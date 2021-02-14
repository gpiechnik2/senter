import WebsiteInfo from '../components/PageComponents/WebsiteInfo/index';
import ScrollToTop from '../components/Common/ScrollToTop';
import PageTransition from '../components/animations/PageTransition';

const WebsiteInfoPage = () => {
  return (
    <PageTransition>
      <ScrollToTop />
      <WebsiteInfo />
    </PageTransition>
  );
};

export default WebsiteInfoPage;
