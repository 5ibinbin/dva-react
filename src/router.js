import React from 'react';
import { Router, Route } from 'dva/router';
import Login from './routes/Login/Login';
import Home from './routes/Home/Home';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={Login}/>
      <Route path="/home" component={Home}/>
    </Router>
  );
}

export default RouterConfig;
