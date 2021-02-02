import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import HomePage from './pages';
import PublicLayoutPage from './pages/PublicLayoutPage';
import PrivateLayoutPage from './pages/PrivateLayoutPage';

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
        <Route path='/' component={HomePage} exact />
        <Route exact path='/login' component={PublicLayoutPage} />
        <Route exact path='/register' component={PublicLayoutPage} />
        <Route exact path='/about-us' component={PublicLayoutPage} />
        <Route path='/dashboard' component={PrivateLayoutPage} />
        <Route path='/keyword-planner' component={PrivateLayoutPage} />
        <Route path='/website-analysis' component={PrivateLayoutPage} />
        <Route path='/keyword-analysis' component={PrivateLayoutPage} />
        <Route path='/content-analysis' component={PrivateLayoutPage} />
        <Route path='/website-info' component={PrivateLayoutPage} />
        <Route path='/audit' component={PrivateLayoutPage} />
        <Route path='/help' component={PrivateLayoutPage} />
        <Route path='/settings' component={PrivateLayoutPage} />
      </Switch>
    </Router>
  );
};

export default App;
