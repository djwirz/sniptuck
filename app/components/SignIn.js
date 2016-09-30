// var electron = window.require('electron');
// var ipcRenderer = window.require('electron').ipcRenderer;
// var remote = electron.remote;
// var BrowserWindow = remote.BrowserWindow;

const electron = window.require('electron');
const ipcRenderer = window.require('electron').ipcRenderer;
const remote = electron.remote;
const BrowserWindow = remote.BrowserWindow;

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { signInUser, signout } from '../actions/signIn';
import secrets from '../../config';

export class SignIn extends Component {
  componentWillReceiveProps(nextProps) {
    const isLoggedIn = nextProps.token !== null;
    if (isLoggedIn) {
      ipcRenderer.send('reopen-window');
    }
  }

  signout() {
    this.props.signout();
    this.context.router.replace('/signin');
}

  authGithub () {
    const self = this;

    //Build the OAuth consent page URL
    const authWindow = new BrowserWindow({
      width: 800,
      height: 600,
      show: true,
      webPreferences: {
        nodeIntegration: false
      }
    });
    const githubUrl = 'https://github.com/login/oauth/authorize?';
    const authUrl = githubUrl + 'client_id=' + secrets.client_id + '&scope=' + ['user:email', 'notifications'];
    authWindow.loadURL(authUrl);

    const handleCallback = url => {
      const raw_code = /code=([^&]*)/.exec(url) || null;
      const code = (raw_code && raw_code.length > 1) ? raw_code[1] : null;
      const error = /\?error=(.+)$/.exec(url);

      if (code || error) {
        // Close the browser if code found or error
        authWindow.destroy();
      }

      // If there is a code, proceed to get token from github
      if (code) {
        self.requestGithubToken(code);
      } else if (error) {
        alert('Oops! Something went wrong and we couldn\'t ' +
          'log you in using Github. Please try again.');
      }
    }

    // If "Done" button is pressed, hide "Loading"
    authWindow.on('close', () => {
      authWindow.destroy();
    });

    authWindow.webContents.on('will-navigate', (event, url) => {
      handleCallback(url);
    });

    authWindow.webContents.on('did-get-redirect-request', (event, oldUrl, newUrl) => {
      handleCallback(newUrl);
    });
  }

  requestGithubToken(code) {
    this.props.signInUser(code);
  }

  render() {
    return (
      <div>
        <button onClick={this.authGithub.bind(this)}>
          Sign in to GitHub
        </button>
        <button onClick={this.signout.bind(this)}>
          Sign out of GitHub
        </button>
      </div>
    );
  }
};

SignIn.contextTypes = {
  router: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    token: state.auth.token,
    response: state.auth.response,
    failed: state.auth.failed,
    isFetching: state.auth.isFetching
  };
};

export default connect(mapStateToProps, { signInUser, signout })(SignIn);
