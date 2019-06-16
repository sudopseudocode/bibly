// eslint-disable-next-line
const { app, BrowserWindow } = require("electron");
// import { app, BrowserWindow } from 'electron';

const createWindow = () => {
  // Create the browser window
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  win.loadFile('index.html');
};

app.on('ready', createWindow);
