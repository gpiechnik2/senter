import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HomePage from './pages';
import PublicLayoutPage from './pages/PublicLayoutPage';
import PrivateLayoutPage from './pages/PrivateLayoutPage';

import './App.css';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' component={HomePage} exact />
        <Route path='/login' component={PublicLayoutPage} />
        <Route path='/register' component={PublicLayoutPage} />
        <Route path='/dashboard' component={PrivateLayoutPage} />
      </Switch>
    </Router>
  );
};

export default App;
