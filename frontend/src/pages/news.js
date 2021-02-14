import News from '../components/PageComponents/News';
import ScrollToTop from '../components/Common/ScrollToTop';
import PageTransition from '../components/animations/PageTransition';

const NewsPage = () => {
  return (
    <PageTransition>
      <ScrollToTop />
      <News />
    </PageTransition>
  );
};

export default NewsPage;
