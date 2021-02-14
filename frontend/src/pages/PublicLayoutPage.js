import { Switch, Route, useLocation } from 'react-router-dom';

import { AnimatePresence } from 'framer-motion';

import LoginPage from './login';
import RegisterPage from './register';
import AboutUsPage from './about-us';
import SupportUsPage from './support-us';
import NewsPage from './news';
import HomePage from './index';

import { Toaster } from 'react-hot-toast';
import CookieConsent from 'react-cookie-consent';

import PublicLayout from '../components/Layouts/PublicLayout/index';
import Header from '../components/Common/Header';
import CornerMenu from '../components/Common/CornerMenu';
import { ContentContainer } from '../components/Layouts/ContentContainer';
import ScrollToTop from '../components/Common/ScrollToTop';

import './cookieConsent.css';

const PublicLayoutPage = () => {
  let location = useLocation();

  const isUserLoggedIn = Boolean(localStorage.getItem('profile'));
  return (
    <>
      <PublicLayout>
        <ScrollToTop />
        <Header isUserLoggedIn={isUserLoggedIn}></Header>
        <CornerMenu isUserLoggedIn={isUserLoggedIn} isPrivate={false} />
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
          <AnimatePresence exitBeforeEnter>
            <Switch location={location} key={location.pathname}>
              <Route path='/home' component={HomePage} />
              <Route path='/login' component={LoginPage} />
              <Route path='/register' component={RegisterPage} />
              <Route path='/about' component={AboutUsPage} />
              <Route path='/support' component={SupportUsPage} />
              <Route path='/news' component={NewsPage} />
            </Switch>
          </AnimatePresence>
          <CookieConsent
            cookieName='senter-cookieConsent'
            disableStyles={true}
            buttonClasses='cookiesBtn'
            containerClasses='cookiesContainer'
            contentClasses='cookiesContent'
            buttonText='Agree'>
            This website uses cookies to ensure you get the best experience on
            our website. By continuing to browse the site, you agree to our use
            of cookies.
          </CookieConsent>
        </ContentContainer>
      </PublicLayout>
    </>
  );
};

export default PublicLayoutPage;
