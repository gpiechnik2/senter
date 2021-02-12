import { useState } from 'react';
import { Switch, Route } from 'react-router-dom';

import PrivateLayout from '../components/Layouts/PrivateLayout';
import Aside from '../components/Common/Aside/index';
import Header from '../components/Common/Header';
import CornerMenu from '../components/Common/CornerMenu/index';
import SearchPanel from '../components/Common/SearchPanel/index';
import CrumbNav from '../components/Common/CrumbNav';
import { ContentContainer } from '../components/Layouts/ContentContainer';

import { Toaster } from 'react-hot-toast';

import DashboardPage from './dashboard';
import KeywordPlannerPage from './keyword-planner';
import WebsiteAnalysisPage from './website-analysis';
import KeywordAnalysisPage from './keyword-analysis';
import ContentAnalysisPage from './content-analysis';
import WebsiteInfoPage from './website-info';
import AuditPage from './audit';
import HelpPage from './help';
import SettingsPage from './settings';
import ArticlesPage from './articles';
import KeywordsPage from './keywords';
import AuditsPage from './audits';
import NotFoundPage from './notfound';

const PrivateLayoutPage = () => {
  const [isAsideOpen, setIsAsideOpen] = useState(false);
  const [isPanelMobileOpen, setIsPanelMobileOpen] = useState(false);
  const togglePanelMobile = () => setIsPanelMobileOpen(!isPanelMobileOpen);

  const isUserLoggedIn = Boolean(localStorage.getItem('profile'));
  return (
    <>
      <PrivateLayout>
        <Aside
          isPanelMobileOpen={isPanelMobileOpen}
          setIsPanelMobileOpen={setIsPanelMobileOpen}
          togglePanelMobile={togglePanelMobile}
          isAsideOpen={isAsideOpen}
          setIsAsideOpen={setIsAsideOpen}
        />
        <Header isUserLoggedIn={isUserLoggedIn}>
          <SearchPanel />
        </Header>
        <CornerMenu
          setIsPanelMobileOpen={setIsPanelMobileOpen}
          isAsideOpen={isAsideOpen}
          setIsAsideOpen={setIsAsideOpen}
          isPrivate={true}
          isUserLoggedIn={isUserLoggedIn}
        />
        <CrumbNav />
        <ContentContainer>
          <Toaster
            toastOptions={{
              className: '',
              style: {
                margin: '80px',
                textAlign: 'center',
                background: '#5D38DB',
                padding: '16px',
                color: '#fff',
              },

              success: {
                duration: 3200,
              },
              error: {
                duration: 3200,
              },
            }}
          />
          <Switch>
            <Route exact path='/dashboard' component={DashboardPage} />
            <Route
              exact
              path='/keyword-planner'
              component={KeywordPlannerPage}
            />
            <Route
              exact
              path='/website-analysis'
              component={WebsiteAnalysisPage}
            />
            <Route
              exact
              path='/keyword-analysis'
              component={KeywordAnalysisPage}
            />
            <Route
              exact
              path='/content-analysis'
              component={ContentAnalysisPage}
            />
            <Route exact path='/website-info' component={WebsiteInfoPage} />
            <Route exact path='/audit' component={AuditPage} />
            <Route exact path='/help' component={HelpPage} />
            <Route path='/settings' component={SettingsPage} />
            <Route exact path='/articles' component={ArticlesPage} />
            <Route exact path='/keywords' component={KeywordsPage} />
            <Route exact path='/audits' component={AuditsPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </ContentContainer>
      </PrivateLayout>
    </>
  );
};

export default PrivateLayoutPage;
