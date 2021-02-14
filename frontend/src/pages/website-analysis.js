import WebsiteAnalysis from '../components/PageComponents/WebsiteAnalysis';
import ScrollToTop from '../components/Common/ScrollToTop';
import PageTransition from '../components/animations/PageTransition';

const WebsiteAnalysisPage = () => {
  return (
    <PageTransition>
      <ScrollToTop />
      <WebsiteAnalysis />
    </PageTransition>
  );
};

export default WebsiteAnalysisPage;
