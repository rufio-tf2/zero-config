/* eslint-disable no-unused-vars, sort-keys */

const electron = require('electron');
const isDev = require('electron-is-dev');
const path = require('path');

const WINDOW_SETTINGS = {
  height: 672,
  width: 1087,
  minWidth: 640,
  minHeight: 480,
  center: true,
  show: false, // Show after maximized to avoid flash
  webPreferences: {
    devTools: true,
    nodeIntegration: true,
  },
};

let mainWindow = null;

const { app, BrowserWindow, dialog } = electron;

// dialog.showOpenDialog({ properties: ['openDirectory'] }, dirPaths => dirPaths);

app.requestSingleInstanceLock();
app.on('second-instance', (event, argv, cwd) => {
  if (mainWindow) {
    if (mainWindow.isMinimized()) {
      mainWindow.restore();
    }
    mainWindow.focus();
  }
});

function createWindow() {
  mainWindow = new BrowserWindow(WINDOW_SETTINGS);

  mainWindow.loadURL(
    isDev
      ? 'http://localhost:3000'
      : `file://${path.join(__dirname, '../build/index.html')}`,
  );

  if (isDev) {
    // Open the DevTools.
    //BrowserWindow.addDevToolsExtension('<location to your react chrome extension>');
    mainWindow.webContents.openDevTools();
  }

  // Hide until maximized to avoid flash
  mainWindow.maximize();
  mainWindow.show();

  mainWindow.on('closed', () => (mainWindow = null));
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  console.log('@@ELECTRON: window-all-closed');
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (window === null) {
    createWindow();
  }
});
