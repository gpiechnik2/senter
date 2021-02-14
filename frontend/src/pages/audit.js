import Audit from '../components/PageComponents/Audit/index';
import ScrollToTop from '../components/Common/ScrollToTop';
import PageTransition from '../components/animations/PageTransition';

const AuditPage = () => {
  return (
    <PageTransition>
      <ScrollToTop />
      <Audit />
    </PageTransition>
  );
};

export default AuditPage;
