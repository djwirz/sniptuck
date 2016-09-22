import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';
import SearchPage from './containers/SearchPage';
import TestingPage from './containers/TestingPage';
import ManagePage from './containers/ManagePage';
import SnippetPage from './containers/SnippetPage'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="/home" component={HomePage} />
    <Route path="/search" component={SearchPage} />
    <Route path="/testing" component={TestingPage} />
    <Route path="/manage" component={ManagePage} />
    <Route path="/snippet" component={SnippetPage} />
  </Route>
);
