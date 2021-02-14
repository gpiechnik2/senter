import KeywordAnalysis from '../components/PageComponents/KeywordAnalysis/index';
import ScrollToTop from '../components/Common/ScrollToTop';
import PageTransition from '../components/animations/PageTransition';

const KeywordAnalysisPage = () => {
  return (
    <PageTransition>
      <ScrollToTop />
      <KeywordAnalysis />
    </PageTransition>
  );
};

export default KeywordAnalysisPage;
