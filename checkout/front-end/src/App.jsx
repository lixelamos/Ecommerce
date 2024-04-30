import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Pay from './Pay'; // Assuming Pay and Success components are defined in separate files
import Success from './Success';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/pay">
          <Pay />
        </Route>
        <Route path="/success">
          <Success />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
