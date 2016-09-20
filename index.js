const electron = require('electron');
const {app} = electron;
const {BrowserWindow} = require('electron');

app.on('ready', () => {
  var mainWindow = new BrowserWindow({
    width: 250,
    height: 250
  })
  //fun fact, no longer loadUrl -> changed to URL
  //can use node commands
  mainWindow.loadURL('file://' + __dirname + '/index.html')
  //mainWindow.openDevTools();
});
