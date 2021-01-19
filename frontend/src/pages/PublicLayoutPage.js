import { Switch, Route } from 'react-router-dom';

import LoginPage from './login';
import RegisterPage from './register';

import { Toaster } from 'react-hot-toast';

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
          <Toaster
            toastOptions={{
              className: '',
              style: {
                margin: '80px',

                background: '#5D38DB',
                padding: '16px',
                color: '#fff',
              },
            }}
          />
          <Switch>
            <Route path='/login' component={LoginPage} />
            <Route path='/register' component={RegisterPage} />
          </Switch>
        </ContentContainer>
      </PublicLayout>
    </>
  );
};

export default PublicLayoutPage;
