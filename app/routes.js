import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './pages/App';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import TestingPage from './pages/TestingPage';
import ManagePage from './pages/ManagePage';
import SnippetPage from './pages/SnippetPage'

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
