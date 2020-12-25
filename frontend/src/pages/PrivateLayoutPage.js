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
          </Switch>
        </ContentContainer>
      </PrivateLayout>
    </>
  );
};

export default PrivateLayoutPage;
