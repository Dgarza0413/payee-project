import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import dashboard from './pages/dashboard';
import './App.css';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={'/'} component={dashboard} />
      </Switch>
    </Router>
  );
}

export default App;
