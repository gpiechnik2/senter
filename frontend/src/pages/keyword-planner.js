import KeywordPlanner from '../components/PageComponents/KeywordPlanner/index';
import ScrollToTop from '../components/Common/ScrollToTop';
import PageTransition from '../components/animations/PageTransition';

const KeywordPlannerPage = () => {
  return (
    <PageTransition>
      <ScrollToTop />
      <KeywordPlanner />
    </PageTransition>
  );
};

export default KeywordPlannerPage;
