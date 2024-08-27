import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Sales from './pages/Sales';
import Inventory from './pages/Inventory';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/sales" component={Sales} />
        <Route path="/inventory" component={Inventory} />
      </Switch>
    </Router>
  );
};

export default App;
