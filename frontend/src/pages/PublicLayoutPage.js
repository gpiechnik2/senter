import { Switch, Route } from 'react-router-dom';

import LoginPage from './login';
import RegisterPage from './register';
import AboutUsPage from './about-us';
import SupportUsPage from './support-us';
import NewsPage from './news';
import HomePage from './index';

import { Toaster } from 'react-hot-toast';

import PublicLayout from '../components/Layouts/PublicLayout/index';
import Header from '../components/Common/Header';
import CornerMenu from '../components/Common/CornerMenu';
import { ContentContainer } from '../components/Layouts/ContentContainer';

const PublicLayoutPage = () => {
  return (
    <>
      <PublicLayout>
        <Header isPrivate={false}></Header>
        <CornerMenu isPrivate={false} />
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
            <Route path='/home' component={HomePage} />
            <Route path='/login' component={LoginPage} />
            <Route path='/register' component={RegisterPage} />
            <Route path='/about' component={AboutUsPage} />
            <Route path='/support' component={SupportUsPage} />
            <Route path='/news' component={NewsPage} />
          </Switch>
        </ContentContainer>
      </PublicLayout>
    </>
  );
};

export default PublicLayoutPage;
