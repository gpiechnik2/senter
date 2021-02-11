import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import PublicLayoutPage from './pages/PublicLayoutPage';
import PrivateLayoutPage from './pages/PrivateLayoutPage';
import NotFoundPage from './pages/notfound';

import './App.css';
import './components/Common/DropdownMain.css';
import './components/Common/Accordion.css';
import './components/Common/DropdownSelect.css';
import './components/Common/Pagination.css';

const authGuard = (Component) => () => {
  return localStorage.getItem('profile') ? (
    <Component />
  ) : (
    <Redirect to='/login' />
  );
};

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Redirect to='/home' />
        </Route>
        <Route exact path='/home' component={PublicLayoutPage} />
        <Route exact path='/login' component={PublicLayoutPage} />
        <Route exact path='/register' component={PublicLayoutPage} />
        <Route exact path='/about' component={PublicLayoutPage} />
        <Route exact path='/support' component={PublicLayoutPage} />
        <Route exact path='/news' component={PublicLayoutPage} />
        <Route exact path='/dashboard' component={PrivateLayoutPage} />
        <Route exact path='/keyword-planner' component={PrivateLayoutPage} />
        <Route exact path='/website-analysis' component={PrivateLayoutPage} />
        <Route exact path='/keyword-analysis' component={PrivateLayoutPage} />
        <Route exact path='/content-analysis' component={PrivateLayoutPage} />
        <Route exact path='/website-info' component={PrivateLayoutPage} />
        <Route exact path='/audit' component={PrivateLayoutPage} />
        <Route exact path='/help' component={PrivateLayoutPage} />
        <Route path='/settings' component={PrivateLayoutPage} />
        <Route exact path='/articles' component={PrivateLayoutPage} />
        <Route exact path='/keywords' component={PrivateLayoutPage} />
        <Route exact path='/audits' component={PrivateLayoutPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  );
};

export default App;
