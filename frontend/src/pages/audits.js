import React from 'react';
import Audits from '../components/PageComponents/Audits';
import ScrollToTop from '../components/Common/ScrollToTop';
import PageTransition from '../components/animations/PageTransition';

const AuditsPage = () => {
  return (
    <PageTransition>
      <ScrollToTop />
      <Audits />
    </PageTransition>
  );
};

export default AuditsPage;
