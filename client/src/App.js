import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import dashboard from './pages/dashboard';
import detail from './pages/detail';
import './App.css';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={'/'} component={dashboard} />
        <Route exact path={'/detail/:id'} component={detail} />
      </Switch>
    </Router>
  );
}

export default App;
