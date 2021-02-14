import Settings from '../components/PageComponents/Settings';
import ScrollToTop from '../components/Common/ScrollToTop';
import PageTransition from '../components/animations/PageTransition';

const SettingsPage = () => {
  return (
    <PageTransition>
      <ScrollToTop />
      <Settings />
    </PageTransition>
  );
};

export default SettingsPage;
