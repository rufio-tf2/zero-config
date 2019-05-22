/* eslint-disable no-unused-vars, sort-keys */

const electron = require('electron');
const isDev = require('electron-is-dev');
const path = require('path');

const WINDOW_SETTINGS = {
  height: 672,
  width: 1087,
  minWidth: 320,
  minHeight: 240,
  show: false,
  webPreferences: {
    devTools: true,
    // nodeIntegration: true
  },
};

let window = null;

const { app, BrowserWindow } = electron;

app.requestSingleInstanceLock();
app.on('second-instance', (event, argv, cwd) => {
  if (window) {
    if (window.isMinimized()) {
      window.restore();
    }
    window.focus();
  }
});

function createWindow() {
  window = new BrowserWindow(WINDOW_SETTINGS);

  window.loadURL(
    isDev
      ? 'http://localhost:3000'
      : `file://${path.join(__dirname, '../build/index.html')}`,
  );

  if (isDev) {
    // Open the DevTools.
    //BrowserWindow.addDevToolsExtension('<location to your react chrome extension>');
    window.webContents.openDevTools();
  }

  window.on('closed', () => (window = null));
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (window === null) {
    createWindow();
  }
});
