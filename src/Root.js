import React from 'react';
import './Root.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Dashboard from './components/pages/Dashboard/Dashboard';
import Config from './components/pages/Config/Config';
import Reports from './components/pages/Reports/Reports';

const Root = () => (
  <BrowserRouter>
    <div>
      <Route path="/" exact component={Dashboard} />
      <Route path="/reports" exact component={Reports} />
      <Route path="/config" exact component={Config} />
    </div>
  </BrowserRouter>
);

export default Root;
