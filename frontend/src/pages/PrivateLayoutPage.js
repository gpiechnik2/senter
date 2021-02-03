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

const PrivateLayoutPage = () => {
  return (
    <>
      <PrivateLayout>
        <Aside />
        <Header isPrivate={true}>
          <SearchPanel />
        </Header>
        <CornerMenu isPrivate={1} />
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
            <Route path='/dashboard' component={DashboardPage} />
            <Route path='/keyword-planner' component={KeywordPlannerPage} />
            <Route path='/website-analysis' component={WebsiteAnalysisPage} />
            <Route path='/keyword-analysis' component={KeywordAnalysisPage} />
            <Route path='/content-analysis' component={ContentAnalysisPage} />
            <Route path='/website-info' component={WebsiteInfoPage} />
            <Route path='/audit' component={AuditPage} />
            <Route path='/help' component={HelpPage} />
            <Route path='/settings' component={SettingsPage} />
            <Route path='/articles' component={ArticlesPage} />
            <Route path='/keywords' component={KeywordsPage} />
            <Route path='/audits' component={AuditsPage} />
          </Switch>
        </ContentContainer>
      </PrivateLayout>
    </>
  );
};

export default PrivateLayoutPage;
