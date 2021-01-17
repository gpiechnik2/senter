import { Switch, Route } from 'react-router-dom';

import LoginPage from './login';
import RegisterPage from './register';

import PublicLayout from '../components/Layouts/PublicLayout/index';
import Header from '../components/Common/Header';
import CornerMenu from '../components/Common/CornerMenu';
import { ContentContainer } from '../components/Layouts/ContentContainer';

const PublicLayoutPage = () => {
  return (
    <>
      <PublicLayout>
        <Header></Header>
        <CornerMenu isPrivate={0} />
        <ContentContainer>
          <Switch>
            <Route path='/login' component={LoginPage} />
            <Route exact path='/auth/users/' component={RegisterPage} />
          </Switch>
        </ContentContainer>
      </PublicLayout>
    </>
  );
};

export default PublicLayoutPage;
