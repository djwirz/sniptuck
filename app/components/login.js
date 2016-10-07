var electron = window.require('electron');
var ipcRenderer = window.require('electron').ipcRenderer;
var remote = electron.remote;
var BrowserWindow = remote.BrowserWindow;

import React from 'react';
import { connect } from 'react-redux';

import { loginUser, logout } from '../actions/auth2';
import Constants from '../utils/constants';

export class LoginPage extends React.Component {
  componentWillReceiveProps(nextProps) {
    const isLoggedIn = nextProps.token !== null;
    if (isLoggedIn) {
      ipcRenderer.send('reopen-window');
      this.context.router.push('/home');
    }
  }

  authGithub () {
    var self = this;
    var authWindow = new BrowserWindow({
      width: 800,
      height: 600,
      show: true,
      webPreferences: {
        nodeIntegration: false
      }
    });
    var githubUrl = 'https://github.com/login/oauth/authorize?';
    var authUrl = githubUrl + 'client_id=' + Constants.CLIENT_ID + '&scope=' + Constants.SCOPE;
    authWindow.loadURL(authUrl);

    function handleCallback (url) {
      var raw_code = /code=([^&]*)/.exec(url) || null;
      var code = (raw_code && raw_code.length > 1) ? raw_code[1] : null;
      var error = /\?error=(.+)$/.exec(url);

      if (code || error) {
        authWindow.destroy();
      }
      if (code) {
        self.requestGithubToken(code);
      } else if (error) {
        alert('Oops! Something went wrong and we couldn\'t ' +
          'log you in using Github. Please try again.');
      }
    }

    authWindow.on('close', function () {
      authWindow.destroy();
    });

    authWindow.webContents.on('will-navigate', function (event, url) {
      handleCallback(url);
    });

    authWindow.webContents.on('did-get-redirect-request', function (event, oldUrl, newUrl) {
      handleCallback(newUrl);
    });
  }

  requestGithubToken(code) {
    this.props.loginUser(code);
  }

  logout() {
    this.props.logout();
    this.context.router.replace('/login');
  }

  render() {
    return (
      <div>
        <button className="btn btn-lg btn-block" onClick={this.authGithub.bind(this)}>
          <i className="fa fa-github" />Log in to GitHub
        </button>
        <button className="btn btn-lg btn-block" onClick={this.logout.bind(this)}>
          <i className="fa fa-sign-out" /> Logout
        </button>
      </div>
    );
  }
};

LoginPage.contextTypes = {
  router: React.PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    token: state.auth2.token,
    response: state.auth2.response,
    failed: state.auth2.failed,
    isFetching: state.auth2.isFetching
  };
};

export default connect(mapStateToProps, { loginUser, logout })(LoginPage);
