import Articles from '../components/PageComponents/Articles';
import ScrollToTop from '../components/Common/ScrollToTop';
import PageTransition from '../components/animations/PageTransition';

const ArticlesPage = () => {
  return (
    <PageTransition>
      <ScrollToTop />
      <Articles />
    </PageTransition>
  );
};

export default ArticlesPage;
