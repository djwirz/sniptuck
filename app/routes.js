import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './pages/App';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import TestingPage from './pages/TestingPage';
import ManagePage from './pages/ManagePage';
import SnippetPage from './pages/SnippetPage';
import LoginPage from './components/login';

const requireAuth = (store, b, c) => {
  const isSignedIn = store.getState().auth2.token !== null;

  if (isSignedIn) {
    console.log('this is the store.getState: ',store.getState())
    return (nextState, replace) => {
      replace('/home');
    };
  }
  console.log('this is isSignedIn: ',isSignedIn)
}

export default (store) => {
  return (
  <Route path="/" component={App}>
    <IndexRoute component={LoginPage} />
    <Route path="/home" component={HomePage} />
    <Route path="/search" component={SearchPage} onEnter={requireAuth(store)}  />
    <Route path="/testing" component={TestingPage} onEnter={requireAuth(store)}  />
      <Route path="/testing/:_id" component={TestingPage}/>
    <Route path="/manage" component={ManagePage} onEnter={requireAuth(store)}  />
    <Route path="/snippet" component={SnippetPage} onEnter={requireAuth(store)}  />
    <Route path="/login" component={LoginPage} />
  </Route>
)};
