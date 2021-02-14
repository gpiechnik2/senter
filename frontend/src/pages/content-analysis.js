import ContentAnalysis from '../components/PageComponents/ContentAnalysis';
import ScrollToTop from '../components/Common/ScrollToTop';
import PageTransition from '../components/animations/PageTransition';

const ContentAnalysisPage = () => {
  return (
    <PageTransition>
      <ScrollToTop />
      <ContentAnalysis />
    </PageTransition>
  );
};

export default ContentAnalysisPage;
