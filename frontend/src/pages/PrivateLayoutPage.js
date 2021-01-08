import { Switch, Route } from 'react-router-dom';

import PrivateLayout from '../components/Layouts/PrivateLayout';
import Aside from '../components/Common/Aside/index';
import Header from '../components/Common/Header';
import CornerMenu from '../components/Common/CornerMenu/index';
import SearchPanel from '../components/Common/SearchPanel/index';
import CrumbNav from '../components/Common/CrumbNav';
import { ContentContainer } from '../components/Layouts/ContentContainer';

import DashboardPage from './dashboard';
import WebsiteAnalysisPage from './website-analysis';
import KeywordsAnalysisPage from './keywords-analysis';
import CompetitionAnalysisPage from './competition-analysis';
import ContentAnalysisPage from './content-analysis';
import WebsiteRankTrackerPage from './website-rank-tracker';
import DocumentsPage from './documents';
import HelpPage from './help';

const PrivateLayoutPage = () => {
  return (
    <>
      <PrivateLayout>
        <Aside />
        <Header>
          <SearchPanel />
        </Header>
        <CornerMenu />
        <CrumbNav />
        <ContentContainer>
          <Switch>
            <Route exact path='/dashboard' component={DashboardPage} />
            <Route
              exact
              path='/dashboard/website-analysis'
              component={WebsiteAnalysisPage}
            />
            <Route
              exact
              path='/dashboard/keywords-analysis'
              component={KeywordsAnalysisPage}
            />
            <Route
              exact
              path='/dashboard/competition-analysis'
              component={CompetitionAnalysisPage}
            />
            <Route
              exact
              path='/dashboard/content-analysis'
              component={ContentAnalysisPage}
            />
            <Route
              exact
              path='/dashboard/website-rank-tracker'
              component={WebsiteRankTrackerPage}
            />
            <Route
              exact
              path='/dashboard/documents'
              component={DocumentsPage}
            />
            <Route exact path='/dashboard/help' component={HelpPage} />
          </Switch>
        </ContentContainer>
      </PrivateLayout>
    </>
  );
};

export default PrivateLayoutPage;
