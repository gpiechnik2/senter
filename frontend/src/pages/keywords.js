import Keywords from '../components/PageComponents/Keywords';
import ScrollToTop from '../components/Common/ScrollToTop';
import PageTransition from '../components/animations/PageTransition';

const KeywordsPage = () => {
  return (
    <PageTransition>
      <ScrollToTop />
      <Keywords />
    </PageTransition>
  );
};

export default KeywordsPage;
