import Dashboard from '../components/PageComponents/Dashboard/index';
import ScrollToTop from '../components/Common/ScrollToTop';
import PageTransition from '../components/animations/PageTransition';

const DashboardPage = () => {
  return (
    <PageTransition>
      <ScrollToTop />
      <Dashboard />
    </PageTransition>
  );
};

export default DashboardPage;
