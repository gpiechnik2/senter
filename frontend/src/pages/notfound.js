import NotFound from '../components/PageComponents/NotFound';
import ScrollToTop from '../components/Common/ScrollToTop';
import PageTransition from '../components/animations/PageTransition';

const NotFoundPage = () => {
  return (
    <PageTransition>
      <ScrollToTop />
      <NotFound />
    </PageTransition>
  );
};

export default NotFoundPage;
